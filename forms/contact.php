<?php
/**
 * Contact Form Handler using PHPMailer
 * Sends emails via Titan Mail SMTP to george.site.dev@gmail.com
 */

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Require PHPMailer (adjust the path if needed)
require __DIR__ . '/PHPMailer/src/PHPMailer.php';
require __DIR__ . '/PHPMailer/src/SMTP.php';
require __DIR__ . '/PHPMailer/src/Exception.php';

/**
 * Simple .env loader (no external dependency)
 *
 * Reads KEY=VALUE pairs from a .env file and loads them into environment variables.
 * - Ignores empty lines and lines starting with '#'.
 * - Supports quoted values (KEY="some value").
 *
 * Note: This is intentionally small and framework-agnostic.
 *
 * @param string $path Absolute path to the .env file.
 * @return void
 */
function loadEnv(string $path): void
{
    if (!is_readable($path)) {
        // Optionally log in development:
        // error_log("Env file not readable: {$path}");
        return;
    }

    $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    if ($lines === false) {
        return;
    }

    foreach ($lines as $line) {
        $line = trim($line);

        // Skip comments and empty lines
        if ($line === '' || strpos($line, '#') === 0) {
            continue;
        }

        // Split KEY=VALUE (only first '=' matters)
        $parts = explode('=', $line, 2);
        if (count($parts) !== 2) {
            continue;
        }

        $key = trim($parts[0]);
        $value = trim($parts[1]);

        // Strip surrounding quotes if present
        if ($value !== '' && (
            ($value[0] === '"' && substr($value, -1) === '"') ||
            ($value[0] === "'" && substr($value, -1) === "'")
        )) {
            $value = substr($value, 1, -1);
        }

        if ($key === '') {
            continue;
        }

        // Set into env containers
        putenv($key . '=' . $value);
        $_ENV[$key] = $value;
        $_SERVER[$key] = $value;
    }
}

/**
 * Helper to get environment variable with optional default.
 *
 * @param string $key
 * @param mixed $default
 * @return mixed
 */
function env(string $key, $default = null)
{
    $value = getenv($key);
    if ($value === false) {
        return $default;
    }
    return $value;
}

/**
 * Check that required env vars are present.
 *
 * @param string[] $keys
 * @return array [bool $ok, string[] $missing]
 */
function checkRequiredEnv(array $keys): array
{
    $missing = [];

    foreach ($keys as $key) {
        $value = getenv($key);
        if ($value === false || $value === '') {
            $missing[] = $key;
        }
    }

    return [count($missing) === 0, $missing];
}

// Load .env file located one level above iPortfolio (workspace root)
$envPath = dirname(__DIR__) . DIRECTORY_SEPARATOR . '.env';
loadEnv($envPath);

// Check if form was submitted via POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405); // Method Not Allowed
    echo 'Method not allowed.';
    exit;
}

// Optional: basic origin/referrer check (best-effort)
// Configure APP_ALLOWED_HOST in .env to enable this.
$allowedHost = env('APP_ALLOWED_HOST');
if (!empty($allowedHost)) {
    $originHost = null;
    $refererHost = null;

    if (!empty($_SERVER['HTTP_ORIGIN'])) {
        $parts = parse_url($_SERVER['HTTP_ORIGIN']);
        if ($parts !== false && isset($parts['host'])) {
            $originHost = $parts['host'];
        }
    }

    if (!empty($_SERVER['HTTP_REFERER'])) {
        $parts = parse_url($_SERVER['HTTP_REFERER']);
        if ($parts !== false && isset($parts['host'])) {
            $refererHost = $parts['host'];
        }
    }

    // If Origin or Referer exist and don't match, block.
    if (
        ($originHost !== null && strcasecmp($originHost, $allowedHost) !== 0) ||
        ($refererHost !== null && strcasecmp($refererHost, $allowedHost) !== 0)
    ) {
        http_response_code(403); // Forbidden
        echo 'Access denied.';
        exit;
    }
}

