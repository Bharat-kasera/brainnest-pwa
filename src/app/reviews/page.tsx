import type {Metadata} from 'next';
import type {Viewport} from 'next';

import {data} from '../../data';
import {Reviews} from './Reviews';

export const viewport: Viewport = {themeColor: '#F5FAFB'};

export const metadata: Metadata = {
  title: 'Reviews',
  description: 'Reviews.',
};

export default async function ReviewsPage() {
  let reviews = [];

  try {
    reviews = await data.getReviews();
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error('An unknown error occurred');
    }
  }

  return <Reviews reviews={reviews} />;
}
