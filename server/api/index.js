const nodeMailer = require('nodemailer')
const contact = {
  sendMail: async function({ name, title, email, message }) {
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
      from: 'KidsMagicLife Production<MyName>', // sender address
      to: email, // list of receivers
      subject: title, // Subject line
      text: message // plain text body
      // html: 'html body' // html body
    }

    const result = await transporter.sendMail(mailOptions)
    return result
  }
}

module.exports = {
  contact
}
