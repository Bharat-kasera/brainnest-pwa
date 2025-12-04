import React from 'react';

import {Routes} from '../../routes';
import {components} from '../../components';

export const EditProfile: React.FC = () => {
  const renderHeader = () => {
    return (
      <components.Header
        showGoBack={true}
        title='Edit profile'
      />
    );
  };

  const renderContent = () => {
    return (
      <main
        className='scrollable container'
        style={{paddingTop: '16px'}}
      >
        <section
          style={{
            paddingTop: '30px',
            paddingBottom: '30px',
            borderRadius: '20px',
            backgroundImage: 'url(/assets/bg/05.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className='container'
        >
          <components.InputField
            type='text'
            inputType='username'
            placeholder='Enter your username'
            containerStyle={{marginBottom: 14}}
          />
          <components.InputField
            type='email'
            inputType='email'
            placeholder='Email'
            containerStyle={{marginBottom: 14}}
          />
          <components.InputField
            type='tel'
            inputType='phone'
            placeholder='Phone number'
            containerStyle={{marginBottom: 14}}
          />
          <components.InputField
            type='text'
            placeholder='Your address'
            inputType='location'
            containerStyle={{marginBottom: 20}}
          />
          <components.Button
            label='save changes'
            href={Routes.INFO_SAVED}
            containerStyle={{marginBottom: 20}}
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
