'use client';

import React from 'react';

import {Routes} from '../../routes';
import {stores} from '../../stores';
import {components} from '../../components';

export const Checkout: React.FC = () => {
  const {total, discount, delivery, list} = stores.useCartStore();
  const renderHeader = () => {
    return (
      <components.Header
        title='Checkout'
        showGoBack={true}
      />
    );
  };

  const renderContent = () => {
    return (
      <main
        className='scrollable container'
        style={{paddingTop: 16, paddingBottom: 20}}
      >
        {/* SUMMARY */}
        <section
          style={{
            padding: 20,
            borderRadius: 20,
            marginBottom: 14,
            backgroundColor: 'var(--white-color)',
            border: '1px solid #C8CDD9',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 12,
              justifyContent: 'space-between',
            }}
          >
            <h5 style={{color: 'var(--main-color)'}}>My order</h5>
            <h5 style={{color: 'var(--main-color)'}}>${total.toFixed(2)}</h5>
          </div>
          <ul>
            {list.map((dish) => {
              return (
                <li
                  key={dish.id}
                  style={{
                    marginBottom: 8,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                >
                  <span className='t16'>{dish.name}</span>
                  <span className='t16'>
                    {dish.quantity} x ${dish.price}
                  </span>
                </li>
              );
            })}
          </ul>
          <div
            style={{
              marginBottom: 8,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span className='t16'>Discount</span>
            <span className='t16'>- ${discount}</span>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span className='t16'>Delivery</span>
            <span className='t16'>{delivery > 0 && `$${delivery}`}</span>
            <span
              className='t16'
              style={{color: '#15C7FF'}}
            >
              {delivery === 0 && 'Free'}
            </span>
          </div>
        </section>

        {/* SHIPPING DETAILS */}
        <section
          style={{
            padding: 20,
            borderRadius: 20,
            marginBottom: 14,
            backgroundColor: 'var(--white-color)',
            border: '1px solid #C8CDD9',
          }}
          className='clickable'
        >
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <h5 style={{marginBottom: 12}}>Shipping details</h5>
            <span
              className='t16'
              style={{marginBottom: 8}}
            >
              Dominic Parker
            </span>
            <span
              className='t16'
              style={{marginBottom: 8}}
            >
              8000 S Kirkland Ave, Chicago, IL 6065...
            </span>
            <span className='t16'>**** 4864</span>
          </div>
        </section>

        {/* COMMENT */}
        <section className='clickable'>
          <textarea
            placeholder='Enter your comment'
            style={{
              width: '100%',
              height: 120,
              padding: '11px 20px',
              borderRadius: 20,
              border: '1px solid #C8CDD9',
              backgroundColor: 'var(--white-color)',
              resize: 'none',
              fontSize: 16,
            }}
          />
        </section>
      </main>
    );
  };

  const renderButton = () => {
    return (
      <section style={{padding: 20}}>
        <components.Button
          label={`Confirm order $${(total - discount + delivery).toFixed(2)}`}
          href={Routes.ORDER_SUCCESSFUL}
          // href={Routes.ORDER_FAILED}
        />
      </section>
    );
  };

  return (
    <components.Screen containerStyle={{backgroundColor: '#F5FAFB'}}>
      {renderHeader()}
      {renderContent()}
      {renderButton()}
    </components.Screen>
  );
};
