import { Analytics } from '@/components/analytics/Analytics';
import localFont from 'next/font/local';
import './styles/globals.css';

const manrope = localFont({
  src: [
    {
      path: '../../public/fonts/Manrope-VariableFont_wght.ttf',
      weight: '100 900',
      style: 'normal',
    },
  ],
  variable: '--font-manrope-sans',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${manrope.variable} antialiased`}>
        <Analytics />

        <div className='flex min-h-screen flex-col'>{children}</div>
      </body>
    </html>
  );
}
