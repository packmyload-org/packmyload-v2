import { connectToDB } from '@/utils/database';
import sendEmail from '@/utils/mailer';
import Move from '@/models/move';
import BookEmailTemplate from '@/utils/mails/bookMove';
export async function POST(request: Request) {
 await connectToDB();
 try {
   const body = await request.json();
    const move = new Move({...body});
    await move.save();
  const emailContent = BookEmailTemplate(move)
   console.log(emailContent)
   await sendEmail(move.email, 'Your Move Quote', emailContent , emailContent)
    return new Response(JSON.stringify(move),{status:201})
  } catch (error) {
    return new Response("failed",{status:400})
  }
}