import { Schema, model, models, Document } from 'mongoose';

interface MoverInfo {
  Bedrooms: number;
  price: string;
  Movers: number;
}

interface MovingPrices {
  intraState: MoverInfo[];
  interState: MoverInfo[];
}

interface MovingPricesDocument extends Document, MovingPrices {}

const MoverInfoSchema = new Schema<MoverInfo>({
  Bedrooms: {
    type: Number,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  Movers: {
    type: Number,
    required: true,
  },
});

const MovingPricesSchema = new Schema<MovingPricesDocument>({
  intraState: [MoverInfoSchema],
  interState: [MoverInfoSchema],
});

const MovingPricesModel = models.MovingPrices || model<MovingPricesDocument>('MovingPrices', MovingPricesSchema);

export default MovingPricesModel;
