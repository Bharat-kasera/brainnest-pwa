'use client';

import React from 'react';

import {svg} from '../../svg';
import {items} from '../../items';
import {components} from '../../components';

import type {PromocodeType} from '../../types';

type Props = {
  promocodes: PromocodeType[];
};

export const MyPromocodes: React.FC<Props> = ({promocodes}) => {
  const renderHeader = () => {
    return (
      <components.Header
        showGoBack={true}
        title='My promocodes'
      />
    );
  };

  const renderContent = () => {
    return (
      <main
        className='scrollable container'
        style={{paddingTop: '3%', paddingBottom: 20}}
      >
        <ul
          style={{
            paddingTop: 10,
            paddingBottom: 20,
            display: 'grid',
            gap: 15,
            gridTemplateColumns: 'repeat(2, 1fr)',
            marginBottom: '14%',
          }}
        >
          {promocodes.map((promocode: PromocodeType) => {
            return (
              <items.PromocodeItem
                key={promocode.id}
                promocode={promocode}
              />
            );
          })}
        </ul>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <button style={{borderRadius: 8}}>
            <svg.NewPromocodeSvg />
          </button>
        </div>
      </main>
    );
  };

  return (
    <components.Screen containerStyle={{backgroundColor: '#F5FAFB'}}>
      {renderHeader()}
      {renderContent()}
    </components.Screen>
  );
};
