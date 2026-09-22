const transporter = require('../utils/mailer');

const sendContactForm = (req, res) => {
  const { name, phone, email, services, message, honeypot } = req.body;

  if (honeypot) {
    return res.status(200).json({ message: 'Form received successfully' });
  }

  if (!name || !phone) {
    return res.status(400).json({ error: 'Name and phone are required' });
  }

  const mailOptions = {
    from: `"Brentwood Electrical Experts Website" <${process.env.EMAIL_USER}>`,
    to: process.env.RECEIVER_EMAIL,
    subject: `New Inquiry from ${name} - Brentwood Electrical Experts`,
    html: `
       <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email || 'Not provided'}</p>
      <p><strong>Service:</strong> ${services || 'Not specified'}</p>
      <p><strong>Message:</strong> ${message || 'No message'}</p>
        `,
  };

  transporter
    .sendMail(mailOptions)
    .then(() => {
      res.status(200).json({ message: 'Form sent successfully' });
    })
    .catch(error => {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email' });
    });
};

module.exports = { sendContactForm };
