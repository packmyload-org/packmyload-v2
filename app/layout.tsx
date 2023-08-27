'use client'
import dynamic from 'next/dynamic'
const Nav = dynamic(() => import('@/components/Nav'),
{ssr: false})
import './globals.css'
const Footer = dynamic(() => import('@/components/Footer'),
{ssr: false})
// import Footer from '@/components/Footer'
import StyledComponentsRegistry from '@/lib/AntdRegistry';
// import { LoadingProvider } from '@/context/LoadingContext';

import BookingProgress from '@/components/book_a_move_comp/BookingProgress';
import { App } from 'antd';
import { usePathname } from 'next/navigation';
import Provider from '@/providers/provider'

import Loading from './loading'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  return (
    <html lang="en">
      <meta name="description" content="packmyload.com offers is one of the best packing and moving companies in Lagos, Nigeria. We offer international and interstate packing and moving to Lagos. Our staff help you with a swift, fast &amp; efficient move.
"></meta>
<meta property="og:image" content="https://www.packmyload.com/images/iconpackmyload.png"/>
<meta property="og:image:type" content="image/png"></meta>
<meta property="og:image:height" content="342"></meta>
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"></meta>
<meta property="og:title" content="packmyload.com"/>
      <link rel="icon" href="/favicon.ico"  />
      <title>Packmyload</title>

      <body className='font-satoshi'>
        <div className='w-full'>
          <main className='w-full overflow-y-hidden'>
              <Provider>
                <StyledComponentsRegistry>
                  <App>
                    <Nav/>
                    {
                      pathname.includes("book_a_move") ? <BookingProgress /> : null
                    } 
                      {children}
                    <Footer/>
                  </App>
                </StyledComponentsRegistry>
              </Provider>
          </main>
        </div>
        </body>
    </html>
  )
}
