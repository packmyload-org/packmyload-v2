"use client"
import { RoomCounter } from '@/components/book_a_move_comp/RoomCounter';
import roomMove from '@/utils/RoomMoves.json';
import dynamic from 'next/dynamic';
import Loading from '@/app/loading';
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
    const roomsOb: RoomJson = roomMove
    
    const rightContent = (
        <div className='grid grid-cols-2 gap-2 p-1 w-full h-[fit-content] lg:mt-[80px]'>
            {
                roomsOb.rooms.map(room => (
                    <RoomCounter roomType={room.room} price={room.price} />
                ))
            }
        </div>
    )

       const leftContent = (
   <div className="p-1 lg:px-4 my-auto h-[45vh] w-full items-bg bg-contain">
    
    </div>
 )
    return (
        <BookingLayout 
            stepDescription='Select The Number Of Rooms'
            textDescription=' We use this information to determine the size of the truck, the materials and the number of movers needed for your move.'
            rightContent={rightContent}
            leftContent={leftContent}
            prev='/move'
            next='move/items'
        />
    )
}