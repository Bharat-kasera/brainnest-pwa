'use client';

import React from 'react';
import Image from 'next/image';

import {svg} from '../svg';
import type {ReviewType} from '../types';

type Props = {
  isLast?: boolean;
  review: ReviewType;
  containerStyle?: React.CSSProperties;
};

export const ReviewItem: React.FC<Props> = ({
  review,
  containerStyle,
  isLast,
}) => {
  return (
    <li
      style={{
        padding: 20,
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        backgroundColor: 'var(--white-color)',
        marginBottom: isLast ? 0 : 12,
        ...containerStyle,
      }}
    >
      <Image
        src={review.photo}
        width={0}
        height={0}
        sizes='100vw'
        alt={review.name}
        style={{width: 30, height: 30, borderRadius: 15, marginRight: 14}}
      />
      <section>
        <h5 style={{lineHeight: 1.2, marginBottom: 3}}>{review.name}</h5>
        <span
          style={{
            lineHeight: 1.2,
            marginBottom: 7,
            fontWeight: 400,
            fontSize: 12,
            color: 'var(--text-color)',
            fontFamily: 'var(--font-league-spartan)',
          }}
        >
          {review.date}
        </span>
        <p className='t16 number-of-lines-2'>{review.comment}</p>
      </section>
      <div
        style={{
          position: 'absolute',
          top: 10,
          right: 10,
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
          5.0
        </span>
      </div>
    </li>
  );
};
