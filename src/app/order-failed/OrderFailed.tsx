'use client';

import React from 'react';
import Image from 'next/image';

import {URLS} from '../../config';
import {Routes} from '../../routes';
import {components} from '../../components';

export const OrderFailed: React.FC = () => {
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
            width={0}
            height={0}
            sizes='100vw'
            alt='Order successful'
            className='status-image'
            src={`${URLS.MAIN_URL}/assets/other/09.png`}
          />
          <h2
            style={{
              marginBottom: 12,
              textAlign: 'center',
              textTransform: 'capitalize',
            }}
          >
            Sorry! Your order has failed!
          </h2>
          <p
            className='t18'
            style={{textAlign: 'center', marginBottom: 32}}
          >
            Something went wrong. Please try <br /> again to continue your
            order.
          </p>
          <div
            style={{
              gap: 15,
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
            }}
          >
            <components.Button
              label='Try again'
              href={Routes.HOME}
              colorScheme='secondary'
              containerStyle={{width: '100%'}}
            />
            <components.Button
              label='My profile'
              href={Routes.PROFILE}
              containerStyle={{width: '100%'}}
            />
          </div>
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
