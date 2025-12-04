import type {Metadata, Viewport} from 'next';

import {Shop} from './Shop';
import {data} from '../../../data';

export const metadata: Metadata = {
  title: 'Shop',
  description:
    'Welcome to the shop page. Please select a category to continue.',
};

type Params = {
  params: Promise<{category: string}>;
};

export const viewport: Viewport = {
  themeColor: '#F5FAFB',
};

export default async function ShopPage({params}: Params) {
  const category = (await params).category;

  const [products] = await Promise.all([data.getProducts()]);

  return (
    <Shop
      category={category}
      products={products}
    />
  );
}
