import type {Metadata, Viewport} from 'next';

import {ShippingAndPaymentInfo} from './ShippingAndPaymentInfo';

export const metadata: Metadata = {
  title: 'Sign In',
  description:
    'Welcome to the sign-in page. Please enter your credentials to continue.',
};

export const viewport: Viewport = {
  themeColor: '#fff',
};

export default function SignInPage() {
  return <ShippingAndPaymentInfo />;
}
