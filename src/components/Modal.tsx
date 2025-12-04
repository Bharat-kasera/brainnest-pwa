'use client';

import React, {useEffect} from 'react';
import {usePathname} from 'next/navigation';

import {svg} from '../svg';
import {Routes} from '../routes';
import {stores} from '../stores';

export const Modal: React.FC = () => {
  const {isOpen, closeModal} = stores.useModalStore();

  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      const metaThemeColor = document.querySelector('meta[name="theme-color"]');
      if (metaThemeColor) {
        metaThemeColor.setAttribute('content', '#F5FAFB');
      }
      return () => {
        if (
          pathname === Routes.PROFILE ||
          pathname === Routes.HOME ||
          pathname === Routes.ORDER
        ) {
          metaThemeColor?.setAttribute('content', '#F5FAFB');
        }

        if (pathname === Routes.CATEGORIES) {
          metaThemeColor?.setAttribute('content', '#fff');
        }
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(30, 37, 56, 0.6)',
        zIndex: 101,
      }}
      onClick={() => {
        closeModal();
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          height: '100%',
          width: '76%',
          backgroundColor: '#F5FAFB',
          zIndex: 99999,
        }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div
          style={{
            paddingTop: '20%',
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <h2 style={{textTransform: 'capitalize', marginBottom: 27}}>
            Contact us
          </h2>
        </div>
        {/* Address */}
        <div
          style={{
            paddingLeft: 20,
            display: 'flex',
            marginBottom: 20,
            paddingBottom: 20,
            flexDirection: 'row',
            gap: 8,
            borderBottom: '1px solid var(--border-color)',
          }}
        >
          <svg.MapPinSvg />
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <span className='t16 number-of-lines-1'>
              27 Division St, New York,
            </span>
            <span className='t16 number-of-lines-1'>NY 10002, USA</span>
          </div>
        </div>
        {/* Email */}
        <div
          style={{
            paddingLeft: 20,
            display: 'flex',
            marginBottom: 20,
            paddingBottom: 20,
            flexDirection: 'row',
            gap: 8,
            borderBottom: '1px solid var(--border-color)',
          }}
        >
          <svg.ModalMailSvg />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <span className='t16 number-of-lines-1'>
              brainnestsale@mail.com
            </span>
            <span className='t16 number-of-lines-1'>
              brainnestsupport@mail.com
            </span>
          </div>
        </div>
        {/* Phone */}
        <div
          style={{
            gap: 8,
            paddingLeft: 20,
            display: 'flex',
            paddingBottom: 20,
            flexDirection: 'row',
            borderBottom: '1px solid var(--border-color)',
          }}
        >
          <svg.PhoneCallSvg />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <span className='t16 number-of-lines-1'>+17 123456789</span>
            <span className='t16 number-of-lines-1'>+17 987654321</span>
          </div>
        </div>
      </div>
    </div>
  );
};
