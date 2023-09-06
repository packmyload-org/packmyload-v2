'use client'
import BookingProgress from '@/components/book_a_move_comp/BookingProgress';
import { ToastContainer } from 'react-toastify';

export default function BookAMoveLayout({
  children,
}: {
  children: React.ReactNode
}) {
 return(
 <section>
  <BookingProgress/>
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
   </section>
 )
}