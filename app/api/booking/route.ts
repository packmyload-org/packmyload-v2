import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDB } from '@/utils/database';
import Partner from '@/models/partner';
export async function POST(request: Request) {
 await connectToDB();
 try {
   const body = await request.json();
   
    const partner = new Partner({...body});
    await partner.save();
  //  await sendEmail({
  //    to: partner.emailAddress,
  //    subject: 'Welcome to the family!',
  //    text: `Hi ${partner.fullName},\n\nThank you for your interest in becoming a partner. We will get back to you as soon as possible.\n\nBest regards,\n\nThe team at Packmyload.com`,
  //    html: `<p>Hi ${partner.fullName},</p><p>Thank you for your interest in becoming a partner. We will get back to you as soon as possible.</p><p>Best regards,</p><p>The team at Packmyload.com</p>`
  //   })
    return new Response(JSON.stringify(partner),{status:201})
  } catch (error) {
    return new Response("failed",{status:400})
  }
}
