import { connectToDB } from '@/utils/database';
import contactMe from '@/models/contactMe';
import sendEmail from '@/utils/mailer';
import EmailTemplate from '@/utils/mails/contactMeTemp';
export async function POST(request: Request) {
 await connectToDB();
 try {
   const body = await request.json();
   
    const move = new contactMe({...body});
    await move.save();
   const emailContent = EmailTemplate((move.firstName + " " + move.lastName), move.email, move.contactBy, move.countryCode + move.phoneNumber, move.pickUp, move.destination)
   await sendEmail(move.email, 'Speak with agent details!', emailContent , emailContent)
    return new Response(JSON.stringify(move),{status:201})
  } catch (error: any) {
    return new Response(error.message,{status:400})
  }
}