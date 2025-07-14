import { ContactForm } from '@/components/contact-form/ContactForm';
import { Footer, Header } from '@/components/layout';

export default function CommonPagesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className='werwerwer'>{children}</main>
      <Footer>
        <ContactForm />
      </Footer>
    </>
  );
}
