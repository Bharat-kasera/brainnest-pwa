'use client';

import Link from 'next/link';
import React, {useState} from 'react';

import {svg} from '../../../svg';
import {items} from '../../../items';
import {Routes} from '../../../routes';
import {components} from '../../../components';
import type {ProductType} from '../../../types';

type Props = {category: string; products: ProductType[]};

const sortingBy = [
  {id: 1, title: 'Sale'},
  {id: 2, title: 'Top'},
  {id: 3, title: 'Newest'},
  {id: 4, title: 'Price: low to high'},
  {id: 5, title: 'Price: high to low'},
];

export const Shop: React.FC<Props> = ({category, products}) => {
  const [showModal, setShowModal] = useState(false);
  const [sort, setSort] = useState(sortingBy[0].title);

  const byCategory = products.filter((product: ProductType) =>
    product.categories.includes(decodeURIComponent(category)),
  );

  const filteredProducts = category === 'all' ? products : byCategory;

  const renderHeader = () => {
    return (
      <components.Header
        title='Shop'
        showGoBack={true}
        showBasket={true}
      />
    );
  };

  const renderTopBar = () => {
    return (
      <section
        className='container'
        style={{paddingBottom: 16, paddingTop: 16}}
      >
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <Link href={Routes.FILTER}>
            <svg.FilterSvg />
          </Link>
          <button onClick={() => setShowModal(true)}>
            <svg.SortingBySvg />
          </button>
        </div>
      </section>
    );
  };

  const renderContent = () => {
    return (
      <main
        className='scrollable container'
        style={{paddingBottom: 20}}
      >
        <ul
          style={{
            display: 'grid',
            gap: 15,
            gridTemplateColumns: 'repeat(2, 1fr)',
          }}
        >
          {filteredProducts.map((product: ProductType) => {
            return (
              <items.ShopItem
                key={product.id}
                product={product}
              />
            );
          })}
        </ul>
      </main>
    );
  };

  const renderModal = () => {
    if (!showModal) return null;

    return (
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(30, 37, 56, 0.6)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onClick={() => setShowModal(false)}
      >
        <div
          style={{
            width: 'calc(100% - 80px)',
            paddingLeft: 20,
            borderRadius: 20,
            backgroundColor: 'var(--white-color)',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {sortingBy.map((item, index) => {
            return (
              <button
                key={item.id}
                style={{
                  width: '100%',
                  paddingBottom: 15,
                  paddingTop: index === 0 ? 20 : 15,
                  paddingRight: 20,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderBottom: '1px solid var(--border-color)',
                }}
                onClick={() => {
                  setSort(item.title);
                  setShowModal(false);
                }}
              >
                <span className='t18'>{item.title}</span>
                <div
                  style={{
                    width: 16,
                    height: 16,
                    borderRadius: 8,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: '1px solid var(--border-color)',
                  }}
                >
                  {sort === item.title && (
                    <div
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        backgroundColor: 'var(--main-color)',
                      }}
                    />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <components.Screen containerStyle={{backgroundColor: '#F5FAFB'}}>
      {renderHeader()}
      {renderTopBar()}
      {renderContent()}
      {renderModal()}
    </components.Screen>
  );
};
