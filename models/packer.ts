import { Schema, model, models } from "mongoose";

const PackerSchema = new Schema({},
 { timestamps: true })
const Packer = models.Packer || model('Packer', PackerSchema)
export default Packer