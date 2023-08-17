import { NextApiRequest, NextApiResponse } from 'next';
import Packer from '@/models/packer';
import { connectToDB } from '@/utils/database';

export async function POST(request: Request) {
 await connectToDB();
 try {
  const body = await request.json();
  const {fullName,mobileNumber,location,dob} = body
    const packer = new Packer({
      fullName,
      mobileNumber,
      location,
      dob,
    });
    await packer.save();

    return new Response(JSON.stringify(packer),{status:201})
  } catch (error) {
    return new Response("failed",{status:500})
  }
}
