import type {Metadata, Viewport} from 'next';

import {EmailVerified} from './EmailVerified';

export const metadata: Metadata = {
  title: 'Edit Profile',
  description: 'Edit your profile information.',
};

export const viewport: Viewport = {
  themeColor: '#fff',
};

export default function NewPasswordPage() {
  return <EmailVerified />;
}
