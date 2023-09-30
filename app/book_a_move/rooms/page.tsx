"use client"
import { RoomCounter } from '@/components/book_a_move_comp/RoomCounter';
import roomMove from '@/utils/RoomMoves.json';
import { BookingLayout } from '../BookingLayout';

type RoomJson = {
    rooms: {
        room: string,
        price: number
    }[]
}

export default function Rooms(){
    const roomsOb: RoomJson = roomMove
    
    const rightContent = (
        <div className='flex flex-wrap gap-2 p-1 w-full h-[fit-content]'>
            {
                roomsOb.rooms.map(room => (
                    <RoomCounter roomType={room.room} price={room.price} />
                ))
            }
        </div>
    )

    return (
        <BookingLayout 
            stepDescription='Select Your Rooms Type For Your Move'
            textDescription=''
            rightContent={rightContent}  
            prev='/book_a_move'
        />
    )
}