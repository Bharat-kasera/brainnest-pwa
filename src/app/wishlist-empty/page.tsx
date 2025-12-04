import React from 'react';
import type {Metadata, Viewport} from 'next';

import {WishlistEmpty} from './WishlistEmpty';

export const metadata: Metadata = {
  title: 'Sign Up',
  description:
    'Welcome to the sign-up page. Please enter your credentials to continue.',
};

export const viewport: Viewport = {
  themeColor: '#fff',
};

export default function WishlistEmptyPage() {
  return <WishlistEmpty />;
}
