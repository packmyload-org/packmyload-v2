'use client'
import Nav from '@/components/Nav'
import './globals.css'
import Footer from '@/components/Footer'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
            <main className='w-full overflow-y-hidden'>
              <Nav/>
              {children}
              <Footer/>
            </main>
        </body>
    </html>
  )
}
