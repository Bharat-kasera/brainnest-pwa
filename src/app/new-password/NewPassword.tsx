'use client';

import React from 'react';

import {Routes} from '../../routes';
import {components} from '../../components';

export const NewPassword: React.FC = () => {
  const renderHeader = () => {
    return (
      <components.Header
        title='Reset password'
        showGoBack={true}
      />
    );
  };

  const renderContent = () => {
    return (
      <main
        className='scrollable container'
        style={{paddingTop: 16}}
      >
        <section
          style={{
            paddingTop: '30px',
            paddingBottom: '30px',
            borderRadius: 20,
            backgroundImage: 'url(/assets/bg/05.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className='container'
        >
          <p
            className='t16'
            style={{marginBottom: '30px', textAlign: 'center'}}
          >
            Enter new password and confirm.
          </p>
          <components.InputField
            inputType='password'
            placeholder='Enter your password'
            containerStyle={{marginBottom: '14px'}}
          />
          <components.InputField
            inputType='password'
            placeholder='Confirm your password'
            containerStyle={{marginBottom: '20px'}}
          />
          <components.Button
            label='Change Password'
            href={Routes.FORGOT_PASSWORD_SENT_EMAIL}
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
