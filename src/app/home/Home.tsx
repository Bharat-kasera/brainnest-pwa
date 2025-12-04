'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, {useEffect} from 'react';
import {useRouter} from 'next/navigation';
import {Swiper, SwiperSlide} from 'swiper/react';

import {items} from '../../items';
import {Routes} from '../../routes';
import {components} from '../../components';

import type {BannerType} from '../../types';
import type {ProductType} from '../../types';
import type {CategoryType} from '../../types';

type Props = {
  banners: BannerType[];
  products: ProductType[];
  categories: CategoryType[];
};

export const Home: React.FC<Props> = ({banners, products, categories}) => {
  const router = useRouter();

  const bestSellers = products.filter((product) => product.isBestSeller);

  useEffect(() => {
    document.body.style.backgroundColor = '#fff';
  }, []);

  const renderHeader = () => {
    return (
      <components.Header
        showBasket={true}
        showBurger={true}
        showLogo={true}
      />
    );
  };

  const renderCategories = () => {
    return (
      <section style={{marginBottom: 35}}>
        <Swiper
          spaceBetween={14}
          slidesPerView={'auto'}
          onSlideChange={() => {}}
          onSwiper={(swiper) => {}}
          style={{padding: '0 20px'}}
        >
          {categories.map((category) => {
            return (
              <SwiperSlide
                key={category.id}
                style={{width: 'auto'}}
              >
                <Link
                  style={{
                    border: '1px solid #C8CDD9',
                    borderRadius: 50,
                    padding: '8px 18px',
                    display: 'flex',
                  }}
                  href={`${Routes.SHOP}/${category.name}`}
                  className='clickable'
                >
                  <span
                    className='t16'
                    style={{color: 'var(--main-color)'}}
                  >
                    {category.name}
                  </span>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    );
  };

  const renderFeatured = () => {
    return (
      <section style={{marginBottom: 40}}>
        <components.BlockHeading
          href={`${Routes.SHOP}/all`}
          className='container'
          title='Featured Products'
          containerStyle={{marginBottom: 14}}
        />
        <Swiper
          spaceBetween={14}
          slidesPerView={1.6}
          onSlideChange={() => {}}
          onSwiper={(swiper) => {}}
          style={{padding: '0 20px'}}
        >
          {products.map((product) => {
            return (
              <SwiperSlide key={product.id}>
                <items.FeaturedItem product={product} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    );
  };

  const renderBanner_1 = () => {
    return (
      <section
        className='container'
        style={{marginBottom: 40}}
      >
        <Image
          src={banners[0].image}
          alt='Banner'
          width={0}
          height={0}
          sizes='100vw'
          priority={true}
          style={{width: '100%', height: 'auto', borderRadius: 20}}
          onClick={() => router.push(`${Routes.SHOP}/all`)}
        />
      </section>
    );
  };

  const renderBestSellers = () => {
    return (
      <section style={{marginBottom: 50}}>
        <components.BlockHeading
          href={`${Routes.SHOP}/all`}
          className='container'
          title='Best sellers'
          containerStyle={{marginBottom: 14}}
        />
        <ul className='container'>
          {bestSellers.map((product, index, array) => {
            const isLast = index === array.length - 1;
            return (
              <items.BestSellerItem
                isLast={isLast}
                key={product.id}
                product={product}
              />
            );
          })}
        </ul>
      </section>
    );
  };

  const renderBanner_2 = () => {
    return (
      <section className='container'>
        <Image
          src={banners[1].image}
          alt='Banner'
          width={0}
          height={0}
          sizes='100vw'
          priority={true}
          style={{width: '100%', height: 'auto', borderRadius: 20}}
          onClick={() => router.push(`${Routes.SHOP}/all`)}
        />
      </section>
    );
  };

  const renderContent = () => {
    return (
      <main
        className='scrollable'
        style={{paddingTop: 20, height: '100%', paddingBottom: 20}}
      >
        {renderCategories()}
        {renderFeatured()}
        {renderBanner_1()}
        {renderBestSellers()}
        {renderBanner_2()}
      </main>
    );
  };

  const renderBottomTabBar = () => {
    return <components.BottomTabBar />;
  };

  const renderModal = () => {
    return <components.Modal />;
  };

  return (
    <components.Screen containerStyle={{backgroundColor: '#F5FAFB'}}>
      {renderHeader()}
      {renderContent()}
      {renderBottomTabBar()}
      {renderModal()}
    </components.Screen>
  );
};
