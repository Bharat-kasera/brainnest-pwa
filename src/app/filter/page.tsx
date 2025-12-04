import type {Metadata, Viewport} from 'next';

import {Filter} from './Filter';

export const viewport: Viewport = {themeColor: '#F5FAFB'};

export const metadata: Metadata = {
  title: 'Payment Failed',
  description: 'Your payment has failed. Please try again.',
};

export default function NewPasswordPage() {
  return <Filter />;
}
