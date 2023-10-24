import  nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer"

const transporter = nodemailer.createTransport({
  name: "packmyload.com",
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
      to,
      subject,
      html,
    };

    const data = await transporter.sendMail(mailOptions);
    if (data.response.includes("250 OK")) { 
      delete mailOptions.to
      mailOptions["to"] = ["book@packmyload.com","aniyikaiye@packmyload.com"];
      const res = await transporter.sendMail(mailOptions);
      console.log("Email sent successfully to booking!", res);
    }
    console.log("Email sent successfully!");
  } catch (error: any) {
    // console.error("Error sending email:", error);
    throw new Error(error);
  }
}

export default sendEmail;
