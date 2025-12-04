import type {Metadata, Viewport} from 'next';

import {SignUpAccountCreated} from './SignUpAccountCreated';

export const metadata: Metadata = {
  title: 'Sign Up Account Created',
  description: 'Account has been successfully created.',
};

export const viewport: Viewport = {
  themeColor: '#fff',
};

export default function Page() {
  return <SignUpAccountCreated />;
}
