import type {Metadata, Viewport} from 'next';

import {Wishlist} from './Wishlist';

export const viewport: Viewport = {themeColor: '#F5FAFB'};

export const metadata: Metadata = {
  title: 'Verify Your Phone Number',
  description:
    'Please verify your phone number to secure your account and access all features.',
};

export default function WishlistPage() {
  return <Wishlist />;
}
