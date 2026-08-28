# FormSubmit activation checklist

The contact form is configured to send to `codewithbahareh@gmail.com` through FormSubmit's HTTPS AJAX endpoint. The visible email address is plain text and is not a link.

## One-time activation after deployment

1. Deploy the site to `https://baharehwebdesign.github.io/`.
2. Open the published Contact form.
3. Send one short test message.
4. Open the activation email received at `codewithbahareh@gmail.com`.
5. Click FormSubmit's confirmation link.
6. Return to the website and send a second test message.
7. Confirm that the success message appears and the email arrives.
8. Check the Spam folder if the activation email is not visible.

## Delivery configuration in this version

- The form uses FormSubmit’s HTTPS AJAX endpoint for normal submissions.
- A standard `action` and `method="POST"` fallback is included if JavaScript is unavailable.
- The sender’s email is supplied as `_replyto`, so replies can go directly to the person who submitted the form.
- The current page URL and selected site language are included with each submission.

> **Important:** FormSubmit requires the one-time inbox confirmation above. GitHub Pages cannot bypass or perform this confirmation because only the owner of `codewithbahareh@gmail.com` can approve email delivery.

## Security and privacy settings already included

- AJAX submission over HTTPS
- Honeypot field named `_honey`
- No clickable or `mailto:` email address
- CAPTCHA disabled for the current static form flow
- User-facing error message if delivery fails

Activation cannot be completed by code or by GitHub Actions because it requires access to the destination email inbox.
