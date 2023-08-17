import { Schema, model, models } from "mongoose";
// 1. Create an interface representing a document in MongoDB.
interface Packer {
 fullName: string;
 mobileNumber: string;
 location: string;
 dob: string;

}
const PackerSchema = new Schema<Packer>({
 fullName: {
  type: String,
  required: [true, 'Full Name is required']
 },
 mobileNumber: {
  type: String,
  required: [true, 'Mobile Number is required']
 }, 
 location: {
  type: String,
  required: [true, 'Location is required']
 },
 dob: {
  type: String,
  required: [true, 'Date is required']
 }
},
 { timestamps: true })
const Packer = models.Packer || model<Packer>('Packer', PackerSchema)
export default Packer