
<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

// Підключення PHPMailer (шлях залежить від структури проєкту)
require __DIR__ . '/PHPMailer/src/PHPMailer.php';
require __DIR__ . '/PHPMailer/src/SMTP.php';
require __DIR__ . '/PHPMailer/src/Exception.php';

/**
 * Простий завантажувач .env.
 *
 * Читає пари KEY=VALUE з файлу .env і завантажує їх у змінні середовища.
 * - Ігнорує порожні рядки та рядки, що починаються з '#'.
 * - Підтримує значення в лапках: KEY="some value".
 */
function loadEnv(string $path): void
{
    if (!is_readable($path)) {
        return;
    }

    $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    if ($lines === false) {
        return;
    }

    foreach ($lines as $line) {
        $line = trim($line);

        if ($line === '' || strpos($line, '#') === 0) {
            continue;
        }

        $parts = explode('=', $line, 2);
        if (count($parts) !== 2) {
            continue;
        }

        $key = trim($parts[0]);
        $value = trim($parts[1]);

        if ($value !== '' && (
            ($value[0] === '"' && substr($value, -1) === '"') ||
            ($value[0] === "'" && substr($value, -1) === "'")
        )) {
            $value = substr($value, 1, -1);
        }

        if ($key === '') {
            continue;
        }

        putenv($key . '=' . $value);
        $_ENV[$key] = $value;
        $_SERVER[$key] = $value;
    }
}

/**
 * Хелпер для читання env зі значенням за замовчуванням.
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
 * Логування помилок у файл.
 */
function logError(string $message, array $context = []): void
{
    $logDir = __DIR__ . DIRECTORY_SEPARATOR . 'logs';
    if (!is_dir($logDir)) {
        @mkdir($logDir, 0755, true);
    }

    $logFile = $logDir . DIRECTORY_SEPARATOR . 'contact-form-' . date('Y-m-d') . '.log';
    $timestamp = date('Y-m-d H:i:s');
    $contextStr = !empty($context) ? ' | Context: ' . json_encode($context, JSON_UNESCAPED_UNICODE) : '';
    $logMessage = "[{$timestamp}] {$message}{$contextStr}" . PHP_EOL;

    @file_put_contents($logFile, $logMessage, FILE_APPEND | LOCK_EX);
}

// Визначаємо шлях до `.env` на хостингу (cPanel може зберігати файл НЕ в `public_html`).
$accountRoot = dirname(__DIR__, 2); // .../public_html/forms -> .../

// Можливі розташування `.env`:
// 1) корінь акаунта:        /home/user/.env
// 2) корінь public_html:  /home/user/public_html/.env
// 3) backup_hidden:       /home/user/backup_hidden/.env
$envCandidates = [
    $accountRoot . DIRECTORY_SEPARATOR . '.env',
    dirname(__DIR__) . DIRECTORY_SEPARATOR . '.env',
    $accountRoot . DIRECTORY_SEPARATOR . 'backup_hidden' . DIRECTORY_SEPARATOR . '.env',
];

// Якщо HOST налаштував шлях через змінну оточення — використовуємо її першою.
$envOverride = getenv('ENV_PATH') ?: getenv('DOTENV_PATH');
if (!empty($envOverride)) {
    array_unshift($envCandidates, $envOverride);
}

$envPath = null;
foreach ($envCandidates as $candidate) {
    if (is_readable($candidate)) {
        $envPath = $candidate;
        break;
    }
}

if (!empty($envPath)) {
    loadEnv($envPath);
} else {
    // Логуємо, чи знайдено .env файл (списком кандидатів для діагностики).
    logError('WARNING: .env file not found or not readable', ['candidates' => $envCandidates]);
}

// Дозволяємо тільки POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo 'Method not allowed.';
    exit;
}

// Очищення вхідних даних (поля з твоєї форми)
$name    = isset($_POST['name']) ? htmlspecialchars(trim($_POST['name'])) : '';
$email   = isset($_POST['email']) ? htmlspecialchars(trim($_POST['email'])) : '';
$phone   = isset($_POST['phone']) ? htmlspecialchars(trim($_POST['phone'])) : '';
$company = isset($_POST['company']) ? htmlspecialchars(trim($_POST['company'])) : '';
$subject = isset($_POST['subject']) ? htmlspecialchars(trim($_POST['subject'])) : '';
$message = isset($_POST['message']) ? htmlspecialchars(trim($_POST['message'])) : '';

// Перевірка обов'язкових полів
if ($name === '' || $email === '' || $subject === '' || $message === '') {
    echo 'Please fill in all required fields.';
    exit;
}

// Перевірка формату email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo 'Invalid email format.';
    exit;
}

// Валідація номера телефону (якщо введено, але необов'язкове)
if ($phone !== '') {
    // Видаляємо всі символи, крім цифр, +, пробілів, дефісів, дужок
    $phoneClean = preg_replace('/[^0-9+\-() ]/', '', $phone);
    
    // Перевірка: мінімум 7 цифр (мінімальний номер)
    $phoneDigits = preg_replace('/[^0-9]/', '', $phoneClean);
    
    if (strlen($phoneDigits) < 7 || strlen($phoneDigits) > 15) {
        echo 'Invalid phone number format. Please enter a valid phone number (7-15 digits).';
        exit;
    }
    // Зберігаємо очищений номер
    $phone = $phoneClean;
}

