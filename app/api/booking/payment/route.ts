import { connectToDB } from '@/utils/database';
import Move from '@/models/move';
import { initiatePaymentToPaystack, verifyPayment } from '@/utils/paystack_api';
import BookEmailTemplate from '@/utils/mails/bookMove';
import sendEmail from '@/utils/mailer';
export async function POST(request: Request) {
 await connectToDB();
 try {
  const body = await request.json();
  if (!body.email || !body.totalPrice) return new Response(JSON.stringify("Unable to process request"), { status: 400 })
  
  let amount = Number(body.totalPrice)
  const initiatePayment = await initiatePaymentToPaystack(body.email, amount);
  console.log(initiatePayment)
  const move = new Move({ ...body, reference: initiatePayment.data.reference });
   await move.save();
   const emailContent = BookEmailTemplate(move)
   await sendEmail(move.email, 'Your Move Quote', emailContent , emailContent)
  return new Response(JSON.stringify({ data: { authorization_url: initiatePayment.data.authorization_url} }), { status: 200 })
  } catch (error: any) {
    return new Response(error.message,{status:400})
  }
}

export async function PATCH(request: Request) {
  await connectToDB();
  try {
    const body = await request.json();
    
    if (!body.reference) {
      return new Response(JSON.stringify("Reference not provided in the request body"), { status: 400 });
    }

    // Call the verifyPayment function with the reference to check if payment is verified
    const isPaymentVerified = await verifyPayment(body.reference);

    if (isPaymentVerified) {
      // If payment is verified, update the isPaid field in the database to true
      const updateResult = await Move.updateOne({ reference: body.reference }, { isPaid: true });

      if (updateResult) {
        return new Response(JSON.stringify({ message: "Payment verified and status updated successfully" }), { status: 200 });
      } else {
        return new Response(JSON.stringify({ message: "Failed to update payment status" }), { status: 400 });
      }
    } else {
      return new Response(JSON.stringify({ message: "Payment verification failed" }), { status: 400 });
    }
  } catch (error) {
    return new Response("Failed to process the request", { status: 400 });
  }
}