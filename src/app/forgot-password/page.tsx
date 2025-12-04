import type {Metadata, Viewport} from 'next';

import {ForgotPassword} from './ForgotPassword';

export const metadata: Metadata = {
  title: 'Forgot Password',
  description: 'If you have forgotten your password, you can reset it here.',
};

export const viewport: Viewport = {
  themeColor: '#fff',
};

export default function ForgotPasswordPage() {
  return <ForgotPassword />;
}
