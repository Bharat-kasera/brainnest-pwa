'use client';

import Link from 'next/link';
import React, {useState} from 'react';
import {useRouter} from 'next/navigation';

import {svg} from '../../svg';
import {Routes} from '../../routes';
import {components} from '../../components';

export const SignIn: React.FC = () => {
  const router = useRouter();
  const [rememberMe, setRememberMe] = useState(false);

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
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            borderRadius: '20px',
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

          <h1 style={{marginBottom: 16, textAlign: 'center'}}>Welcome Back!</h1>
          <span
            className='t16'
            style={{marginBottom: 32, textAlign: 'center'}}
          >
            Use social networks or your email
          </span>

          {/* INPUT FIELDS */}
          <section>
            <components.InputField
              inputType='email'
              placeholder='Enter your email'
              containerStyle={{marginBottom: 16}}
            />
            <components.InputField
              inputType='password'
              placeholder='Enter your password'
              containerStyle={{marginBottom: 16}}
            />
          </section>

          {/* REMEMBER ME */}
          <section
            style={{
              marginBottom: 32,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <div
              style={{
                gap: '10px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
              className='clickable'
              onClick={() => setRememberMe(!rememberMe)}
            >
              <div
                style={{
                  width: '18px',
                  height: '18px',
                  borderRadius: 5,
                  backgroundColor: '#fff',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  border: '1px solid #C8CDD9',
                }}
              >
                {rememberMe && <svg.InputCheckSvg />}
              </div>
              <span
                className='t18'
                style={{lineHeight: 1.2}}
              >
                Remember me
              </span>
            </div>
            <span
              className='t18 main-color clickable'
              onClick={() => router.push(Routes.FORGOT_PASSWORD)}
              style={{color: 'var(--main-color)', lineHeight: 1.2}}
            >
              Lost your password?
            </span>
          </section>

          {/* SIGN IN BUTTON */}
          <section style={{marginBottom: 24}}>
            <components.Button
              label='Sign In'
              href={Routes.HOME}
            />
          </section>

          {/* REGISTER */}
          <section style={{display: 'flex', justifyContent: 'center'}}>
            <span className='t18'>
              No account?{' '}
              <Link
                href={Routes.SIGN_UP}
                style={{color: 'var(--main-color)'}}
              >
                Register now
              </Link>
            </span>
          </section>
        </section>
      </main>
    );
  };

  const renderHeight = () => {
    return <div style={{height: 30}} />;
  };

  return (
    <components.Screen containerStyle={{backgroundColor: '#fff'}}>
      {renderHeader()}
      {renderContent()}
      {renderHeight()}
    </components.Screen>
  );
};
