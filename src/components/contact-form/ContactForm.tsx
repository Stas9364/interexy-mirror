import { BlockTitle } from '@/components/block-title/BlockTitle';
import { Container, Section } from '@/components/layout';

import { Form } from './Form';
import { Steps } from './Steps';
import './style.css';

export const ContactForm = () => {
  return (
    <Section id='contact-form'>
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
