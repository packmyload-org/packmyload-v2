import { Schema, model, models } from "mongoose";

const PackerSchema = new Schema({
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
 dateOfBirth: {
  type: String,
  required: [true, 'Date is required']
 }
},
 { timestamps: true })
const Packer = models.Packer || model('Packer', PackerSchema)
export default Packer