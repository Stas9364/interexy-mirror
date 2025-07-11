'use client';

import { BlockTitle } from '@/components/block-title/BlockTitle';
import { Container, Section } from '@/components/layout';

import { Form } from './Form';
import './style.css';
import { Steps } from './Steps';
import { useEffect, useState } from 'react';

export const ContactForm = () => {
  const [isPage, setIsPage] = useState(false);
  useEffect(() => {
    const isNotFound = document.querySelector('[data-page="not-found"]');

    if (!!isNotFound) setIsPage(!!isNotFound);
  }, []);

  return (
    <Section id='contact-form' className={`${isPage ? 'hidden' : 'block'}`}>
      <Container>
        <BlockTitle
          title='Ready to discuss your project with us?'
          className='max-w-[556px]'
        >
          <p className='text-secondary mt-5 text-lg leading-[1.4] font-normal'>
            Fill out the form with your details and we will get back to you shortly.
          </p>
        </BlockTitle>

        <div className='flex flex-col justify-between lg:flex-row lg:gap-x-[70px] xl:gap-x-[130px]'>
          <Steps />

          <Form />
        </div>
      </Container>
    </Section>
  );
};
