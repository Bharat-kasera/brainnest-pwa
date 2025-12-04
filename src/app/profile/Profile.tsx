'use client';

import React from 'react';
import Link from 'next/link';

import {svg} from '../../svg';
import {Routes} from '../../routes';
import {stores} from '../../stores';
import {components} from '../../components';

export const Profile: React.FC = () => {
  const {emailVerified, phoneVerified} = stores.useVerificationStore();

  const menu = [
    {
      id: 1,
      title: 'Personal info',
      icon: <svg.UserSvg />,
      route: Routes.EDIT_PROFILE,
      titleColor: 'var(--main-color)',
      rightIcon: true,
    },
    {
      id: 2,
      title: 'Order history',
      icon: <svg.CalendarSvg />,
      route: Routes.ORDER_HISTORY,
      titleColor: 'var(--main-color)',
      rightIcon: true,
    },
    {
      id: 3,
      title: 'Order history empty',
      icon: <svg.CalendarSvg />,
      route: Routes.ORDER_HISTORY_EMPTY,
      titleColor: 'var(--main-color)',
      rightIcon: true,
    },
    {
      id: 4,
      title: 'My promocodes',
      icon: <svg.GiftSvg />,
      route: Routes.MY_PROMOCODES,
      titleColor: 'var(--main-color)',
      rightIcon: true,
    },
    {
      id: 5,
      title: 'My promocodes empty',
      icon: <svg.GiftSvg />,
      route: Routes.PROMOCODES_EMPTY,
      titleColor: 'var(--main-color)',
      rightIcon: true,
    },
    {
      id: 6,
      icon: <svg.PhoneSvg verified={phoneVerified} />,
      titleColor: phoneVerified ? 'var(--main-color)' : '#FF4768',
      route: phoneVerified ? '#' : Routes.VERIFY_YOUR_PHONE_NUMBER,
      title: phoneVerified
        ? 'Your phone number verified'
        : 'Verify phone number',
      rightIcon: phoneVerified ? false : true,
    },
    {
      id: 7,
      icon: <svg.EmailSvg verified={emailVerified} />,
      route: emailVerified ? '#' : Routes.VERIFY_YOUR_EMAIL,
      titleColor: emailVerified ? 'var(--main-color)' : '#FF4768',
      title: emailVerified ? 'Your email is verified' : 'Verify email',
      rightIcon: emailVerified ? false : true,
    },
    {
      id: 8,
      title: 'Sign out',
      icon: <svg.LogOutSvg />,
      route: Routes.SIGN_IN,
      titleColor: 'var(--main-color)',
      rightIcon: false,
    },
    {
      id: 9,
      title: 'Delete account',
      icon: <svg.CrossSvg />,
      route: Routes.SIGN_IN,
      titleColor: '#FF4768',
      rightIcon: false,
    },
  ];

  const renderHeader = () => {
    return (
      <components.Header
        showBurger={true}
        showBasket={true}
        title='My Profile'
      />
    );
  };

  const renderContent = () => {
    return (
      <main
        className='scrollable container'
        style={{paddingTop: '10%', paddingBottom: '20px'}}
      >
        {/* USER INFO */}
        <section style={{marginBottom: 16}}>
          <h3>Dominic Parker</h3>
          <span className='t16'>dominicparker@mail.com</span>
        </section>
        {/* MENU */}
        <section>
          <ul style={{display: 'grid', gap: 4}}>
            {menu.map((item) => {
              return (
                <li key={item.id}>
                  <Link
                    href={item.route}
                    style={{
                      width: '100%',
                      display: 'flex',
                      padding: 15,
                      paddingRight: 16,
                      borderRadius: 20,
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 16,
                      backgroundColor: 'var(--white-color)',
                    }}
                  >
                    {item.icon}
                    <h5 style={{marginRight: 'auto', color: item.titleColor}}>
                      {item.title}
                    </h5>
                    {item.rightIcon && <svg.RightArrowSvg />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
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
      {renderBottomTabBar()}
      {renderModal()}
    </components.Screen>
  );
};
