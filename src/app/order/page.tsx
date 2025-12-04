import type {Metadata, Viewport} from 'next';

import {Order} from './Order';

export const viewport: Viewport = {themeColor: '#F5FAFB'};

export const metadata: Metadata = {
  title: 'Order Failed',
  description: 'Your order has failed. Please try again.',
};

export default function NewPasswordPage() {
  return <Order />;
}
