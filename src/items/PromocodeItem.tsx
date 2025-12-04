import React from 'react';

import {svg} from '../svg';
import type {PromocodeType} from '../types';

type Props = {
  promocode: PromocodeType;
};

export const PromocodeItem: React.FC<Props> = ({promocode}) => {
  const colors = (): string => {
    if (promocode.discount <= 15) {
      return '#FF4768';
    }

    if (promocode.discount <= 35) {
      return '#15C7FF';
    }

    if (promocode.discount <= 100) {
      return '#FCC55E';
    }

    return '#FA5555';
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        alert(`${promocode.code} code copied to clipboard`);
      },
      (err) => {
        console.error('Could not copy text: ', err);
      },
    );
  };

  return (
    <li
      style={{
        padding: 10,
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'var(--white-color)',
      }}
      className='clickable'
      onClick={() => {
        copyToClipboard(promocode.code);
      }}
    >
      <svg.PercentSvg />
      <h5 style={{marginTop: 12, marginBottom: 3}}>{promocode.name}</h5>
      <span
        className='t18'
        style={{color: colors()}}
      >
        {promocode.discount}% off
      </span>
      <span
        className='t12'
        style={{
          marginBottom: 19,
          fontFamily: 'var(--font-league-spartan)',
        }}
      >
        Valid until {promocode.expiry}
      </span>
      <div
        style={{
          borderRadius: 12,
          padding: '6px 12px',
          backgroundColor: '#F5FAFB',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span
          className='t12'
          style={{fontFamily: 'var(--font-league-spartan)'}}
        >
          {promocode.code}
        </span>
        <svg.CopySvg />
      </div>
    </li>
  );
};
