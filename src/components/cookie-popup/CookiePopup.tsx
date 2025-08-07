'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Container } from '../layout';

export const CookiePopup = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!checkCookie('c_accepted')) {
      setVisible(true);
    }
  }, []);

  function checkCookie(name: string) {
    return document.cookie.split('; ').some(cookie => cookie.startsWith(`${name}=`));
  }

  function setCookie(name: string, value: string, days: number) {
    let expires = '';
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = `; expires=${date.toUTCString()}`;
    }
    document.cookie = `${name}=${value || ''}${expires}; path=/`;
  }

  function deleteAllCookies() {
    document.cookie.split(';').forEach(cookie => {
      const cookieName = cookie.split('=')[0].trim();
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    });
    window.location.reload();
  }

  const handleAccept = () => {
    setCookie('c_accepted', 'true', 180);
    setVisible(false);
  };

  const handleDecline = () => {
    deleteAllCookies();
    setCookie('c_accepted', 'true', 180);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className='fixed bottom-0 left-0 z-[100000] flex w-full items-center justify-center bg-gray-200 py-6'>
      <Container>
        <div className='flex w-full flex-col items-center justify-between gap-8 px-12 md:flex-row md:gap-4 md:px-4 md:pb-8'>
          <div className='w-full max-w-[985px]'>
            <p className='text-base leading-[140%] font-normal'>
              This website uses cookies. By clicking “I agree” or continuing to browse,
              you consent to their use. You can withdraw your consent at any time by
              changing your browser settings and deleting saved cookies. Read more in our
              <Link href='/cookie-policy' className='text-accent pl-[4px] underline'>
                Cookie Policy
              </Link>
            </p>
          </div>
          <div className='flex gap-6'>
            <button
              onClick={handleAccept}
              className='bg-btn hover:bg-btn-hover h-13 w-36 cursor-pointer rounded border-none text-base leading-[140%] font-medium text-white transition-all duration-300'
            >
              I agree
            </button>
            <button
              onClick={handleDecline}
              className='hover:border-btn-hover hover:bg-btn-hover text-primary h-13 w-36 cursor-pointer rounded border border-gray-900 bg-transparent text-base leading-[140%] font-medium outline transition-all duration-300 hover:text-white'
            >
              Decline all
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};
