import type {Metadata, Viewport} from 'next';

import {Profile} from './Profile';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy.',
};

export const viewport: Viewport = {themeColor: '#F5FAFB'};

export default function Page() {
  return <Profile />;
}
