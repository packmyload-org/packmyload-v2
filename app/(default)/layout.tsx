'use client'
import dynamic from 'next/dynamic'
import { ToastContainer } from 'react-toastify';
import Loading from '@/app/loading'
const Nav = dynamic(() => import('@/components/Nav'), {
  loading: () => <Loading />,
  ssr: false
  })
const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <Loading />,
  ssr: false
  })
export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {
 return(
   <>
        <Nav/>
        {children}
        <Footer/>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={true}
            closeOnClick={false}
            rtl={false}
            draggable
            pauseOnFocusLoss
            theme="light"
          />
      </>
  )
}