'use client';

import React from 'react';
import Image from 'next/image';
import {useRouter} from 'next/navigation';

import {URLS} from '../../config';
import {Routes} from '../../routes';
import {components} from '../../components';

export const InfoSaved: React.FC = () => {
  const router = useRouter();

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
            src={`${URLS.MAIN_URL}/assets/other/18.png`}
            alt='Info saved'
            width={0}
            height={0}
            sizes='100vw'
            priority={true}
            className='status-image'
          />

          <h2 style={{marginBottom: 12, textTransform: 'capitalize'}}>
            Info Saved!
          </h2>
          <p
            className='t18'
            style={{marginBottom: 32, textAlign: 'center'}}
          >
            Your personal information has been <br /> securely stored.
          </p>
          <components.Button
            label='Done'
            onClick={() => router.push(Routes.PROFILE)}
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
