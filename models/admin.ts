import { Schema, model, models } from "mongoose";
// 1. Create an interface representing a document in MongoDB.
interface ADMIN {
 email: string;
 otp: string;

}
const ADMINSchema = new Schema<ADMIN>({
 email: {
  type: String,
  required: [true, 'EMAIL is required']
 },
 otp: {
  type: String,
 }
},
 { timestamps: true })
const ADMIN = models.ADMIN || model<ADMIN>('ADMIN', ADMINSchema)
export default ADMIN