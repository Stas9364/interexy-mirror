import { DarkHeader, Footer } from '@/components/layout';

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DarkHeader />
      <main>{children}</main>
      <Footer />
    </>
  );
}
