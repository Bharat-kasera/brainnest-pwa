import {create} from 'zustand';
import {persist} from 'zustand/middleware';

export type VerificationStateType = {
  emailVerified: boolean;
  phoneVerified: boolean;
  setEmailVerified: (verified: boolean) => void;
  setPhoneVerified: (verified: boolean) => void;
};

export const useVerificationStore = create<VerificationStateType>()(
  persist(
    (set) => ({
      emailVerified: false,
      phoneVerified: false,
      setEmailVerified: (verified: boolean) => set({emailVerified: verified}),
      setPhoneVerified: (verified: boolean) => set({phoneVerified: verified}),
    }),
    {
      name: 'verification-storage',
    },
  ),
);
