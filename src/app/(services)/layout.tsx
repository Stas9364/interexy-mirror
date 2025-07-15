import { ContactForm } from '@/components/contact-form/ContactForm';
import { DarkHeader, Footer } from '@/components/layout';

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DarkHeader />
      <main>{children}</main>
      <Footer>
        <ContactForm />
      </Footer>
    </>
  );
}
