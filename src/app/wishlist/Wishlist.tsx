'use client';

import React, {useEffect} from 'react';
import {useRouter} from 'next/navigation';

import {items} from '../../items';
import {Routes} from '../../routes';
import {stores} from '../../stores';
import {components} from '../../components';

export const Wishlist: React.FC = () => {
  const router = useRouter();

  const {list: wishlist} = stores.useWishlistStore();

  useEffect(() => {
    if (wishlist.length === 0) {
      router.push(Routes.WISHLIST_EMPTY);
    }
  }, [wishlist]);

  const renderHeader = () => {
    return (
      <components.Header
        showBasket={true}
        title='Wishlist'
        showBurger={true}
      />
    );
  };

  const renderContent = () => {
    return (
      <main
        className='scrollable container'
        style={{paddingTop: 16, paddingBottom: 20}}
      >
        <ul>
          {wishlist.map((dish) => {
            return (
              <items.FavoriteItem
                product={dish}
                key={dish.id}
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
    <components.Screen containerStyle={{backgroundColor: '#F5FAFB'}}>
      {renderHeader()}
      {renderContent()}
      {renderModal()}
      {renderBottomTabBar()}
    </components.Screen>
  );
};
