import React, { useContext, useState } from 'react';
import { PlusCircle, Plus, Minus } from '@phosphor-icons/react';
import { useBookingForm } from '@/context/BookingFormContext';

interface ItemsProps {
  title: string;
  volume: number;
}

const ItemsCounter: React.FC<ItemsProps> = ({title, volume }) => {

  const { state: bookingFormState, dispatch: bookingFormDispatch } = useBookingForm();
    // Initialize local count from global state

  
  const initialCount = bookingFormState.items.reduce((count, item) => {
    if (item.item === title) {
      return parseInt(item.numberOfItems, 10);
    }
    return count;
  }, 0);
  
  const [countItem, setCountItem] = useState<number>(initialCount);

    // console.log(countItem)

    const increaseCountItem = () => {
    setCountItem((countItem) => countItem + 1);
    const itemIndex = bookingFormState.items.findIndex((item) => item.item === title);
      if (itemIndex !== -1) {
        const updatedItems = [...bookingFormState.items];
        updatedItems[itemIndex].numberOfItems = (countItem + 1).toString();
        updatedItems[itemIndex].volume = volume;
        bookingFormDispatch({ type: 'UPDATE_ITEMS', items: updatedItems });
    } else {
        const newItem = { item: title, numberOfItems: (countItem + 1).toString(),  volume: volume };
        bookingFormDispatch({ type: 'UPDATE_ITEMS', items: [...bookingFormState.items, newItem] });
    }
    };

    const decreaseCountItem = () => {
    if (countItem > 0) {
        setCountItem((countItem) => countItem - 1);
      const itemIndex = bookingFormState.items.findIndex((item) => item.item === title);
      if (itemIndex !== -1) {
        const updatedItems = [...bookingFormState.items];
        updatedItems[itemIndex].numberOfItems = (countItem - 1).toString();
        updatedItems[itemIndex].volume = volume;
        bookingFormDispatch({ type: 'UPDATE_ITEMS', items: updatedItems });
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
      <p className="text-[12px] w-full" title={title}>{title}</p>
      {counterButtons}
    </div>
  );
};

export default ItemsCounter;