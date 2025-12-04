'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import {svg} from '../svg';
import {Routes} from '../routes';
import {stores} from '../stores';
import {components} from '../components';
import type {ProductType} from '../types';

type Props = {
  isLast?: boolean;
  product: ProductType;
};

export const FavoriteItem: React.FC<Props> = ({product, isLast}) => {
  const {addToCart} = stores.useCartStore();
  const {list, addToWishlist, removeFromWishlist} = stores.useWishlistStore();

  const ifInWishlist = list.find((item) => item.id === product.id);

  const HeartSvg: React.FC = () => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={31}
      height={31}
      fill='none'
    >
      <circle
        cx={15.5}
        cy={15.619}
        r={15}
        fill='#fff'
      />
      <g>
        <path
          fill={ifInWishlist ? '#1E2538' : 'transparent'}
          stroke={ifInWishlist ? '#1E2538' : '#1E2538'}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.2}
          d='M20.575 12.168a3.156 3.156 0 0 0-4.467 0l-.608.608-.609-.608a3.158 3.158 0 1 0-4.466 4.466l.608.608L15.5 21.71l4.466-4.467.609-.608a3.158 3.158 0 0 0 0-4.466v0Z'
        />
      </g>
      <defs>
        <clipPath id='a'>
          <path
            fill='#fff'
            d='M8.5 10.119h14v13h-14z'
          />
        </clipPath>
      </defs>
    </svg>
  );

  const PlusSvg: React.FC = () => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={30}
        height={30}
        fill='none'
      >
        <circle
          cx={15}
          cy={15}
          r={15}
          fill='#1E2538'
        />
        <path
          fill='#fff'
          d='M15.726 15.707V19h-1.423v-3.293H11v-1.414h3.303V11h1.423v3.293H19v1.414h-3.274Z'
        />
      </svg>
    );
  };

  return (
    <li
      style={{
        position: 'relative',
        height: 100,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 20,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: isLast ? 0 : 10,
      }}
    >
      <Link
        href={`${Routes.PRODUCT}/${product.id}`}
        style={{position: 'relative', marginRight: 14}}
      >
        <Image
          src={product.image}
          alt={product.name}
          width={80}
          height={80}
          style={{borderRadius: 12}}
        />
        {product.oldPrice && <components.Sale />}
      </Link>

      <div
        style={{
          marginRight: 'auto',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'space-between',
        }}
      >
        <h6>{product.name}</h6>
        <span className='t16'>${product.price}</span>
        <div
          style={{
            paddingLeft: 5,
            paddingRight: 5,
            borderRadius: 30,
            display: 'flex',
            gap: 4,
            alignItems: 'center',
            flexDirection: 'row',
            paddingTop: 2,
            paddingBottom: 2,
            backgroundColor: '#F5FAFB',
            alignSelf: 'flex-start',
          }}
        >
          <svg.StarSvg />
          <span
            style={{
              fontSize: 12,
              lineHeight: 1.2,
              color: 'var(--text-color)',
              marginTop: 2,
              fontFamily: 'var(--font-league-spartan)',
            }}
          >
            {product.rating.toFixed(1)}
          </span>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <button
          style={{
            position: 'absolute',
            top: 16 - 10,
            right: 18 - 10,
            borderRadius: '50%',
          }}
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            if (ifInWishlist) {
              removeFromWishlist(product);
            } else {
              addToWishlist(product);
            }
          }}
        >
          <HeartSvg />
        </button>
        <button
          style={{
            position: 'absolute',
            bottom: 10,
            right: 10,
            borderRadius: '50%',
          }}
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            addToCart(product);
          }}
        >
          <PlusSvg />
        </button>
      </div>
    </li>
  );
};
