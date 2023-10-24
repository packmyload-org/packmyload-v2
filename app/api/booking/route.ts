import { connectToDB } from '@/utils/database';
import sendEmail from '@/utils/mailer';
import Move from '@/models/move';
import BookEmailTemplate from '@/utils/mails/bookMove';
import { message } from 'antd';
export async function POST(request: Request) {
 await connectToDB();
 try {
   const body = await request.json();
    const move = new Move({...body});
    await move.save();
  const emailContent = BookEmailTemplate(move)
   await sendEmail(move.email, 'Your Move Quote', emailContent , emailContent)
    return new Response(JSON.stringify(move),{status:201})
  } catch (error: any) {
    return new Response(error.message,{status:400})
  }
}