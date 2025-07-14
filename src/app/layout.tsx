import { Manrope } from 'next/font/google';
import './styles/globals.css';

const manrope = Manrope({
  variable: '--font-manrope-sans',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${manrope.variable} antialiased`}>
        <div className='flex min-h-screen flex-col'>{children}</div>
      </body>
    </html>
  );
}
