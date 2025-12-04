import type {Metadata, Viewport} from 'next';

import {PhoneVerified} from './PhoneVerified';

export const metadata: Metadata = {
  title: 'Edit Profile',
  description: 'Edit your profile information.',
};

export const viewport: Viewport = {
  themeColor: '#fff',
};

export default function PhoneVerifiedPage() {
  return <PhoneVerified />;
}
