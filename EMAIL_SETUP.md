# Email Service Setup

## Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
# Email Configuration
# For Gmail, you'll need to generate an App Password
# Go to: Google Account > Security > 2-Step Verification > App passwords
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# Business email where contact form submissions will be sent
CONTACT_EMAIL=info@reimaginedyield.com

# Your website URL (for confirmation emails)
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Gmail Setup (Recommended)

1. **Enable 2-Factor Authentication** on your Google account
2. **Generate an App Password**:
   - Go to Google Account settings
   - Security > 2-Step Verification > App passwords
   - Generate a new app password for "Mail"
   - Use this password in `EMAIL_PASS`

## Alternative Email Services

You can also use other email services by modifying the transporter configuration in `/app/api/contact/route.ts`:

### Outlook/Hotmail
```javascript
const transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})
```

### Custom SMTP
```javascript
const transporter = nodemailer.createTransport({
  host: 'your-smtp-host.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})
```

## Features

- ✅ Contact form submissions sent to business email
- ✅ Automatic confirmation emails sent to users
- ✅ Professional HTML email templates
- ✅ Form validation and error handling
- ✅ Loading states and success/error messages
- ✅ Responsive design

## Testing

1. Start your development server: `npm run dev`
2. Navigate to `/contact`
3. Fill out and submit the contact form
4. Check your email for the submission
5. Check the user's email for the confirmation

## Troubleshooting

- **"Invalid login"**: Check your email credentials and app password
- **"Connection timeout"**: Verify your email service settings
- **"Rate limit exceeded"**: Wait a few minutes before trying again
- **Form not submitting**: Check browser console for errors