// Перевірка env змінних перед використанням
$smtpHost = env('SMTP_HOST', 'smtp.gmail.com');
$smtpUsername = env('SMTP_USERNAME');
$smtpPassword = env('SMTP_PASSWORD');
$smtpPort = (int) env('SMTP_PORT', 587);

// Логуємо налаштування (без пароля)
logError('SMTP Configuration', [
    'host' => $smtpHost,
    'port' => $smtpPort,
    'username' => $smtpUsername,
    'password_set' => !empty($smtpPassword),
    'from_email' => env('SMTP_FROM_EMAIL'),
    'to_email' => env('SMTP_TO_EMAIL')
]);

// Перевірка критичних змінних
if (empty($smtpUsername) || empty($smtpPassword)) {
    $errorMsg = 'SMTP credentials missing in .env file';
    logError($errorMsg, [
        'username_set' => !empty($smtpUsername),
        'password_set' => !empty($smtpPassword)
    ]);
    echo 'Email sending failed. Please try again later.';
    exit;
}

$mail = new PHPMailer(true);

try {
    // Налаштування SMTP (все з .env)
    $mail->isSMTP();
    $mail->Host       = $smtpHost;
    $mail->SMTPAuth   = true;
    $mail->Username   = $smtpUsername;
    $mail->Password   = $smtpPassword;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = $smtpPort;
    $mail->CharSet    = 'UTF-8';
    
    // Додаткова діагностика для SMTP
    $mail->SMTPDebug = 0; // 0 = off, 2 = client/server messages
    $mail->Debugoutput = function($str, $level) {
        logError("PHPMailer Debug [Level {$level}]", ['message' => $str]);
    };

    // Відправник / одержувач
    $fromEmail = env('SMTP_FROM_EMAIL', env('SMTP_USERNAME'));
    $fromName  = env('SMTP_FROM_NAME', 'Portfolio Site');
    $toEmail   = env('SMTP_TO_EMAIL', $fromEmail);
    $toName    = env('SMTP_TO_NAME', 'Portfolio Owner');

    $mail->setFrom($fromEmail, $fromName);
    $mail->addAddress($toEmail, $toName);

    // Reply-To — користувач, який заповнив форму
    $mail->addReplyTo($email, $name);

    // Контент листа
    $mail->isHTML(true);
    $mail->Subject = 'Portfolio Contact: ' . $subject;

    $clientIP  = $_SERVER['REMOTE_ADDR'] ?? 'Unknown';
    $timestamp = date('Y-m-d H:i:s');

    // HTML тіло листа з полями твоєї форми
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
                        <span class='field-label'>Name:</span> {$name}
                    </div>
                    <div class='field'>
                        <span class='field-label'>Email:</span> {$email}
                    </div>
                    " . ($phone !== '' ? "<div class='field'>
                        <span class='field-label'>Phone:</span> {$phone}
                    </div>" : '') . "
                    " . ($company !== '' ? "<div class='field'>
                        <span class='field-label'>Company:</span> {$company}
                    </div>" : '') . "
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

    // Текстова альтернатива (plain text)
    $phoneLine = $phone !== '' ? "Phone: {$phone}\n" : '';
    $companyLine = $company !== '' ? "Company: {$company}\n" : '';
    $mail->AltBody = "Name: {$name}\nEmail: {$email}\n{$phoneLine}{$companyLine}Subject: {$subject}\n\nMessage:\n{$message}\n\nSubmitted: {$timestamp}\nIP: {$clientIP}";

    // Відправка листа
    logError('Attempting to send email', [
        'from' => $fromEmail,
        'to' => $toEmail,
        'subject' => $mail->Subject
    ]);
    
    $mail->send();
    
    logError('Email sent successfully', [
        'from' => $fromEmail,
        'to' => $toEmail
    ]);

    // Для сумісності з php-email-form JS: на успіх повертаємо "OK"
    echo 'OK';
} catch (Exception $e) {
    // Детальне логування помилки
    $errorDetails = [
        'exception_message' => $e->getMessage(),
        'exception_code' => $e->getCode(),
        'phpmailer_error' => $mail->ErrorInfo ?? 'N/A',
        'smtp_host' => $smtpHost,
        'smtp_port' => $smtpPort,
        'smtp_username' => $smtpUsername,
        'from_email' => $fromEmail ?? 'N/A',
        'to_email' => $toEmail ?? 'N/A'
    ];
    
    logError('Email sending failed', $errorDetails);
    
    // Для дебагу: тимчасово показуємо деталі (потім прибрати в продакшені)
    // Розкоментуй наступний рядок для дебагу:
    // echo 'Error: ' . $mail->ErrorInfo . ' | Exception: ' . $e->getMessage();
    
    // Загальне повідомлення про помилку (не показуємо деталей користувачу)
    echo 'Email sending failed. Please try again later.';
}
