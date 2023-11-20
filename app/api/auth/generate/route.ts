import { NextApiRequest, NextApiResponse } from 'next';
import ADMIN from '@/models/admin';
import { generateSixDigitOTP } from '@/utils/OTP';
import { connectToDB } from '@/utils/database';
import sendEmail from '@/utils/mailer';
export async function POST(request: Request) {
  try {
   await connectToDB()
  const body = await request.json();
   if (!body.email.includes('@packmyload.com'))
     return new Response('Invalid credentials', { status: 400 })
   const otp = await generateSixDigitOTP()
   body.otp = otp
   const emailContent = `
   <div style="margin: 0; padding: 15px 2px; -webkit-text-size-adjust: 100%; background-color: #2E5F9E; color: #333">
      <h3 >Hello Admin</h3>
      <br/>
      <p> Your OTP <span style="color: #fff; background-color:#333; padding: 4px;">${body.otp}</span>
      <br/>
      Please use this to complete sign in</p>
   </div>`
   await sendEmail(body.email, 'OTP VERIFICATION', emailContent , emailContent)
   const admin = await ADMIN.updateOne(
      { email: body.email },
      body, 
      {
        upsert: true,
      }
    );
    if(admin)
      return new Response('success', { status: 200 })
  } catch (error) {
    console.log(error)
    return new Response("failed",{ status:400 })
  }
}
// '469697'