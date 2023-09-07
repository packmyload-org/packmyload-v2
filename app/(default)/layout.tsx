'use client'
import { ToastContainer } from 'react-toastify';

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {
 return(
    <>
        {children}
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