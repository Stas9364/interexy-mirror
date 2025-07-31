import { ContactForm } from '@/components/contact-form/ContactForm';
import { DarkHeader, Footer } from '@/components/layout';

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DarkHeader />
      <main className='services-page'>{children}</main>
      <Footer>
        <ContactForm />
      </Footer>
    </>
  );
}
