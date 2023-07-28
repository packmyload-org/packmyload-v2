import Nav from '@/components/Nav'
import './globals.css'
import type { Metadata } from 'next'



export const metadata: Metadata = {
  title: 'Packmyload',
  description: 'Moving as easy as ABC',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className='font-satoshi'>
        <div className='w-full'>
            <main className=''>
              <Nav/>
              {children}
            </main>
          </div>
        </body>
    </html>
  )
}
