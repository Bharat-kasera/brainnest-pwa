import type {Metadata, Viewport} from 'next';

import {PromocodesEmpty} from './PromocodesEmpty';

export const metadata: Metadata = {
  title: 'Promocodes Empty',
  description: 'Promocodes are empty.',
};

export const viewport: Viewport = {
  themeColor: '#fff',
};

export default function Page() {
  return <PromocodesEmpty />;
}
