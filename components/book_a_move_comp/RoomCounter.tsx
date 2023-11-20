"use client"
import React, { useEffect, useState } from 'react';
import { PlusCircle, Plus, Minus } from '@phosphor-icons/react';
import { useBookingForm } from '@/context/BookingFormContext';
import priceDataJson from '@/utils/prices.json';
interface RoomProps{
  roomType: string,
  price: number,
  priceDataJson: any
}

export const RoomCounter: React.FC<RoomProps> = ({ roomType, price, priceDataJson}) => {

    const { state: bookingFormState, dispatch: bookingFormDispatch } = useBookingForm();
    const initialCount = bookingFormState.rooms.reduce((count, room) => {
        if (room.room === roomType) {
          return parseInt(room.numberOfRooms, 10);
        }
        return count;
    }, 0);


    const [countItem, setCountItem] = useState<number>(initialCount);


    const increaseCountItem = () => {
        setCountItem((countItem) => countItem + 1);
        const roomIndex = bookingFormState.rooms.findIndex((room) => room.room === roomType);
    

        if (roomIndex !== -1) {

            const updatedItems = [...bookingFormState.rooms];
            updatedItems[roomIndex].numberOfRooms = (countItem + 1).toString();
            bookingFormDispatch({ type: 'UPDATE_ROOMS', rooms: updatedItems });

        } else {
    
            const newItem = { room: roomType, numberOfRooms: (countItem + 1).toString()};
            bookingFormDispatch({ type: 'UPDATE_ROOMS', rooms: [...bookingFormState.rooms, newItem] });
        }
    };

    const decreaseCountItem = () => {
        if (countItem > 0) {
            setCountItem((countItem) => countItem - 1);
          const roomIndex = bookingFormState.rooms.findIndex((room) => room.room === roomType);

          if (roomIndex !== -1) {

            const updatedItems = [...bookingFormState.rooms];
            updatedItems[roomIndex].numberOfRooms = (countItem - 1).toString();
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
    const handleFieldChange = (field: string, value: string | number) => {
      bookingFormDispatch({ type: 'UPDATE_FIELD', field, value });
  };

  
    useEffect(() => {
      if (bookingFormState.rooms.length === 0) {
        return;
      }
    
      const specificRoom = bookingFormState.rooms.find((room: any) => room.room === "Bedrooms");
    
      if (!specificRoom) {
        console.warn("Specific room not found.");
        return;
      }
    
      let moveType: "intraState" | "interState" | null = null;
    
      if (
        (bookingFormState.pickUp === "Lagos" && bookingFormState.destination === "Lagos") ||
        (bookingFormState.pickUp === "Abuja" && bookingFormState.destination === "Abuja")
      ) {
        moveType = "intraState";
      } else {
        moveType = "interState";
      }
    
      if (!moveType) {
        console.warn("Invalid move type.");
        return;
      }
      console.log(priceDataJson)
      const priceDataArray = priceDataJson[moveType] 
    
      if (!priceDataArray || priceDataArray.length === 0) {
        console.warn("Price data array is empty or undefined.");
        return;
      }
    
      const priceData = priceDataArray.find((data: any) => data.Bedrooms === Number(specificRoom.numberOfRooms));
    
      if (priceData) {
        console.log(priceData);
        handleFieldChange("totalPrice", priceData.price);
        handleFieldChange("movers", priceData.Movers)
      } else {
       if(specificRoom.numberOfRooms > '5'){
        handleFieldChange("totalPrice", "Call for price");
        handleFieldChange("movers", 5)
      }
    }
    }, [bookingFormState.rooms, bookingFormState.pickUp, bookingFormState.destination]);
    
    
    
      return (
        <div className="bg-blue-200 flex justify-center gap-1 items-center rounded-md shadow-md p-3 sm:w-[78%] h-[80px] w-full mx-auto min-w-[140px]">
          <p className="text-sm sm:text-base w-full" title={roomType}>{roomType}</p>
          {counterButtons}
        </div>
      );
}