'use client';

import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/navigation';

import {svg} from '../../svg';
import {items} from '../../items';
import {Routes} from '../../routes';
import {stores} from '../../stores';
import {components} from '../../components';

export const Order: React.FC = () => {
  const router = useRouter();

  const [promocodeApplied, setPromocodeApplied] = useState(false);

  const {
    list: cart,
    subtotal,
    discount,
    delivery,
    total,
  } = stores.useCartStore();

  useEffect(() => {
    if (cart.length === 0) {
      router.push(Routes.CART_EMPTY);
    }
  }, [cart]);

  const renderHeader = () => {
    return (
      <components.Header
        title='Order'
        showBasket={true}
        showBurger={true}
      />
    );
  };

  const renderContent = () => {
    return (
      <main
        className='scrollable container'
        style={{paddingTop: 10, paddingBottom: 20}}
      >
        {/* DISHES */}
        <section style={{marginBottom: 20}}>
          <ul style={{display: 'flex', flexDirection: 'column', gap: 8}}>
            {cart.map((dish, index, array) => {
              return (
                <items.OrderItem
                  product={dish}
                  key={dish.id}
                />
              );
            })}
          </ul>
        </section>

        {/* ENTER PROMOCODE */}
        {!promocodeApplied && (
          <section style={{display: 'flex', gap: 10, marginBottom: '20%'}}>
            <div style={{display: 'flex', flex: 1}}>
              <components.InputField
                inputType='text'
                placeholder='Enter your promocode'
              />
            </div>
            <button
              style={{
                height: 50,
                backgroundColor: 'var(--main-color)',
                borderRadius: 50,
                color: 'var(--white-color)',
                width: '40%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onClick={() => setPromocodeApplied(true)}
            >
              <span
                className='t18'
                style={{color: 'var(--white-color)'}}
              >
                Apply
              </span>
            </button>
          </section>
        )}

        {/* PROMOCODE APPLIED */}
        {promocodeApplied && (
          <section style={{marginBottom: '10%'}}>
            <button>
              <svg.ApplyPromocodeSvg />
            </button>
          </section>
        )}

        {/* SUMMARY */}
        <section style={{marginBottom: 12}}>
          <div
            style={{
              padding: 20,
              borderRadius: 20,
              border: '1px solid #C8CDD9',
              backgroundColor: 'var(--white-color)',
            }}
          >
            <ul>
              {/* SUBTOTAL */}
              <li
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 6,
                }}
              >
                <span
                  className='t16'
                  style={{color: 'var(--main-color)'}}
                >
                  Subtotal
                </span>
                <span
                  className='t16'
                  style={{color: 'var(--main-color)'}}
                >
                  ${subtotal.toFixed(2)}
                </span>
              </li>
              {/* DELIVERY */}
              <li
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingBottom: 6,
                }}
              >
                <span className='t16'>Delivery</span>
                <span className='t16'>
                  {delivery > 0 && delivery.toFixed(2)}
                </span>
                <span style={{color: '#15C7FF'}}>
                  {delivery === 0 && 'Free'}
                </span>
              </li>
              {/* DISCOUNT */}
              <li
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 10,
                  paddingBottom: 7,
                  borderBottom: '1px solid #C8CDD9',
                }}
              >
                <span className='t16'>Discount</span>
                <span className='t16'>- ${discount}</span>
              </li>
              {/* TOTAL */}
              <li
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span
                  className='t16'
                  style={{color: 'var(--main-color)'}}
                >
                  Total
                </span>
                <span
                  className='t16'
                  style={{color: 'var(--main-color)'}}
                >
                  ${total.toFixed(2)}
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* BUTTON */}
        <section>
          <components.Button
            href={Routes.SHIPPING_AND_PAYMENT_INFO}
            label='proceed to checkout'
          />
        </section>
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
