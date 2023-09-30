import { connectToDB } from '@/utils/database';
import Move from '@/models/move';
import { initiatePaymentToPaystack } from '@/utils/paystack_api';
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
  return new Response(JSON.stringify({ data: { authorization_url: initiatePayment.data.authorization_url} }), { status: 200 })
  
  } catch (error) {
    return new Response("failed",{status:400})
  }
}