import type {Metadata, Viewport} from 'next';

import {Product} from './Product';
import {data} from '../../../data';
import type {ProductType} from '../../../types';

export const viewport: Viewport = {themeColor: '#F5FAFB'};

export async function generateMetadata({params}: Params): Promise<Metadata> {
  const {id} = await params;
  const products = await data.getProducts();
  const product = products.find(
    (product: ProductType) => Number(product.id) === Number(id),
  );

  return {
    title: product ? product.name : 'Product',
    description: product ? product.description : 'Product',
  };
}

type Params = {
  params: Promise<{id: string}>;
};

export default async function ProductPage({params}: Params) {
  const [products, reviews] = await Promise.all([
    data.getProducts(),
    data.getReviews(),
  ]);

  const id = (await params).id;

  return (
    <Product
      id={id}
      reviews={reviews}
      products={products}
    />
  );
}
