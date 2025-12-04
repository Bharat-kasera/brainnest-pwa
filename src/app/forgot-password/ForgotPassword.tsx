'use client';

import React from 'react';

import {Routes} from '../../routes';
import {components} from '../../components';

export const ForgotPassword: React.FC = () => {
  const renderHeader = () => {
    return (
      <components.Header
        title='Forgot Password'
        showGoBack={true}
      />
    );
  };

  const renderContent = () => {
    return (
      <main
        className='scrollable container'
        style={{paddingTop: '10px'}}
      >
        <section
          style={{
            paddingTop: '30px',
            paddingBottom: '30px',
            borderRadius: 20,
            backgroundColor: 'var(--white-color)',
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
            Please enter your email address. You will receive a link to create a
            new password via email.
          </p>
          <components.InputField
            type='email'
            inputType='email'
            placeholder='Enter your email'
            containerStyle={{marginBottom: '14px'}}
          />
          <components.Button
            label='Send'
            href={Routes.NEW_PASSWORD}
          />
        </section>
      </main>
    );
  };

  return (
    <components.Screen>
      {renderHeader()}
      {renderContent()}
    </components.Screen>
  );
};
