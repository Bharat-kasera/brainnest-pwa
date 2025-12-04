import type {Metadata, Viewport} from 'next';

import {Description} from './Description';

export const metadata: Metadata = {
  title: 'Edit Profile',
  description: 'Edit your profile information.',
};

export const viewport: Viewport = {
  themeColor: '#F5FAFB',
};

export default function NewPasswordPage() {
  return <Description />;
}
