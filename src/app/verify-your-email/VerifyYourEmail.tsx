'use client';

import React from 'react';

import {Routes} from '../../routes';
import {components} from '../../components';

export const VerifyYourEmail: React.FC = () => {
  const renderHeader = () => {
    return (
      <components.Header
        showGoBack={true}
        title='Verify your email'
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
            paddingTop: 30,
            paddingBottom: '30px',
            borderRadius: 20,
            backgroundImage: 'url(/assets/bg/05.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className='container'
        >
          <p
            className='t18'
            style={{marginBottom: 32, textAlign: 'center'}}
          >
            We have sent you an email with a verification code.
          </p>
          <components.InputField
            type='email'
            inputType='email'
            placeholder='Enter your email'
            containerStyle={{marginBottom: 16}}
          />
          <components.Button
            label='Confirm'
            href={`${Routes.VERIFICATION}/email`}
          />
        </section>
      </main>
    );
  };

  return (
    <components.Screen containerStyle={{backgroundColor: '#fff'}}>
      {renderHeader()}
      {renderContent()}
    </components.Screen>
  );
};
