const nodeMailer = require('nodemailer')
const contact = {
  sendMail: async function({ name, email, phone, message }) {
    const transporter = nodeMailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'kidsmagiclifeaustralia@gmail.com',
        pass: 'Kakaka123'
      }
    })

    const mailOptions = {
      from: name + ' - ' + phone + ' <' + email + '>',
      to: 'jordypee27@gmail.com',
      subject: 'Kids Magic Life Enquiry',
      text: message
    }

    const result = await transporter.sendMail(mailOptions)
    return result
  }
}

module.exports = {
  contact
}
