# PHPMailer Installation Instructions

## Quick Installation

### Option 1: Download from GitHub (Recommended)

1. Visit: https://github.com/PHPMailer/PHPMailer/releases
2. Download the latest release ZIP file
3. Extract the ZIP file
4. Copy these files to `forms/PHPMailer/src/`:
   - `PHPMailer/src/PHPMailer.php`
   - `PHPMailer/src/SMTP.php`
   - `PHPMailer/src/Exception.php`

### Option 2: Using Git

```bash
cd forms/PHPMailer
git clone https://github.com/PHPMailer/PHPMailer.git temp
mv temp/src/* src/
rm -rf temp
```

### Option 3: Using Composer

```bash
composer require phpmailer/phpmailer
```

Then copy files from `vendor/phpmailer/phpmailer/src/` to `forms/PHPMailer/src/`

## Verify Installation

After installation, verify these files exist:
- `forms/PHPMailer/src/PHPMailer.php`
- `forms/PHPMailer/src/SMTP.php`
- `forms/PHPMailer/src/Exception.php`

## Configuration

Don't forget to update the SMTP password in `forms/contact.php`:
- Line 47: Replace `'An'` with your complete Titan Mail password

## Testing

Test the contact form on your portfolio site to ensure emails are being sent correctly.



