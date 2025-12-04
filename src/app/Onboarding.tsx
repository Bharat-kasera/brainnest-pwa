'use client';

import Image from 'next/image';
import React, {useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

import {Routes} from '../routes';
import {components} from '../components';
import type {OnboardingType} from '../types';

type Props = {
  onboarding: OnboardingType[];
};

export const Onboarding: React.FC<Props> = ({onboarding}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const renderLogo = () => {
    return (
      <section
        style={{
          zIndex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '6%',
          marginBottom: '6%',
        }}
      >
        <Image
          src='/assets/logo/01.png'
          alt='Logo'
          width={0}
          height={0}
          sizes='100vw'
          priority={true}
          style={{width: '24%', height: 'auto'}}
        />
      </section>
    );
  };

  const renderBackground = () => {
    return <components.Background />;
  };

  const renderDescription = () => {
    const currentItem = onboarding[currentSlideIndex];
    return (
      <section
        className='container'
        style={{marginBottom: '8%'}}
      >
        <h1
          style={{
            textAlign: 'center',
            textTransform: 'capitalize',
            fontSize: 32,
          }}
        >
          {currentItem.title1}
        </h1>
        <h1
          style={{
            textAlign: 'center',
            textTransform: 'capitalize',
            fontSize: 32,
          }}
        >
          {currentItem.title2}
        </h1>
        <p
          className='t16'
          style={{marginTop: '14px', textAlign: 'center'}}
        >
          {currentItem.description1} <br />
          {currentItem.description2}
        </p>
      </section>
    );
  };

  const renderDots = () => {
    return (
      <section
        className='container'
        style={{
          gap: 6,
          marginBottom: '8%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {onboarding.map((item: OnboardingType, index: number) => (
          <div
            key={item.id}
            style={{
              width: 22,
              height: 6,
              borderRadius: '4px',
              backgroundColor:
                currentSlideIndex === index ? 'var(--main-color)' : '#fff',
            }}
          />
        ))}
      </section>
    );
  };

  const renderCarousel = () => {
    return (
      <section
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Swiper
          onSlideChange={(swiper) => setCurrentSlideIndex(swiper.activeIndex)}
        >
          {onboarding.map((item: any) => (
            <SwiperSlide
              key={item.id}
              style={{width: '100%', height: 'auto'}}
            >
              <Image
                src={item.image}
                alt='Onboarding'
                width={0}
                height={0}
                sizes='100vw'
                priority={true}
                style={{
                  width: '50%',
                  height: 'auto',
                  margin: '0 auto',
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    );
  };

  const renderButton = () => {
    return (
      <section style={{padding: 20}}>
        <components.Button
          label='Get Started'
          href={Routes.SIGN_IN}
        />
      </section>
    );
  };

  return (
    <components.Screen>
      {renderBackground()}
      {renderLogo()}
      {renderDescription()}
      {renderDots()}
      {renderCarousel()}
      {renderButton()}
    </components.Screen>
  );
};
