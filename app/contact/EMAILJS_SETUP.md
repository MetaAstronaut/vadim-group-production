# EmailJS Setup Guide for Contact Page

## Quick Setup Steps

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (300 emails/month free)

### 2. Create Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the connection wizard
5. Copy the **Service ID** (e.g., `service_abc123`)

### 3. Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template structure:

```html
Subject: New Contact Form Submission from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Service Type: {{service_type}}
Location: {{location}}

Message:
{{message}}

---
Sent via Vadim Group Contact Form
```

4. Save and copy the **Template ID** (e.g., `template_xyz789`)

### 4. Get Public Key
1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `abcdef123456`)

### 5. Update Contact Page
Open `app/contact/page.tsx` and replace these placeholders:

```typescript
await emailjs.send(
  'YOUR_SERVICE_ID',    // Replace with your Service ID
  'YOUR_TEMPLATE_ID',   // Replace with your Template ID
  {
    from_name: data.name,
    from_email: data.email,
    phone: data.phone || 'Not provided',
    service_type: data.serviceType,
    location: data.location || 'Not provided',
    message: data.message,
  },
  'YOUR_PUBLIC_KEY'     // Replace with your Public Key
);
```

### 6. Test the Form
1. Run your development server: `npm run dev`
2. Navigate to `/contact`
3. Fill out and submit the form
4. Check your email for the message
5. Check EmailJS dashboard for delivery status

## Template Variables

The contact form sends these variables to EmailJS:

| Variable | Description | Required |
|----------|-------------|----------|
| `from_name` | User's full name | Yes |
| `from_email` | User's email address | Yes |
| `phone` | User's phone number | No |
| `service_type` | Selected service type | Yes |
| `location` | User's location/area | No |
| `message` | User's message | Yes |

## Troubleshooting

### Form submission fails
- Check that all three IDs are correct
- Verify your EmailJS account is active
- Check browser console for error messages
- Ensure you haven't exceeded your monthly quota

### Not receiving emails
- Check your spam folder
- Verify email service is connected properly in EmailJS
- Test the template in EmailJS dashboard
- Check EmailJS dashboard for delivery logs

### Rate limiting
- Free tier: 300 emails/month
- Consider upgrading if you need more
- Add CAPTCHA to prevent spam

## Alternative: Disable EmailJS Temporarily

If you want to test the form without EmailJS:

```typescript
const onSubmit = async (data: ContactFormData) => {
  setIsSubmitting(true);
  
  // Log to console instead
  console.log('Form Data:', data);
  
  // Show success message
  toast({
    title: "Message sent!",
    description: "We'll respond within 2-4 hours.",
  });
  
  reset();
  setIsSubmitting(false);
};
```

## Security Note

⚠️ **Important**: The Public Key is safe to expose in client-side code. However, consider adding:
1. CAPTCHA to prevent spam
2. Rate limiting on the backend
3. Email validation and sanitization

## Support

For EmailJS support: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)

