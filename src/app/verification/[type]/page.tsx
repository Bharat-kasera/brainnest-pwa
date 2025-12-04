import type {Metadata, Viewport} from 'next';

import {Verification} from './Verification';

export const metadata: Metadata = {
  title: 'Verify Your Phone Number',
  description:
    'Please verify your phone number to secure your account and access all features.',
};

type Params = {
  params: Promise<{type: string}>;
};

export const viewport: Viewport = {
  themeColor: '#fff',
};

export default async function VerificationPage({params}: Params) {
  const type = (await params).type;

  return <Verification type={type} />;
}
