import BookingProgress from '@/components/book_a_move_comp/BookingProgress';

export default function BookAMoveLayout({
  children,
}: {
  children: React.ReactNode
}) {
 return(
 <section>
  <BookingProgress/>
  {children}
 </section>)
}