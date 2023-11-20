// pages/api/upsertMovingPrices.ts

import { NextApiRequest, NextApiResponse } from 'next';
import MovingPricesModel from '@/models/movingPrice';
import { connectToDB } from '@/utils/database';

export async function POST(request: Request) {
  const body  = await request.json();

  await connectToDB()
      try {
        const movingPrices = await MovingPricesModel.updateOne(
          { _id : body._id },
          body,
          { upsert: true }
        );
         return new Response('success', { status: 200 })
      } catch (error) {
         return new Response('failed', { status: 400 })
    }
}

export async function GET(request: Request) {
 await connectToDB()
 try {
   const movingPrices = await MovingPricesModel.find({})
   console.log(movingPrices)
      return new Response(JSON.stringify({data: movingPrices, message: 'success'}), { status: 200 })
  } catch (error) {
      return new Response('failed', { status: 400 })
  }
}