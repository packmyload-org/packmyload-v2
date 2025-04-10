import  nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer"

const transporter = nodemailer.createTransport({
  // name: "packmyload.com",
  name: 'Packmyload',
  port: 465,
  // host: "host2040.hostmonster.com",
  host: 'mail.movesandcompany.com',
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
  console.log({
    to,
    subject
  })
  try {
   
    const mailOptions : Mail.Options  = {
      from: '"Packmyload" <info@movesandcompany.com>',
      to: to || "sammccarthy090@gmail.com",
      subject,
      html,
    };

    const data = await transporter.sendMail(mailOptions);
    console.log(data)
    if (data.response.includes("250 OK")) { 
      delete mailOptions.to
      mailOptions["to"] = ["info@movesandcompany.com","customercare@packmyload.com","samson@elenii.xyz", "sammccarthy090@gmail.com","book@packmyload.com"];
      const res = await transporter.sendMail(mailOptions);
      console.log("Email sent successfully to booking!", res);
    }
    console.log("Email sent successfully!");
  } catch (error: any) {
     console.error("Error sending email:", error);
    throw new Error(error);
  }
}

export default sendEmail;
