'use client';

import React, {useEffect} from 'react';

import type {ReviewType} from '../../types';

import {items} from '../../items';
import {components} from '../../components';

type Props = {
  reviews: ReviewType[];
};

export const Reviews: React.FC<Props> = ({reviews}) => {
  useEffect(() => {
    document.body.style.backgroundColor = '#F5FAFB';
  }, []);

  const renderHeader = () => {
    return (
      <components.Header
        showGoBack={true}
        title='Reviews'
      />
    );
  };

  const renderContent = () => {
    return (
      <main
        className='scrollable container'
        style={{paddingTop: 10, paddingBottom: 20}}
      >
        <ul>
          {reviews?.map((review, index, array) => {
            const isLast = index === array.length - 1;

            return (
              <items.ReviewItem
                key={review.id}
                review={review}
                containerStyle={{marginBottom: isLast ? 0 : 14}}
              />
            );
          })}
        </ul>
      </main>
    );
  };

  return (
    <components.Screen containerStyle={{backgroundColor: '#F5FAFB'}}>
      {renderHeader()}
      {renderContent()}
    </components.Screen>
  );
};
