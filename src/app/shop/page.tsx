import { dbConnect } from '@/lib/mongodb';
import { Product } from '@/models/Product';
import ProductCard from '@/components/ProductCard';

export default async function ShopPage() {
  await dbConnect();
  const products = await Product.find().lean();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {products.map((p: any) => (
        <ProductCard key={p._id?.toString()} product={p} />
      ))}
    </div>
  );
}
