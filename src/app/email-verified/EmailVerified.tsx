'use client';

import React, {useEffect} from 'react';
import Image from 'next/image';

import {URLS} from '../../config';
import {Routes} from '../../routes';
import {stores} from '../../stores';
import {components} from '../../components';

export const EmailVerified: React.FC = () => {
  const {setEmailVerified} = stores.useVerificationStore();

  useEffect(() => {
    setEmailVerified(true);
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
            src={`${URLS.MAIN_URL}/assets/other/12.png`}
            alt='Email verified'
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
            Your email has been <br /> successfully verified!
          </h2>
          <p
            className='t18'
            style={{marginBottom: 32, textAlign: 'center'}}
          >
            Now that you're officially a part of our <br /> community, let's get
            started!
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
