'use client';

import React from 'react';

import {Routes} from '../../../routes';
import {components} from '../../../components';

type Props = {
  type: string;
};

export const Verification: React.FC<Props> = ({type}) => {
  const inputs = ['', '', '', '', ''];

  const renderHeader = () => {
    return (
      <components.Header
        showGoBack={true}
        title={type === 'phone' ? 'Verify phone number' : 'Verify your email'}
      />
    );
  };

  const renderContent = () => {
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value.length > 1) {
        e.target.value = e.target.value.slice(0, 1);
      }
    };

    return (
      <main
        className='scrollable container'
        style={{paddingTop: 16, paddingBottom: 20}}
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
          <span
            className='t18'
            style={{marginBottom: 32, textAlign: 'center', display: 'block'}}
          >
            Enter your OTP code here.
          </span>
          <ul
            style={{
              marginBottom: 28,
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: 9,
            }}
          >
            {inputs.map((_, index) => (
              <li
                key={index}
                style={{
                  display: 'flex',
                  width: '100%',
                  aspectRatio: 1 / 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                  border: '1px solid #C8CDD9',
                }}
              >
                <input
                  maxLength={1}
                  style={{
                    textAlign: 'center',
                    width: '100%',
                    height: '100%',
                    borderRadius: 10,
                    border: 'none',
                    fontSize: 20,
                  }}
                  type='number'
                  min={0}
                  max={9}
                  onInput={handleInput}
                />
              </li>
            ))}
          </ul>
          <span
            className='t18'
            style={{textAlign: 'center', display: 'block', marginBottom: 32}}
          >
            Didn’t receive the OTP?{' '}
            <span
              style={{color: 'var(--main-color)'}}
              className='clickable'
            >
              Resend.
            </span>
          </span>
          <components.Button
            label='verify'
            href={
              type === 'phone'
                ? Routes.PHONE_VERIFIED
                : type === 'email'
                ? Routes.EMAIL_VERIFIED
                : ''
            }
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
