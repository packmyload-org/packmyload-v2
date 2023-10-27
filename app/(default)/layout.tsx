'use client'
import { ToastContainer } from 'react-toastify';
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Chat from '@/components/chat/chat';

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
    <Chat />
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