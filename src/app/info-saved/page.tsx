import type {Metadata, Viewport} from 'next';

import {InfoSaved} from './InfoSaved';

export const metadata: Metadata = {
  title: 'Leave a Review',
  description: 'Leave a review for a product.',
};

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
};

export default function InfoSavedPage() {
  return <InfoSaved />;
}
