import type {Metadata, Viewport} from 'next';

import {LeaveAReview} from './LeaveAReview';

export const metadata: Metadata = {
  title: 'Leave a Review',
  description: 'Leave a review for a product.',
};

export const viewport: Viewport = {
  themeColor: '#fff',
};

export default function LeaveAReviewPage() {
  return <LeaveAReview />;
}
