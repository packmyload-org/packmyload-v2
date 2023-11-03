'use client'

import { ToastContainer } from 'react-toastify';

export default function BookAMoveLayout({
  children
}: {
  children: React.ReactNode
}) {

 return(
   <>
            <meta property="og:url" content="https://www.packmyload.com/book" />
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