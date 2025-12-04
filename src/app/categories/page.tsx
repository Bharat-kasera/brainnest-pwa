import type {Metadata, Viewport} from 'next';

import {data} from '../../data';
import {Categories} from './Categories';

export const metadata: Metadata = {
  title: 'Leave a Review',
  description: 'Leave a review for a product.',
};

export const viewport: Viewport = {themeColor: '#fff'};

export default async function CategoriesPage() {
  const [categories] = await Promise.all([data.getCategories()]);

  return <Categories categories={categories} />;
}
