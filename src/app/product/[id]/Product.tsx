'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, {useRef, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Swiper as SwiperClass} from 'swiper';

import {svg} from '../../../svg';
import {items} from '../../../items';
import {Routes} from '../../../routes';
import {stores} from '../../../stores';
import {components} from '../../../components';

import type {ReviewType} from '../../../types';
import type {ProductType} from '../../../types';

type Props = {
  id: string;
  reviews: ReviewType[];
  products: ProductType[];
};

export const Product: React.FC<Props> = ({id, products, reviews}) => {
  const product = products.find((product) => Number(product.id) === Number(id));

  const [activeSlide, setActiveSlide] = useState(0);

  const swiperRef = useRef<SwiperClass | null>(null);

  const {list: wishlist} = stores.useWishlistStore();
  const {
    list: cart,
    subtotal,
    addToCart,
    removeFromCart,
  } = stores.useCartStore();
  const {addToWishlist, removeFromWishlist} = stores.useWishlistStore();

  const ifInCart = cart.find((item) => item.id === product?.id);
  const ifInWishlist = wishlist.find((item) => item.id === product?.id);

  const qty = ifInCart?.quantity || 0;

  const [color, setColor] = useState(product?.colors[0].code);

  const HeartSvg: React.FC = () => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={50}
      height={50}
      fill='none'
    >
      <rect
        width={49}
        height={49}
        x={0.5}
        y={0.5}
        stroke='#C8CDD9'
        rx={24.5}
      />
      <path
        fill={ifInWishlist ? '#1E2538' : 'transparent'}
        stroke={ifInWishlist ? '#1E2538' : '#666E84'}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.2}
        d='M32.367 18.842a4.584 4.584 0 0 0-6.484 0l-.883.883-.883-.883a4.584 4.584 0 0 0-6.484 6.483l.884.883L25 32.692l6.483-6.484.884-.883a4.582 4.582 0 0 0 0-6.483Z'
      />
    </svg>
  );

  const handleSlideChange = (swiper: any) => {
    setActiveSlide(swiper.activeIndex);
  };

  const handlePrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const MinusSvg: React.FC = () => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={14}
      height={14}
      fill='none'
    >
      <path
        stroke='#1E2538'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.2}
        d='M2.898 7h8.114'
      />
    </svg>
  );

  const PlusSvg: React.FC = () => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={14}
      height={14}
      fill='none'
    >
      <path
        stroke='#1E2538'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.2}
        d='M6.955 2.917v8.166M2.898 7h8.114'
      />
    </svg>
  );

  const renderHeader = () => {
    return (
      <components.Header
        total={subtotal}
        showGoBack={true}
        showBasket={true}
      />
    );
  };

  const renderCarousel = () => {
    return (
      <section style={{marginBottom: 20, position: 'relative'}}>
        <Swiper
          slidesPerView={'auto'}
          pagination={{clickable: true}}
          navigation={true}
          mousewheel={true}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={handleSlideChange}
        >
          {product?.images.map((image, index) => {
            return (
              <SwiperSlide key={index}>
                <div
                  style={{
                    marginLeft: 20,
                    marginRight: 20,
                  }}
                >
                  <Image
                    src={image}
                    alt='Banner'
                    width={0}
                    height={0}
                    sizes='100vw'
                    priority={true}
                    className='clickable'
                    style={{width: '100%', height: 'auto', borderRadius: 20}}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            bottom: 27,
            zIndex: 1,
            width: '100%',
            gap: 6,
          }}
        >
          {product?.images.map((_, index) => {
            return (
              <div
                key={index}
                style={{
                  width: 22,
                  height: 6,
                  borderRadius: 10,
                  backgroundColor:
                    activeSlide === index ? 'var(--main-color)' : '#fff',
                }}
              />
            );
          })}
        </div>
        <div
          className='container'
          style={{position: 'relative'}}
        >
          <button
            style={{
              position: 'absolute',
              left: 20,
              bottom: 0,
              zIndex: 1,
              padding: 20,
              borderRadius: 8,
            }}
            onClick={handlePrevSlide}
          >
            <svg.PrevSlideSvg
              color={activeSlide === 0 ? '#FCC55E' : '#1E2538'}
            />
          </button>
          <button
            style={{
              position: 'absolute',
              right: 20,
              bottom: 0,
              zIndex: 1,
              padding: 20,
              borderRadius: 8,
              transform: 'rotate(180deg)',
            }}
            onClick={handleNextSlide}
          >
            <svg.PrevSlideSvg
              color={activeSlide !== 0 ? '#FCC55E' : '#1E2538'}
            />
          </button>
        </div>
      </section>
    );
  };

  const renderNameWithButton = () => {
    return (
      <section
        className='container'
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 2,
          justifyContent: 'space-between',
        }}
      >
        <h3>{product?.name}</h3>
        <button
          style={{
            borderRadius: '50%',
          }}
          onClick={() => {
            if (ifInWishlist) {
              if (product) {
                removeFromWishlist(product);
                return;
              }
            } else {
              if (product) {
                addToWishlist(product);
                return;
              }
            }
          }}
        >
          <HeartSvg />
        </button>
      </section>
    );
  };

  const renderRatingWithInStock = () => {
    return (
      <section
        className='container'
        style={{
          gap: 8,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 3,
        }}
      >
        {/* Rating */}
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
            backgroundColor: 'var(--white-color)',
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
            {product?.rating.toFixed(1)}
          </span>
        </div>
        {/* In stock */}
        <span
          className='t16'
          style={{
            lineHeight: 1.2,
            marginBottom: 3,
            color: '#15C7FF',
            textTransform: 'capitalize',
          }}
        >
          in stock
        </span>
      </section>
    );
  };

  const renderPriceWithCounter = () => {
    return (
      <section
        className='container'
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 20,
          justifyContent: 'space-between',
        }}
      >
        <span
          style={{
            fontSize: 24,
            lineHeight: 1.5,
          }}
        >
          ${product?.price}
        </span>
        <div
          style={{
            backgroundColor: 'var(--white-color)',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 40,
          }}
        >
          <button
            style={{padding: 13, borderRadius: '50%'}}
            onClick={() => {
              if (product) {
                removeFromCart(product);
              }
            }}
          >
            <MinusSvg />
          </button>
          <span
            className='t16'
            style={{margin: '0 8px'}}
          >
            {qty}
          </span>
          <button
            style={{padding: 13, borderRadius: '50%'}}
            onClick={() => {
              if (product) {
                addToCart(product);
              }
            }}
          >
            <PlusSvg />
          </button>
        </div>
      </section>
    );
  };

  const renderColors = () => {
    return (
      <section className='container'>
        <div
          style={{
            marginBottom: 28,
            paddingBottom: 20,
            borderBottom: '1px solid #C8CDD9',
          }}
        >
          <h5 style={{marginBottom: 10}}>Color</h5>
          <ul
            style={{
              display: 'flex',
              gap: 10,
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}
          >
            {product?.colors.map((item, index) => {
              return (
                <li
                  key={index}
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    border: item.code === color ? '2px solid #1E2538' : 'none',
                    justifyContent: 'center',
                    backgroundColor: item.code,
                  }}
                  onClick={() => setColor(item.code)}
                ></li>
              );
            })}
          </ul>
        </div>
      </section>
    );
  };

  const renderDescription = () => {
    return (
      <section
        className='container'
        style={{marginBottom: 28}}
      >
        <div style={{paddingBottom: 13, borderBottom: '1px solid #C8CDD9'}}>
          <h5
            style={{
              marginBottom: 10,
            }}
          >
            Description
          </h5>
          <p
            className='t18'
            style={{marginBottom: 16}}
          >
            {product?.description}
          </p>
          <div style={{display: 'flex', justifyContent: 'flex-end'}}>
            <Link
              style={{
                color: 'var(--main-color)',
              }}
              className='t18 clickable'
              href={Routes.DESCRIPTION}
            >
              Read more
            </Link>
          </div>
        </div>
      </section>
    );
  };

  const renderReviews = () => {
    return (
      <section
        className='container'
        style={{marginBottom: 32}}
      >
        <components.BlockHeading
          href={Routes.REVIEWS}
          title={`Reviews (${reviews.length})`}
          containerStyle={{marginBottom: 14}}
        />
        <ul>
          {reviews.map((review, index) => {
            const isLast = index === reviews.length - 1;

            return (
              <items.ReviewItem
                key={review.id}
                review={review}
                isLast={isLast}
              />
            );
          })}
        </ul>
      </section>
    );
  };

  const renderButtons = () => {
    return (
      <section className='container'>
        <components.Button
          label='Add to cart'
          onClick={() => {
            if (product) {
              addToCart(product);
            }
          }}
          containerStyle={{marginBottom: 16}}
        />
        <components.Button
          label='Leave a review'
          colorScheme='secondary'
          href={Routes.LEAVE_A_REVIEW}
        />
      </section>
    );
  };

  const renderContent = () => {
    return (
      <main
        className='scrollable'
        style={{paddingTop: 10, paddingBottom: 20}}
      >
        {renderCarousel()}
        {renderNameWithButton()}
        {renderRatingWithInStock()}
        {renderPriceWithCounter()}
        {renderColors()}
        {renderDescription()}
        {renderReviews()}
        {renderButtons()}
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
