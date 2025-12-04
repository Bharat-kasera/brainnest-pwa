'use client';

import React from 'react';
import Image from 'next/image';

import {URLS} from '../../config';
import {Routes} from '../../routes';
import {components} from '../../components';

export const WishlistEmpty: React.FC = () => {
  const renderBackground = () => {
    return <components.Background />;
  };

  const renderHeader = () => {
    return <components.Header showBasket={true} />;
  };

  const renderContent = () => {
    return (
      <main
        className='scrollable container'
        style={{paddingTop: 10, paddingBottom: 10}}
      >
        <section
          style={{
            height: '100%',
            flexDirection: 'column',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            src={`${URLS.MAIN_URL}/assets/other/17.png`}
            alt='profile'
            width={0}
            height={0}
            sizes='100vw'
            priority={true}
            className='status-image'
          />
          <h2
            style={{
              textAlign: 'center',
              marginBottom: 12,
              textTransform: 'capitalize',
            }}
          >
            Your Wishlist is empty!
          </h2>
          <p
            className='t16'
            style={{textAlign: 'center', marginBottom: 32}}
          >
            Looks like you haven't chosen the <br /> items you like.
          </p>
          <components.Button
            label='shop now'
            href={Routes.HOME}
            containerStyle={{width: '100%'}}
          />
        </section>
      </main>
    );
  };

  const renderModal = () => {
    return <components.Modal />;
  };

  return (
    <components.Screen>
      {renderBackground()}
      {renderHeader()}
      {renderContent()}
      {renderModal()}
    </components.Screen>
  );
};
