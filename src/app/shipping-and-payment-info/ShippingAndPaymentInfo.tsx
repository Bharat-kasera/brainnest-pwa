import React from 'react';

import {Routes} from '../../routes';
import {components} from '../../components';

export const ShippingAndPaymentInfo: React.FC = () => {
  const renderHeader = () => {
    return (
      <components.Header
        showGoBack={true}
        title='Shipping & payment info'
      />
    );
  };

  const renderContent = () => {
    return (
      <main
        className='scrollable container'
        style={{paddingTop: 16, paddingBottom: 20}}
      >
        <section
          style={{
            borderRadius: 20,
            paddingTop: 30,
            paddingBottom: 30,
            backgroundColor: 'var(--white-color)',
            backgroundImage: 'url(/assets/other/11.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className='container'
        >
          <components.InputField
            type='text'
            inputType='username'
            placeholder='Enter your name'
            containerStyle={{marginBottom: '10px'}}
          />
          <components.InputField
            type='email'
            inputType='email'
            placeholder='Enter your email'
            containerStyle={{marginBottom: '10px'}}
          />
          <components.InputField
            type='text'
            inputType='phone'
            placeholder='Enter your phone number'
            containerStyle={{marginBottom: '10px'}}
          />
          <components.InputField
            type='text'
            inputType='address'
            placeholder='Confirm your address'
            containerStyle={{marginBottom: '14px'}}
          />
          <components.InputField
            type='text'
            inputType='card'
            placeholder='Enter your card number'
            containerStyle={{marginBottom: '14px'}}
          />
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 15,
              marginBottom: 16,
            }}
          >
            <components.InputField
              type='text'
              inputType='date'
              placeholder='MM/YY'
            />
            <components.InputField
              type='text'
              inputType='cvc'
              placeholder='CVV'
            />
          </div>
          <components.Button
            href={Routes.CHECKOUT}
            label='proceed to checkout'
          />
        </section>
      </main>
    );
  };

  return (
    <components.Screen containerStyle={{backgroundColor: 'var(--white-color)'}}>
      {renderHeader()}
      {renderContent()}
    </components.Screen>
  );
};