// Sanitize and validate input
$name = isset($_POST['name']) ? htmlspecialchars(trim($_POST['name'])) : '';
$email = isset($_POST['email']) ? htmlspecialchars(trim($_POST['email'])) : '';
$subject = isset($_POST['subject']) ? htmlspecialchars(trim($_POST['subject'])) : '';
$message = isset($_POST['message']) ? htmlspecialchars(trim($_POST['message'])) : '';

// Validate required fields
if ($name === '' || $email === '' || $subject === '' || $message === '') {
    echo 'Please fill in all required fields.';
    exit;
}

// Validate email format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo 'Invalid email format.';
    exit;
}

// Ensure required env vars are present before sending
list($envOk, $missingEnv) = checkRequiredEnv([
    'SMTP_HOST',
    'SMTP_PORT',
    'SMTP_USERNAME',
    'SMTP_PASSWORD',
    'SMTP_FROM_EMAIL',
    'SMTP_TO_EMAIL',
]);

if (!$envOk) {
    // Optionally log details on the server:
    // error_log('Missing env vars in contact.php: ' . implode(', ', $missingEnv));
    echo 'Email sending is temporarily unavailable. Please try again later or contact me directly.';
    exit;
}

// Create PHPMailer instance
$mail = new PHPMailer(true);

try {
    // SMTP Configuration for Titan Mail (values from .env)
    $mail->isSMTP();
    $mail->Host       = env('SMTP_HOST', 'smtp.titan.email');
    $mail->SMTPAuth   = true;
    $mail->Username   = env('SMTP_USERNAME');         // Titan Mail email address
    $mail->Password   = env('SMTP_PASSWORD');         // Titan Mail password from .env
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // Use TLS
    $mail->Port       = (int) env('SMTP_PORT', 587);
    $mail->CharSet    = 'UTF-8';

    // Sender and recipient settings
    $fromEmail = env('SMTP_FROM_EMAIL');
    $fromName  = env('SMTP_FROM_NAME', 'Portfolio Contact Form');
    $toEmail   = env('SMTP_TO_EMAIL');
    $toName    = env('SMTP_TO_NAME', 'Georgiy Oriabinskiy');

    $mail->setFrom($fromEmail, $fromName);
    $mail->addAddress($toEmail, $toName);

    // Reply-to set to the form submitter's email
    $mail->addReplyTo($email, $name);

    // Email content
    $mail->isHTML(true);
    $mail->Subject = 'Portfolio Contact: ' . $subject;

    // Get client IP address for security logging
    $clientIP  = isset($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : 'Unknown';
    $timestamp = date('Y-m-d H:i:s');

    // Format HTML email body
    $body = "
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background-color: #149ddd; color: white; padding: 15px; border-radius: 5px 5px 0 0; }
                .content { background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
                .field { margin-bottom: 15px; }
                .field-label { font-weight: bold; color: #149ddd; }
                .footer { margin-top: 20px; padding-top: 15px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
            </style>
        </head>
        <body>
            <div class='container'>
                <div class='header'>
                    <h2>New Contact Form Submission</h2>
                </div>
                <div class='content'>
                    <div class='field'>
                        <span class='field-label'>From:</span> {$name} ({$email})
                    </div>
                    <div class='field'>
                        <span class='field-label'>Subject:</span> {$subject}
                    </div>
                    <div class='field'>
                        <span class='field-label'>Message:</span><br>
                        " . nl2br($message) . "
                    </div>
                </div>
                <div class='footer'>
                    <p><strong>Submitted:</strong> {$timestamp}</p>
                    <p><strong>IP Address:</strong> {$clientIP}</p>
                </div>
            </div>
        </body>
        </html>
    ";

    $mail->Body = $body;

    // Plain text alternative
    $mail->AltBody = "From: {$name} ({$email})\nSubject: {$subject}\n\nMessage:\n{$message}\n\nSubmitted: {$timestamp}\nIP: {$clientIP}";

    // Send email
    $mail->send();

    // Return "OK" for AJAX compatibility with existing JavaScript
    echo 'OK';
} catch (Exception $e) {
    // Generic error for user; don't expose details
    echo 'Email sending failed. Please try again later or contact me directly at george.site.dev@gmail.com';

    // Optionally log full error for debugging on the server:
    // error_log('PHPMailer Error: ' . $mail->ErrorInfo);
}
?>
