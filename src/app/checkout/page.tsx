import type {Metadata, Viewport} from 'next';

import {Checkout} from './Checkout';

export const metadata: Metadata = {
  title: 'Checkout',
  description: 'Confirm your order and proceed to checkout.',
};

export const viewport: Viewport = {
  themeColor: '#F5FAFB',
};

export default function CheckoutPage() {
  return <Checkout />;
}
