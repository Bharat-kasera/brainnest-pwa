'use client';

import React from 'react';
import Image from 'next/image';
import {useRouter} from 'next/navigation';

import {URLS} from '../../config';
import {Routes} from '../../routes';
import {components} from '../../components';

export const PromocodesEmpty: React.FC = () => {
  const router = useRouter();

  const renderBackground = () => {
    return <components.Background />;
  };

  const renderHeader = () => {
    return (
      <components.Header
        showGoBack={true}
        title='Order history'
      />
    );
  };

  const renderContent = () => {
    return (
      <main className='scrollable container'>
        <section
          style={{
            height: '100%',
            flexDirection: 'column',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          className='center'
        >
          <Image
            src={`${URLS.MAIN_URL}/assets/other/19.png`}
            alt='promocodes empty'
            width={0}
            height={0}
            sizes='100vw'
            priority={true}
            className='status-image'
          />
          <h2
            style={{
              marginBottom: 12,
              textAlign: 'center',
              textTransform: 'capitalize',
            }}
          >
            Your don’t have <br />
            promocodes yet!
          </h2>
          <div style={{maxWidth: 335, marginBottom: 32}}>
            <p
              className='t18'
              style={{textAlign: 'center'}}
            >
              Stay tuned for exclusive offers to elevate <br /> your toys
              shopping experience.
            </p>
          </div>
          <components.InputField
            inputType='text'
            placeholder='Enter a promocode'
            containerStyle={{width: '100%', marginBottom: 16}}
          />
          <components.Button
            onClick={() => {
              router.replace(Routes.MY_PROMOCODES);
            }}
            label='Add a  promocode'
            containerStyle={{width: '100%'}}
          />
        </section>
      </main>
    );
  };

  return (
    <components.Screen>
      {renderBackground()}
      {renderHeader()}
      {renderContent()}
    </components.Screen>
  );
};
