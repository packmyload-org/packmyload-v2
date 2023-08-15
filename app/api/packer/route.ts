import { NextApiRequest, NextApiResponse } from 'next';
import Packer from '@/models/packer';
import { connectToDB } from '@/utils/database';

export default async function POST(request: NextApiRequest, response: NextApiResponse) {
  try {
    const { fullName, mobileNumber, location, dateOfBirth } = request.body;

    await connectToDB();

    const packer = new Packer({
      fullName,
      mobileNumber,
      location,
      dateOfBirth,
    });

    await packer.save();

    return response.status(201).json(packer);
  } catch (error) {
    return response.status(500).send('Failed to create a packer');
  }
}
