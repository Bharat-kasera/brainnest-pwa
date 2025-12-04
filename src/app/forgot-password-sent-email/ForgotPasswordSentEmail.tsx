import React from 'react';
import Image from 'next/image';

import {URLS} from '../../config';
import {Routes} from '../../routes';
import {components} from '../../components';

export const ForgotPasswordSentEmail: React.FC = () => {
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
            src={`${URLS.MAIN_URL}/assets/other/15.png`}
            alt='Password reset'
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
            Your password has <br />
            been reset!
          </h2>
          <p
            className='t18'
            style={{marginBottom: 32, textAlign: 'center'}}
          >
            Log in with your new password to <br /> continue your journey.
          </p>
          <components.Button
            label='Done'
            href={Routes.SIGN_IN}
            containerStyle={{width: '100%'}}
          />
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
