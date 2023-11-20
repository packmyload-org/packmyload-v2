"use client"
import { RoomCounter } from '@/components/book_a_move_comp/RoomCounter';
import roomMove from '@/utils/RoomMoves.json';
import dynamic from 'next/dynamic';
import Loading from '@/app/loading';
import { useBookingForm } from '@/context/BookingFormContext';
import { useEffect, useMemo, useState } from 'react';
const BookingLayout = dynamic(() => import('../BookingLayout'), {
  loading: () => <Loading/>,
});

type RoomJson = {
    rooms: {
        room: string,
        price: number
    }[]
}
export default async function Rooms(){
const handleFieldChange = (field: string, value: string) => {
    dispatch({ type: 'UPDATE_FIELD', field, value });
    };

    const[priceData, setPriceData] = useState()

    const { state, dispatch } = useBookingForm();
    const roomsOb: RoomJson = roomMove
    
    useMemo(() => {
  (async () => {
   const hostURL = window.location.origin;
   const res = await fetch(`${hostURL}/api/pricing`, {
    method: "GET",
    headers: {
        'Content-Type': 'application/json'
    },
   });
   const data = await res.json();
   const newObj = data.data[data.data.length - 1]
   delete newObj._id;
   delete newObj.__v;
   setPriceData(newObj)
  })();
     }, []);
    
    const rightContent = (
        <main className='space-y-3'>
            <h1 className='text-xl md:text-4xl font-black text-blue-300 text-center'>Select The Number Of Rooms</h1>
            <div className='grid grid-cols-2 gap-2 p-1 pt-4 md:w-[70%] lg:w-[80%] w-full  h-[fit-content] mx-auto mt-2'>
                {
                    roomsOb.rooms.map(room => (
                        <RoomCounter roomType={room.room} price={room.price}
                        priceDataJson={priceData as any}
                        />
                    ))
                }
            </div>
            <form className=' md:w-[70%] mx-auto py-4'>
                <label className="text-sm text-blue-300 font-semibold" htmlFor="size-feet">Enter Home Size in Square Feet</label>
                <input 
                    className='w-full mt-2 h-12 p-4 text-gray-500 rounded-md outline-none border-2 placeholder:text-slate-400 placeholder:font-[500] bg-slate-50'
                    id='size-feet' 
                    type="number" 
                    placeholder='80'
                    onChange={(e)=>handleFieldChange('size', e.target.value)}
                />
            </form>
        </main>
    )

       const leftContent = (
   <div className="hidden md:block p-1 lg:px-4 my-auto h-[54vh] w-full rooms-bg bg-contain">
    
    </div>
 )
    return (
        <BookingLayout 
            rightContent={rightContent}
            leftContent={leftContent}
            prev='/book'
            next='/book/items'
        />
    )
}