'use client';

import React, {useEffect} from 'react';
import Image from 'next/image';

import {URLS} from '../../config';
import {Routes} from '../../routes';
import {stores} from '../../stores';
import {components} from '../../components';

export const OrderSuccessful: React.FC = () => {
  const {resetCart} = stores.useCartStore();

  useEffect(() => {
    resetCart();
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
            width={0}
            height={0}
            sizes='100vw'
            alt='Order successful'
            className='status-image'
            src={`${URLS.MAIN_URL}/assets/other/08.png`}
          />
          <h2
            style={{
              marginBottom: 12,
              textAlign: 'center',
              textTransform: 'capitalize',
            }}
          >
            Thank you for your order!
          </h2>
          <p
            className='t18'
            style={{textAlign: 'center', marginBottom: 32}}
          >
            Your order will be delivered on time. <br /> Thank you!
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
              label='View orders'
              href={Routes.ORDER_HISTORY}
              colorScheme='secondary'
              containerStyle={{width: '100%'}}
            />
            <components.Button
              label='Go Shopping'
              href={Routes.HOME}
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
