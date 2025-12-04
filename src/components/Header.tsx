'use client';

import React from 'react';
import {useRouter} from 'next/navigation';

import {svg} from '../svg';
import {stores} from '../stores';
import {Routes} from '../routes';

type Props = {
  title?: string;
  total?: number;
  showLogo?: boolean;
  showGoBack?: boolean;
  showSearch?: boolean;
  showBasket?: boolean;
  showBurger?: boolean;
};

export const Header: React.FC<Props> = ({
  showGoBack,
  showLogo,
  title,
  total,
  showBasket,
  showSearch,
  showBurger,
}) => {
  const router = useRouter();

  const {openModal} = stores.useModalStore();

  const renderGoBack = () => {
    if (!showGoBack) return null;
    return (
      <button
        onClick={() => router.back()}
        style={{left: '0px', padding: '0 20px', position: 'absolute'}}
      >
        <svg.GoBackSvg />
      </button>
    );
  };

  const renderTitle = () => {
    if (!title) return null;
    return (
      <div
        style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <h4 style={{textTransform: 'capitalize'}}>{title}</h4>
      </div>
    );
  };

  const renderBasket = () => {
    if (!showBasket) return null;

    return (
      <button
        onClick={() => {
          router.push(Routes.ORDER);
        }}
        style={{
          height: '100%',
          width: 'auto',
          padding: '0 20px',
          display: 'flex',
          alignItems: 'center',
          position: 'absolute',
          right: 0,
        }}
      >
        <svg.HeaderBasketSvg />
      </button>
    );
  };

  const renderBurger = () => {
    if (!showBurger) return null;
    return (
      <button
        style={{
          position: 'absolute',
          left: 0,
          padding: '20px',
        }}
        onClick={() => {
          openModal();
        }}
      >
        <svg.BurgerSvg />
      </button>
    );
  };

  const renderLogo = () => {
    if (!showLogo) return null;
    return (
      <div
        style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <svg.HeaderLogoSvg />
      </div>
    );
  };

  const renderSearch = () => {
    if (!showSearch) return null;
    return (
      <div
        style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <svg.HeaderSearchSvg />
      </div>
    );
  };

  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'relative',
        height: 'var(--header-height)',
      }}
    >
      {renderGoBack()}
      {renderTitle()}
      {renderBasket()}
      {renderBurger()}
      {renderLogo()}
      {renderSearch()}
    </header>
  );
};
