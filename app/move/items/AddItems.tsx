"use client"
import { useBookingForm } from "@/context/BookingFormContext";
import { useEffect, useState } from "react"

interface Item {
    item: string;
    numberOfItems: string;
}

export const AddItems: React.FC = () => {
     const { state, dispatch } = useBookingForm();
    const [info, setInfo] = useState(false)
    const [items, setItems] = useState<Item[]>([{ item: '', numberOfItems: ''}]);
    const [showForm, setShowForm] = useState(false)

    const onMouseEnter = () => {
        setInfo(() => true)
    }
    const onMouseLeave = () => {
        setInfo(() => false)
    }

    function toggleClick() {
        setInfo(prev => !prev)
    }
    

    const addRow = () => {
        setItems([...items, { item: '', numberOfItems: '', }]);
    };
    const removeRow = () => {
        if (items.length > 1) {
          const updatedItems = [...items];
          updatedItems.pop(); 
          setItems(updatedItems);
        }
      };

    const handleInputChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        const updatedItems = [...items];
        updatedItems[index][name as keyof Item] = value;
        dispatch({ type: 'UPDATE_ITEMS', items: updatedItems });
        setItems(updatedItems);
    };
    console.log(state.items)
    useEffect(() => {
        setItems(state.items);
      }, [state.items]);

    return (
        <section className="w-full">
            {
                !showForm ?
                <span 
                    className="font-sm text-blue-300 font-black float-right cursor-pointer"
                    >
                    <span onClick={() => setShowForm(() => true)}>

                        Add item(s){" "}
                    </span>
                    <button
                        className="rounded-full w-[20px] h-[20px] border border-black text-[12px]"
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                        onClick={toggleClick}
                    >
                        ?
                    </button>
                </span>
                : <span 
                    className="font-sm text-blue-300 font-black float-right cursor-pointer"
                    onClick={() => setShowForm(() => false)}
                    >
                    &#10006;
                    </span>
            }

            <div className="clear-both" />
            {
                info && 
                <div
                    className="bg-white p-2 absolute top-8 right-4 text-sm border border-gray-300 rounded shadow-md"
                    >
                    Incase your item(s) is not listed out in the categories below. <br />
                    Please click on Add Items(s) to input all other items
                </div>

            }
            {
                showForm && (
                    <section>

                        <form>
                            {items.map((item, index) => (
                            <div key={index} className="flex space-x-2">
                                <input
                                type="text"
                                name="item"
                                value={item.item}
                                onChange={(e) => handleInputChange(index, e)}
                                placeholder="Item Name"
                                className="border border-gray-300 p-2"
                                />
                                <input
                                type="number"
                                name="numberOfItems"
                                value={item.numberOfItems}
                                onChange={(e) => handleInputChange(index, e)}
                                placeholder="Item Quantity"
                                className="border border-gray-300 p-2"
                                />
                            </div>
                            ))}
                        </form>
                        <div className="flex gap-2 flex-wrap">
                            <button onClick={addRow} className="bg-blue-500 text-white w-[30px] h-[30px] items-center rounded-full mt-2">
                                +
                            </button>
                            <button onClick={removeRow} className="bg-blue-500  w-[30px] h-[30px] items-center text-white rounded-full mt-2">
                                -
                            </button>
                        </div>
                    </section>
                )
            }

        </section>
    )
}