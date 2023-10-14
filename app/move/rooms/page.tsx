"use client"
import { RoomCounter } from '@/components/book_a_move_comp/RoomCounter';
import roomMove from '@/utils/RoomMoves.json';
import dynamic from 'next/dynamic';
import Loading from '@/app/loading';
import { useBookingForm } from '@/context/BookingFormContext';
const BookingLayout = dynamic(() => import('../BookingLayout'), {
  loading: () => <Loading/>,
});

type RoomJson = {
    rooms: {
        room: string,
        price: number
    }[]
}

export default function Rooms(){
const handleFieldChange = (field: string, value: string) => {
    dispatch({ type: 'UPDATE_FIELD', field, value });
};
    const { state, dispatch } = useBookingForm();
    const roomsOb: RoomJson = roomMove
    
    const rightContent = (
        <main className='space-y-2'>
            <h1 className='text-xl md:text-4xl font-black text-blue-300 text-center'>Select The Number Of Rooms</h1>
            {/* <p className='text-sm text-center md:w-[80%] mt-1 mx-auto'>We use this information to determine the size of the truck, the materials and the number of movers needed for your move.</p> */}
            <form className=' md:w-[70%] lg:w-[85%] md:ml-10 py-4'>
                <label className="text-sm text-blue-300 font-semibold" htmlFor="size-feet">Enter Size in Square Feet</label>
                <input 
                    className='w-full mt-2 h-12 p-4 text-gray-500 rounded-md outline-none border-2 placeholder:text-slate-400 placeholder:font-[500] bg-slate-50'
                    id='size-feet' 
                    type="number" 
                    placeholder='80'
                    onChange={(e)=>handleFieldChange('size', e.target.value)}
                />
            </form>
            <div className='grid grid-cols-2 gap-2 p-1 w-full h-[fit-content] mt-2'>
                {
                    roomsOb.rooms.map(room => (
                        <RoomCounter roomType={room.room} price={room.price} />
                    ))
                }
            </div>
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
            prev='/move'
            next='/move/items'
        />
    )
}