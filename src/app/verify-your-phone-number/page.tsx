import type {Metadata, Viewport} from 'next';

import {VerifyYourPhoneNumber} from './VerifyYourPhoneNumber';

export const metadata: Metadata = {
  title: 'Verify Your Phone Number',
  description:
    'Please verify your phone number to secure your account and access all features.',
};

export const viewport: Viewport = {
  themeColor: '#fff',
};

export default function Page() {
  return <VerifyYourPhoneNumber />;
}
