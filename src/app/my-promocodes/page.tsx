import type {Metadata, Viewport} from 'next';

import {data} from '../../data';
import {MyPromocodes} from './MyPromocodes';

export const metadata: Metadata = {
  title: 'Promocodes',
  description: 'Promocodes.',
};

export const viewport: Viewport = {themeColor: '#F5FAFB'};

export default async function Page() {
  const [promocodes] = await Promise.all([data.getPromocodes()]);

  return <MyPromocodes promocodes={promocodes} />;
}
