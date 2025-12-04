'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import {Routes} from '../routes';
import type {CategoryType} from '../types';

type Props = {
  category: CategoryType;
};

export const CategoryItem: React.FC<Props> = ({category}) => {
  return (
    <li
      style={{
        borderRadius: 20,
        position: 'relative',
        border: '1px solid #C8CDD9',
      }}
    >
      <Link
        href={`${Routes.SHOP}/${category.name}`}
        style={{position: 'relative'}}
      >
        <Image
          src={category.image as string}
          alt='Logo'
          width={0}
          height={0}
          sizes='100vw'
          priority={true}
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: 20,
          }}
        />
        <div style={{position: 'relative'}}>
          <div
            style={{
              backdropFilter: 'blur(5px)',
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
              position: 'absolute',
              bottom: 0,
              zIndex: 1,
              width: '100%',
              WebkitBackdropFilter: 'blur(5px)',
              borderRadius: 20,
              paddingTop: 5,
              paddingBottom: 5,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              className='t16'
              style={{textAlign: 'center', color: 'var(--main-color)'}}
            >
              {category.name}
            </span>
          </div>
        </div>
      </Link>
    </li>
  );
};
