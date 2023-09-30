"use client"
import React, { useState } from 'react';
import { PlusCircle, Plus, Minus } from '@phosphor-icons/react';
import { useBookingForm } from '@/context/BookingFormContext';

interface RoomProps{
    roomType: string,
    price: number
}

export const RoomCounter: React.FC<RoomProps> = ({ roomType, price}) => {

    const { state: bookingFormState, dispatch: bookingFormDispatch } = useBookingForm();

    const initialCount = bookingFormState.rooms.reduce((count, room) => {
        if (room.room === roomType) {
          return parseInt(room.numberOfRooms, 10);
        }
        return count;
    }, 0);


    const [countItem, setCountItem] = useState<number>(initialCount);
    console.log(bookingFormState)

    const increaseCountItem = () => {
        setCountItem((countItem) => countItem + 1);
        const roomIndex = bookingFormState.rooms.findIndex((room) => room.room === roomType);
    
          let multipliedByQty: number = 0;

        if (roomIndex !== -1) {

            if (price) multipliedByQty = price * (countItem + 1)
            const updatedItems = [...bookingFormState.rooms];
            updatedItems[roomIndex].numberOfRooms = (countItem + 1).toString();
            updatedItems[roomIndex].price = multipliedByQty;
            bookingFormDispatch({ type: 'UPDATE_ROOMS', rooms: updatedItems });

        } else {
    
            if (price)
             multipliedByQty = (price * (countItem + 1)) 
            const newItem = { room: roomType, numberOfRooms: (countItem + 1).toString(), price: multipliedByQty };
            bookingFormDispatch({ type: 'UPDATE_ROOMS', rooms: [...bookingFormState.rooms, newItem] });
        }
    };

    const decreaseCountItem = () => {
        if (countItem > 0) {
            setCountItem((countItem) => countItem - 1);
          const roomIndex = bookingFormState.rooms.findIndex((room) => room.room === roomType);

          let multipliedByQty: number = 0;
          if (roomIndex !== -1) {

            if (price)
             multipliedByQty = price * (countItem - 1)
            const updatedItems = [...bookingFormState.rooms];
            updatedItems[roomIndex].numberOfRooms = (countItem - 1).toString();
            updatedItems[roomIndex].price = multipliedByQty;
            bookingFormDispatch({ type: 'UPDATE_ROOMS', rooms: updatedItems });
            }
        }
    };
    const counterButtons = (
        countItem === 0 ?
        <PlusCircle size={32} color="#444646" weight="fill" onClick={increaseCountItem} className='cursor-pointer' />
        :
        <div className="bg-blue-300 w-[90px] text-white gap-2 flex justify-between shadow-md p-1 rounded-full min-h-max">
          <Minus size={12} className='mt-[6px] cursor-pointer' color="white" type='button' onClick={decreaseCountItem} />
          <p className='text-[14px]'>{countItem}</p>
          <Plus size={12} className='mt-[6px] cursor-pointer' color="white" type='button' onClick={increaseCountItem} />
        </div>
    );
    
      return (
        <div className="bg-blue-200 flex justify-center gap-1 items-center rounded-md shadow-md p-3 w-[80%] h-[80px] sm:w-full mx-auto lg:w-[180px] min-w-[140px]">
          <p className="text-[12px] w-full" title={roomType}>{roomType}</p>
          {counterButtons}
        </div>
      );
}