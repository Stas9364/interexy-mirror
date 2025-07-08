import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './styles/globals.css';
import { Footer, Header } from '@/components/layout';
import { ContactForm } from '@/components/contact-form/ContactForm';

const manrope = Manrope({
  variable: '--font-manrope-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Interexy: Software Development Company',
  description:
    'Transform your business with Interexy, a top custom software development company. Contact us today to leverage our expert app development services',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${manrope.variable} antialiased`}>
        <div className='flex min-h-screen flex-col'>
          <Header />
          <main>{children}</main>
          
          <Footer>
            <ContactForm />
          </Footer>
        </div>
      </body>
    </html>
  );
}
