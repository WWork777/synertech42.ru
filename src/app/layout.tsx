import type { Metadata } from 'next'
import { Bricolage_Grotesque } from 'next/font/google'
import './globals.css'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import NextTopLoader from 'nextjs-toploader';

const font = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Синертек - Центр прототипирования полного цикла',
  description: 'Полный цикл реверс-инжиниринга и разработки прикладного оборудования: от 3D моделирования и разработки электроники до серийного производства и подготовки НИОКР.',
  icons: {
    icon: [
      { url: '/icon.svg?v=3', sizes: 'any', type: 'image/svg+xml' },
      { url: '/favicon-32x32.svg?v=3', sizes: '32x32', type: 'image/svg+xml' },
      { url: '/favicon-16x16.svg?v=3', sizes: '16x16', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-icon.svg?v=3', type: 'image/svg+xml', sizes: '180x180' }
    ],
    shortcut: '/icon.svg?v=3',
    other: [
      {
        rel: 'mask-icon',
        url: '/icon.svg',
        color: '#DC2626',
      },
    ],
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ru'>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <link rel="icon" type="image/svg+xml" href="/icon.svg?v=3" />
        <link rel="apple-touch-icon" href="/apple-icon.svg?v=3" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#E83C39" />
      </head>
      <body className={`${font.className} bg-white antialiased overflow-x-hidden`}>
        <NextTopLoader color="#DC2626" />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

