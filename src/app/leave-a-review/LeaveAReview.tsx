'use client';

import Image from 'next/image';
import React, {useState} from 'react';
import {useRouter} from 'next/navigation';

import {URLS} from '../../config';
import {components} from '../../components';

export const LeaveAReview: React.FC = () => {
  const router = useRouter();

  const [rating, setRating] = useState<number>(0);

  const renderBackground = () => {
    return <components.Background />;
  };

  const renderHeader = () => {
    return (
      <components.Header
        showGoBack={true}
        title='Leave a review'
      />
    );
  };

  const renderContent = () => {
    return (
      <main className='scrollable container'>
        <section style={{marginTop: '6%', marginBottom: 15}}>
          <Image
            width={0}
            height={0}
            sizes='100vw'
            alt='rate service'
            className='status-image'
            src={`${URLS.MAIN_URL}/assets/other/14.png`}
          />
          <h2
            style={{
              textTransform: 'capitalize',
              textAlign: 'center',
              marginBottom: 16,
            }}
          >
            Please rate the quality of <br /> service for the order!
          </h2>
          <components.RatingStars
            rating={rating}
            setRating={setRating}
            containerStyle={{marginBottom: 16}}
          />
          <p
            className='t18'
            style={{textAlign: 'center', marginBottom: 32}}
          >
            Your comments and suggestions help us <br /> improve the service
            quality better!
          </p>
          <div style={{marginBottom: 16}}>
            <textarea
              placeholder='Enter your comment'
              style={{
                height: 120,
                width: '100%',
                padding: '11px 20px',
                borderRadius: 20,
                fontSize: 16,
                fontFamily: 'DM Sans',
                color: '#748BA0',
                backgroundColor: 'var(--white-color)',
                border: '1px solid #C8CDD9',
                resize: 'none',
              }}
            />
          </div>
          <components.Button
            label='submit'
            onClick={() => {
              router.back();
            }}
          />
        </section>
      </main>
    );
  };

  return (
    <components.Screen>
      {renderBackground()}
      {renderHeader()}
      {renderContent()}
    </components.Screen>
  );
};
