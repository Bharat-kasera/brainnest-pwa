'use client';

import React from 'react';
import Image from 'next/image';

import {URLS} from '../../config';
import {Routes} from '../../routes';
import {components} from '../../components';

export const OrderHistoryEmpty: React.FC = () => {
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
            src={`${URLS.MAIN_URL}/assets/other/20.png`}
            alt='Order history empty'
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
            Your order history is <br /> currently empty!
          </h2>
          <div style={{maxWidth: 335, marginBottom: 32}}>
            <p
              className='t18'
              style={{textAlign: 'center'}}
            >
              Start filling it up with your past purchases to keep track of your
              toy shopping journey.
            </p>
          </div>
          <components.Button
            label='shop now'
            href={Routes.HOME}
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
