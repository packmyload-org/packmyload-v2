import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDB } from '@/utils/database';
import Partner from '@/models/partner';

export async function POST(request: Request) {
 await connectToDB();
 try {
  const body = await request.json();
    const partner = new Partner({...body});
    await partner.save();

    return new Response(JSON.stringify(partner),{status:201})
  } catch (error) {
    return new Response("failed",{status:500})
  }
}
