import React from 'react';
import Image from 'next/image';

import {URLS} from '../../config';
import {Routes} from '../../routes';
import {components} from '../../components';

export const SignUpAccountCreated: React.FC = () => {
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
            borderRadius: '10px',
          }}
        >
          <Image
            src={`${URLS.MAIN_URL}/assets/other/16.png`}
            alt='Account created'
            width={0}
            height={0}
            sizes='100vw'
            priority={true}
            className='status-image'
          />

          <h2 style={{marginBottom: 12, textTransform: 'capitalize'}}>
            Account created!
          </h2>
          <p
            className='t18'
            style={{marginBottom: 32, textAlign: 'center'}}
          >
            Your account had been created <br />
            successfully.
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

  return (
    <components.Screen>
      {renderBackground()}
      {renderContent()}
    </components.Screen>
  );
};
