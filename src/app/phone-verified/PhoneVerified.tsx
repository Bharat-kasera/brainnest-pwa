'use client';

import React, {useEffect} from 'react';
import Image from 'next/image';

import {URLS} from '../../config';
import {Routes} from '../../routes';
import {stores} from '../../stores';
import {components} from '../../components';

export const PhoneVerified: React.FC = () => {
  const {setPhoneVerified} = stores.useVerificationStore();

  useEffect(() => {
    setPhoneVerified(true);
  }, []);

  const renderBackground = () => {
    return <components.Background />;
  };

  const renderContent = () => {
    return (
      <main className='scrollable container'>
        <section
          style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            src={`${URLS.MAIN_URL}/assets/other/13.png`}
            alt='Phone verified'
            width={0}
            height={0}
            sizes='100vw'
            priority={true}
            className='status-image'
          />
          <h2
            style={{
              marginBottom: 12,
              textTransform: 'capitalize',
              textAlign: 'center',
            }}
          >
            Your phone number has been <br /> successfully verified!
          </h2>
          <p
            className='t18'
            style={{marginBottom: 32, textAlign: 'center'}}
          >
            Now that your account is fully set up, <br /> immerse yourself in
            the world of toys.
          </p>
          <components.Button
            label='done'
            href={Routes.PROFILE}
            containerStyle={{width: '100%'}}
          />
        </section>
      </main>
    );
  };

  return (
    <components.Screen>
      {renderBackground()}
      {renderContent()}
    </components.Screen>
  );
};
