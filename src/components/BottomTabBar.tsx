'use client';

import React from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

import {svg} from '../svg';
import {stores} from '../stores';
import {TabScreens, Routes} from '../routes';

export const BottomTabBar: React.FC = () => {
  const {list: cart} = stores.useCartStore();
  const {list: wishlist} = stores.useWishlistStore();

  const pathname = usePathname();

  const tabs = [
    {
      id: 1,
      name: TabScreens.HOME,
      icon: svg.HomeTabSvg,
      route: Routes.HOME,
    },
    {
      id: 2,
      name: TabScreens.CATEGORIES,
      icon: svg.SearchTabSvg,
      route: Routes.CATEGORIES,
    },
    {
      id: 3,
      name: TabScreens.ORDER,
      icon: svg.OrderTabSvg,
      route: cart.length > 0 ? Routes.ORDER : Routes.CART_EMPTY,
    },
    {
      id: 4,
      name: TabScreens.WISHLIST,
      icon: svg.HeartTabSvg,
      route: wishlist.length > 0 ? Routes.WISHLIST : Routes.WISHLIST_EMPTY,
    },
    {
      id: 5,
      name: TabScreens.PROFILE,
      icon: svg.ProfileTabSvg,
      route: Routes.PROFILE,
    },
  ];

  return (
    <section>
      <nav
        style={{
          paddingLeft: '3%',
          paddingRight: '3%',
          borderTop: '1px solid #C8CDD9',
          backgroundColor: '#F5FAFB',
        }}
      >
        <ul
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
          }}
        >
          {tabs.map((tab) => {
            return (
              <li
                key={tab.id}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}
              >
                <Link
                  href={tab.route}
                  style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    paddingTop: 15,
                    paddingBottom: 15,
                    borderRadius: 20,
                  }}
                >
                  <tab.icon />
                  <span
                    style={{
                      fontSize: 10,
                      marginTop: 3,
                      display: 'block',
                      color:
                        pathname === tab.route
                          ? 'var(--main-color)'
                          : 'var(--text-color)',
                      textTransform: 'uppercase',
                      textAlign: 'center',
                      fontWeight: 500,
                      lineHeight: 1.5,
                      fontFamily: 'var(--font-league-spartan)',
                    }}
                    className='number-of-lines-1'
                  >
                    {tab.name}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </section>
  );
};
