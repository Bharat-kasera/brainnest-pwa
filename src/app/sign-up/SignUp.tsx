'use client';

import React from 'react';
import Link from 'next/link';

import {svg} from '../../svg';
import {Routes} from '../../routes';
import {components} from '../../components';

export const SignUp: React.FC = () => {
  const renderHeader = () => {
    return <components.Header showGoBack={true} />;
  };

  const renderContent = () => {
    return (
      <main
        className='scrollable container'
        style={{paddingTop: 10}}
      >
        <section
          style={{
            height: '100%',
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '10px',
            backgroundImage: 'url(/assets/other/11.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className='container'
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: 16,
            }}
          >
            <svg.LogoSvg />
          </div>

          {/* SIGN UP */}
          <h1
            style={{
              marginBottom: 12,
              textTransform: 'capitalize',
              textAlign: 'center',
            }}
          >
            Sign up
          </h1>

          <p
            className='t18'
            style={{textAlign: 'center', marginBottom: 32}}
          >
            Use social networks or your email
          </p>

          {/* INPUT FIELDS */}
          <section>
            <components.InputField
              type='text'
              inputType='username'
              placeholder='Enter your username'
              containerStyle={{marginBottom: '10px'}}
            />
            <components.InputField
              type='email'
              inputType='email'
              placeholder='Enter your email'
              containerStyle={{marginBottom: '10px'}}
            />
            <components.InputField
              type='password'
              inputType='password'
              placeholder='Enter your password'
              containerStyle={{marginBottom: '10px'}}
            />
            <components.InputField
              type='password'
              inputType='password'
              placeholder='Confirm your password'
              containerStyle={{marginBottom: '14px'}}
            />
          </section>

          {/* SIGN IN BUTTON */}
          <section style={{marginBottom: '14px'}}>
            <components.Button
              label='Sign up'
              href={Routes.SIGN_UP_ACCOUNT_CREATED}
            />
          </section>

          {/* REGISTER */}
          <section>
            <p
              className='t18'
              style={{marginBottom: '20px', textAlign: 'center'}}
            >
              Already have an account?{' '}
              <Link
                href={Routes.SIGN_IN}
                style={{color: 'var(--main-color)'}}
              >
                Sign in.
              </Link>
            </p>
          </section>
        </section>
      </main>
    );
  };

  const renderHeight = () => {
    return <div style={{height: 30}} />;
  };

  return (
    <components.Screen containerStyle={{backgroundColor: 'var(--white-color)'}}>
      {renderHeader()}
      {renderContent()}
      {renderHeight()}
    </components.Screen>
  );
};
