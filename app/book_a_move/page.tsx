'use client'
import Map from '@/components/Map';
import BookingIndexForm from '@/components/book_a_move_comp/BookingIndexForm';
import { Col } from 'antd';

export default function Booking() {

 return (
  <>
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto gap-4 mt-10">
            {/* Your items go here */}
            <div className="p-5">
              <Map/>
            </div>
            <div className="p-5">
              <BookingIndexForm/>
            </div>
        </div>
  </>
 )
}