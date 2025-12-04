import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import {Routes} from '../routes';
import {stores} from '../stores';
import {components} from '../components';
import type {ProductType} from '../types';

type Props = {product: ProductType};

const MinusSvg: React.FC = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={30}
      height={30}
      fill='none'
    >
      <rect
        width={30}
        height={30}
        fill='#F5FAFB'
        rx={15}
      />
      <path
        stroke='#1E2538'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.2}
        d='M11 15h8.114'
      />
    </svg>
  );
};

const PlusSvg: React.FC = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={30}
      height={30}
      fill='none'
    >
      <rect
        width={30}
        height={30}
        fill='#F5FAFB'
        rx={15}
      />
      <path
        stroke='#1E2538'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.2}
        d='M14.955 10.916v8.167M10.898 15h8.114'
      />
    </svg>
  );
};

export const OrderItem: React.FC<Props> = ({product}) => {
  const {list: cart, addToCart, removeFromCart} = stores.useCartStore();

  const quantity = cart.find((item) => item.id === product.id)?.quantity;

  return (
    <li
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        padding: 10,
        borderRadius: 20,
        backgroundColor: 'var(--white-color)',
      }}
    >
      <Link
        href={`${Routes.PRODUCT}/${product.id}`}
        style={{position: 'relative', marginRight: 10}}
      >
        <Image
          src={product.image}
          alt={'dish'}
          width={0}
          height={0}
          sizes='100vw'
          style={{
            width: 80,
            height: 80,
            borderRadius: 12,

            objectFit: 'cover',
          }}
        />
        {product.oldPrice && <components.Sale />}
      </Link>
      <div style={{marginRight: 'auto'}}>
        <h6 style={{marginBottom: 5}}>{product.name}</h6>
        <div style={{display: 'flex', alignItems: 'center', gap: 4}}>
          {product.oldPrice && (
            <span
              style={{
                fontSize: 12,
                color: 'var(--text-color)',
                textDecoration: 'line-through',
                fontFamily: 'var(--font-league-spartan)',
              }}
            >
              ${product.oldPrice}
            </span>
          )}
          <span className='t16'>${product.price}</span>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: '100%',
          justifyContent: 'space-between',
          position: 'absolute',
          right: 0,
          padding: 10,
        }}
      >
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            addToCart(product);
          }}
        >
          <PlusSvg />
        </button>
        <span
          className='t10'
          style={{lineHeight: 1}}
        >
          {quantity || 0}
        </span>
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            removeFromCart(product);
          }}
        >
          <MinusSvg />
        </button>
      </div>
    </li>
  );
};
