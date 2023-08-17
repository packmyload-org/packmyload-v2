import { Schema, model, models } from "mongoose";
// 1. Create an interface representing a document in MongoDB.
interface Partner {
 fullName: string;
 mobileNumber: string;
 emailAddress: string;
 storeName: string;
 storeAddress: string;
 reason: string;
}
const PartnerSchema = new Schema<Partner>({
 fullName: {
  type: String,
  required: [true, 'Full Name is required']
 },
 emailAddress: {
  type: String,
  required: [true, 'Email is required'],
  unique: true
 }, 
 storeAddress: {
  type: String,
  required: [true, 'Store Address is required']
 },
 storeName: {
  type: String,
  required: [true, 'Store Name is required']
 },
 reason: {
  type: String,
 },
 mobileNumber: {
  type: String,
 }
},
 { timestamps: true })
const Partner = models.Partner || model<Partner>('Partner', PartnerSchema)
export default Partner