import { connectToDB } from '@/utils/database';
import Move from '@/models/move';
import sendEmail from '@/utils/mailer';
export async function POST(request: Request) {
 await connectToDB();
 try {
   const body = await request.json();
   
    const move = new Move({...body});
    await move.save();
   await sendEmail(move.email, 'Welcome to the family!', `Hi ${move.lastName},\n\nThank you for your interest in becoming a partner. We will get back to you as soon as possible.\n\nBest regards,\n\nThe team at Packmyload.com`, `<p>Hi ${move.lastName},</p><p>Thank you for your interest in becoming a partner. We will get back to you as soon as possible. and contact u by ${move.contactBy}</p><p>Best regards,</p><p>The team at Packmyload.com</p>`)
    return new Response(JSON.stringify(move),{status:201})
  } catch (error) {
    return new Response("failed",{status:400})
  }
}
