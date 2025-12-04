'use client';

import React, {useEffect} from 'react';

import {items} from '../../items';
import {components} from '../../components';

import type {CategoryType} from '../../types';

type Props = {
  categories: CategoryType[];
};

export const Categories: React.FC<Props> = ({categories}) => {
  useEffect(() => {
    document.body.style.backgroundColor = '#fff';
  }, []);

  const renderBackground = () => {
    return <components.Background />;
  };

  const renderHeader = () => {
    return (
      <components.Header
        showBasket={true}
        showBurger={true}
        showSearch={true}
      />
    );
  };

  const renderContent = () => {
    return (
      <main
        className='scrollable container'
        style={{paddingTop: 15, paddingBottom: 20}}
      >
        <ul
          style={{
            display: 'grid',
            gap: 15,
            gridTemplateColumns: 'repeat(2, 1fr)',
          }}
        >
          {categories.map((category) => {
            return (
              <items.CategoryItem
                key={category.id}
                category={category}
              />
            );
          })}
        </ul>
      </main>
    );
  };

  const renderBottomTabBar = () => {
    return <components.BottomTabBar />;
  };

  const renderModal = () => {
    return <components.Modal />;
  };

  return (
    <components.Screen>
      {renderBackground()}
      {renderHeader()}
      {renderContent()}
      {renderBottomTabBar()}
      {renderModal()}
    </components.Screen>
  );
};
