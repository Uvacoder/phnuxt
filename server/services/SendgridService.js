const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = (email, res) => {
  const { emailAddress, phone, message, name } = email
  const msg = {
    to: 'jalenparham97@gmail.com',
    from: emailAddress,
    subject: 'Testing Email on Nuxt',
    html: `
      <h2>- ${name}</h2>
      <h2>- ${emailAddress}</h2>
      <h2>- ${phone}</h2>
      <h2>- ${message}</h2>
    `,
  };
  sgMail.send(msg).then(res.send('Message Sent')).catch(err => resizeBy.send(err))
}

module.exports = sendEmail