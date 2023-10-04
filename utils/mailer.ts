import  nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer"

const transporter = nodemailer.createTransport({
  name: "www.packmyload.com",
  port: 465,
  host: "host2040.hostmonster.com",
  secure: true,
  auth: {
    user: process.env.MAILER_USERNAME,
    pass: process.env.MAILER_PASSWORD,
  },
  tls: { rejectUnauthorized: false },
});

transporter.verify((error: Error | null, success: boolean) => {
  if (error) {
    console.log(error.message);
  } else {
    console.log({
      success: success,
      message: "mail server is ready for your messages",
    });
  }
});

async function sendEmail(
  to: string,
  subject: string,
  text: string,
  html: string
): Promise<void> {
  try {
    const mailOptions : Mail.Options  = {
      from: '"Packmyload" <no-reply@packmyload.com>',
      to:[to, "book@packmyload.com"],
      subject,
      text,
      html,
    };

    const data = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!", data);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

export default sendEmail;
