import {useState} from 'react'
import { PlusCircle, Plus, Minus } from "@phosphor-icons/react";

interface itemsProps {
    title: string ;
}
const ItemsCounter: React.FC<itemsProps> = ({ title}) => {
    const [countItem, setCountItem] = useState<number>(0)

    const increaseCountItem = () => {
        setCountItem(countItem => countItem + 1)
    }
    const decreaseCountItem = () => {
        if(countItem > 0) setCountItem(countItem => countItem - 1)
    }


    const counterButtons = (
        countItem === 0 ? 
        <PlusCircle size={32} color="#444646" weight="fill" onClick={increaseCountItem} className='cursor-pointer'/>
        :
        <div className="bg-blue-500 text-white gap-4 flex justify-between shadow-md p-2 rounded-xl">
            <Minus size={15} className='mt-1 cursor-pointer' color="white" type='button' onClick={decreaseCountItem} />
            {countItem}
            <Plus size={15} className='mt-1 cursor-pointer' color="white" type='button' onClick={increaseCountItem} />
        </div>
    )

    return (
        <div className="bg-blue-200 flex justify-between rounded-md shadow-md p-4 
 w-full md:w-1/4 mt-5 min-w-[200px] space-x-2">
            <p className="text-lg w-full" title={title}>{title}</p>
            {counterButtons}
        </div>
    )
}

export default ItemsCounter