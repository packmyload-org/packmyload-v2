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
  moveType: string;
  contactBy: string;
  countryCode: string;
  service: string;
}

const meSchema = new Schema<Move>({
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
  phoneNumber:{
    type: String,
    required: [true, 'Phone Number is required']
  },
 service: {
    type: String,
    required: [true, 'Service is required']
  },
  contactBy: {
    type: String,
    required: [true, 'Country By is required']
  },
  countryCode: {
    type: String,
    required: [true, 'Country code is required']
  },
},
{ timestamps: true });

const contactMe = models.contactMe || model<Move>('contactMe', meSchema);

export default contactMe;
