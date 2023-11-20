import ADMIN from '@/models/admin';
import { connectToDB } from '@/utils/database';
export async function POST(request: Request) {
 try {
  await connectToDB()
  const body = await request.json();
  const admin = await ADMIN.findOne({ email: body.email, otp: body.otp })
  if (admin){
   await ADMIN.updateOne({ email: admin.email }, { otp: '' }, { upsert: true })
  return new Response('success', { status: 200 })
  }
  return new Response('NOT FOUND', {status: 404})
  } catch (error) {
    console.log(error)
    return new Response("failed",{ status:400 })
  }
}