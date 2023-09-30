import { Schema, model, Document, models } from "mongoose";

// 1. Create an interface representing a document in MongoDB.
interface Move extends Document {
  firstName: string;
  lastName: string;
  email: string;
  moveDate: string;
  pickUp: string;
  destination: string;
  moveTime: string;
  phoneNumber: string;
  items: Array<{
    item: string;
    numberOfItems: string;
  }>;
  volume: number;
  totalPrice: number;
  service: string;
  countryCode: string;
  reference: string;
  isPaid: boolean;
}

const moveSchema = new Schema<Move>({
  firstName: {
    type: String,
    required: [true, 'First Name is required']
  },
  lastName: {
    type: String,
    required: [true, 'Last Name is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
  },
  moveDate: {
    type: String,
    required: [true, 'Move Date is required']
  },
  pickUp: {
    type: String,
    required: [true, 'Pick Up is required']
  },
  destination: {
    type: String,
    required: [true, 'Destination is required']
  },
  moveTime: {
    type: String,
    required: [true, 'Move Time is required']
  },
  phoneNumber: {
    type: String,
    required: [true, 'Phone Number is required']
  },
  service: {
    type: String,
    required: [true, 'Service is required']
  },
  items: [
    {
      item: {
        type: String,
        required: [true, 'Item is required']
      },
      numberOfItems: {
        type: String,
        required: [true, 'Number of Items is required']
      }
    }
  ],
  totalPrice: {
    type: Number,
    required: [true, 'Total Price is required']
  },
  volume: {
    type: Number,
    required: [true, 'Volume is required']
  },
  countryCode: {
    type: String,
    required: [true, 'Country code is required']
  },
  reference: {
    type: String,
  },
  isPaid: {
    type: Boolean,
    default: false
  }
},
{ timestamps: true });

const Move = models.Move || model<Move>('Move', moveSchema);

export default Move;
