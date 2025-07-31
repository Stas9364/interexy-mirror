import { ContactForm } from '@/components/contact-form/ContactForm';
import { Footer, Header } from '@/components/layout';

export default function CommonPagesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className='common-page'>{children}</main>
      <Footer>
        <ContactForm />
      </Footer>
    </>
  );
}
