import React, { useContext, useState } from 'react';
import { PlusCircle, Plus, Minus } from '@phosphor-icons/react';
import { useBookingForm } from '@/context/BookingFormContext';

interface ItemsProps {
  title: string;
  volume: number;
}

const ItemsCounter: React.FC<ItemsProps> = ({ title, volume }) => {
  const [countItem, setCountItem] = useState<number>(0);
  const { state: bookingFormState, dispatch: bookingFormDispatch } = useBookingForm();
  console.log(bookingFormState)
    const increaseCountItem = () => {
    setCountItem((countItem) => countItem + 1);
    const itemIndex = bookingFormState.items.findIndex((item) => item.item === title);

      let price: number = 0;
      let multipliedByQty: number = 0;
      if (itemIndex !== -1) {
       if (volume <= 100) {
           price = 1000;
        } else if (volume > 100 && volume <= 500) {
          price = 5000;
        }else if (volume > 500) {
          price = 9000
        }
        if (price)
         multipliedByQty = price * (countItem + 1)
        const updatedItems = [...bookingFormState.items];
        updatedItems[itemIndex].numberOfItems = (countItem + 1).toString();
        updatedItems[itemIndex].price = multipliedByQty;
        updatedItems[itemIndex].volume = volume;
        bookingFormDispatch({ type: 'UPDATE_ITEMS', items: updatedItems });
    } else {
        if (volume <= 100) {
          price = 1000;
        } else if (volume > 100 && volume <= 500) {
          price = 5000;
        }else if (volume > 500) {
          price = 9000
        }
        if (price)
         multipliedByQty = (price * (countItem + 1)) 
        const newItem = { item: title, numberOfItems: (countItem + 1).toString(), price: multipliedByQty, volume: volume };
        bookingFormDispatch({ type: 'UPDATE_ITEMS', items: [...bookingFormState.items, newItem] });
    }
    };

    const decreaseCountItem = () => {
    if (countItem > 0) {
        setCountItem((countItem) => countItem - 1);
      const itemIndex = bookingFormState.items.findIndex((item) => item.item === title);
      let price: number = 0;
      let multipliedByQty: number = 0;
      if (itemIndex !== -1) {
        if (volume <= 100) {
           price = 1000;
        } else if (volume > 100 && volume <= 500) {
          price = 5000;
        }else if (volume > 500) {
          price = 9000
        }
        if (price)
         multipliedByQty = price * (countItem - 1)
        const updatedItems = [...bookingFormState.items];
        updatedItems[itemIndex].numberOfItems = (countItem - 1).toString();
        updatedItems[itemIndex].price = multipliedByQty;
        updatedItems[itemIndex].volume = volume;
        bookingFormDispatch({ type: 'UPDATE_ITEMS', items: updatedItems });
        }
    }
    };

  const counterButtons = (
    countItem === 0 ?
    <PlusCircle size={32} color="#444646" weight="fill" onClick={increaseCountItem} className='cursor-pointer' />
    :
    <div className="bg-blue-500 text-white gap-4 flex justify-between shadow-md p-2 rounded-xl min-h-max">
      <Minus size={15} className='mt-1 cursor-pointer' color="white" type='button' onClick={decreaseCountItem} />
      {countItem}
      <Plus size={15} className='mt-1 cursor-pointer' color="white" type='button' onClick={increaseCountItem} />
    </div>
  );

  return (
    <div className="bg-blue-200 flex justify-between items-center rounded-md shadow-md p-3 w-[45%] mx-auto md:w-[200px] min-w-[140px]">
      <p className="text-[16px] w-full" title={title}>{title}</p>
      {counterButtons}
    </div>
  );
};

export default ItemsCounter;