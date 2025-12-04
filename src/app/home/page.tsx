import type {Metadata, Viewport} from 'next';

import {Home} from './Home';
import {data} from '../../data';

export const metadata: Metadata = {
  title: 'Leave a Review',
  description: 'Leave a review for a product.',
};

export const viewport: Viewport = {themeColor: '#F5FAFB'};

export default async function HomePage() {
  const [products, banners, categories] = await Promise.all([
    data.getProducts(),
    data.getBanners(),
    data.getCategories(),
  ]);

  return (
    <Home
      banners={banners}
      products={products}
      categories={categories}
    />
  );
}
