import type {Metadata, Viewport} from 'next';

import {data} from '../../data';
import {OrderHistory} from './OrderHistory';

export const metadata: Metadata = {
  title: 'Order History',
  description: 'View your order history.',
};

export const viewport: Viewport = {themeColor: '#F5FAFB'};

export default async function NewPasswordPage() {
  const [orders] = await Promise.all([data.getOrders()]);

  return <OrderHistory orders={orders} />;
}
