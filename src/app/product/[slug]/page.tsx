import { dbConnect } from '@/lib/mongodb';
import { Product } from '@/models/Product';

export default async function ProductPage({ params }: { params: { slug: string } }) {
  await dbConnect();
  const product = await Product.findOne({ slug: params.slug }).lean();
  if (!product) return <div>Produit introuvable</div>;
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <p className="mb-2">{product.description}</p>
      <p className="mb-4">{product.price / 100} €</p>
    </div>
  );
}
