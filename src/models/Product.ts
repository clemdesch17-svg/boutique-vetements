import mongoose, { Schema, model, models } from 'mongoose';

export type TProduct = {
  _id?: string;
  title: string;
  slug: string;
  price: number;
  description: string;
  images: string[];
  sizes: string[];
  category: string;
  inStock: boolean;
};

const ProductSchema = new Schema<TProduct>({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  images: { type: [String], default: [] },
  sizes: { type: [String], default: [] },
  category: { type: String, default: 'vêtements' },
  inStock: { type: Boolean, default: true },
}, { timestamps: true });

export const Product = models.Product || model<TProduct>('Product', ProductSchema);
