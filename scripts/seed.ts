import 'dotenv/config';
import { dbConnect } from '@/lib/mongodb';
import { Product } from '@/models/Product';

async function run() {
  await dbConnect();
  await Product.deleteMany({});
  await Product.insertMany([
    {
      title: 'T-shirt Oversize Blanc',
      slug: 'tshirt-oversize-blanc',
      price: 2499,
      description: 'Coton bio 220gsm, coupe oversize.',
      images: ['/placeholder.jpg'],
      sizes: ['S','M','L','XL'],
      category: 'tops',
      inStock: true,
    },
    {
      title: 'Hoodie Noir Premium',
      slug: 'hoodie-noir-premium',
      price: 5999,
      description: 'Molleton brossé, capuche doublée, cordons ton sur ton.',
      images: ['/placeholder.jpg'],
      sizes: ['S','M','L','XL'],
      category: 'hoodies',
      inStock: true,
    },
    {
      title: 'Pantalon Cargo Olive',
      slug: 'cargo-olive',
      price: 6999,
      description: 'Coupe droite, poches utilitaires, tissu résistant.',
      images: ['/placeholder.jpg'],
      sizes: ['S','M','L','XL'],
      category: 'pants',
      inStock: true,
    },
  ]);
  console.log('✅ Données de test ajoutées !');
  process.exit(0);
}

run().catch((e) => { console.error(e); process.exit(1); });
