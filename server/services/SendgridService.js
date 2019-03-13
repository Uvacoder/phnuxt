const sgMail = require('@sendgrid/mail');
const Joi = require('joi') 

const schema = Joi.object().keys({
  name: Joi.string().trim().required(),
  emailAddress:  Joi.string().email().required(),
  phone: Joi.string().regex(/^\d{3}-\d{3}-\d{4}$/).required(),
  message: Joi.string().trim().required()
})

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = (email, res) => {
  const { emailAddress, phone, message, name } = email
  const validation = Joi.validate(email, schema)
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
  if (validation.error) {
    res.send('Invalid input')
  } else {
    sgMail.send(msg).then(() => res.send('Message Sent')).catch(error => res.send(error))
  }
}

module.exports = sendEmail