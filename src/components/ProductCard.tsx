'use client';
import Link from 'next/link';
import { TProduct } from '@/models/Product';

export default function ProductCard({ product }: { product: TProduct }) {
  return (
    <Link href={`/product/${product.slug}`} className="border rounded-lg p-4 block hover:shadow">
      <h2 className="text-xl font-semibold">{product.title}</h2>
      <p className="text-sm text-gray-600">{product.description}</p>
      <span className="mt-2 block font-bold">{product.price / 100} €</span>
    </Link>
  );
}
