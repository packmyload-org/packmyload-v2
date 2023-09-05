import { useState } from "react";
import { Buildings, SquareHalf, Elevator, Car } from "@phosphor-icons/react";
import { serviceFor } from "@/utils/bookingService";
import { useBookingForm } from "@/context/BookingFormContext";
interface DetailsProps {
    title: string;
    location: string | React.ReactNode;
}
const LocationServiceForm: React.FC<DetailsProps> = ({ title, location}) => {

    const [activeButton, setActiveButton] = useState<string>('');
    const { state, dispatch } = useBookingForm()
     const handleFieldChange = (field: string, value: string) => {
    dispatch({ type: 'UPDATE_FIELD', field, value });
  };
    return (
        <div className="bg-blue-200 p-6 mb-4 rounded-md shadow-md">
            <p className="text-2xl font-bold text-gray-900">{title}</p><br />
            <p className="text-lg">{location}</p>
            <div className="flex items-center mt-10" style={{width: 'fit-content'}}>
                <div className="bg-slate-50 rounded-full p-2">
                    <Buildings size={32} color="#5bc7dc" />
                </div>
                <div className="ml-2 text-lg">                   
                    Building Type
                </div>
            </div>
            <select name="category" id="" className='w-full mt-3 p-3 px-0 border border-white rounded-md bg-slate-100 outline-none'>
               <option value="" hidden>Service For</option>
               {serviceFor.map(item => <option
                   value={item.label}
                   key={item.key}
                   onClick={()=>handleFieldChange('buildingType', item.label)}
                 >
                   {item.label}
                </option>)}
            </select>
            {/* <div className="flex justify-between mt-3" >
                <div className="flex items-center">
                    <div className="bg-slate-50 rounded-full p-2">
                        <SquareHalf size={32} color="#5bc7dc" />
                    </div>
                    <div className="ml-2 text-lg">                   
                        Apt. Unit
                    </div>
                </div>
                <div className="w-[55%] flex flex-col gap-1 items-start mt-2">
                    <input
                    type="text"
                    id='AptUnit'
                    placeholder="Apt. Unit"
                    className="w-full h-10 p-4 text-gray-500 rounded-md outline-none"
                    required
                    />
                </div>
            </div> */}
            <div className="flex justify-between mt-3" >
                <div className="flex items-center">
                    <div className="bg-slate-50 rounded-full p-2">
                        <Elevator size={32} color="#5bc7dc" />
                    </div>
                    <div className="ml-2 text-lg">                   
                        Floors
                    </div>
                </div>
                <div className="w-[55%] flex flex-col gap-1 items-start mt-2">
                    <input
                    type="text"
                    id='floors'
                    placeholder="#"
                    className="w-full h-10 p-4 text-gray-500 rounded-md outline-none"
                        min={0}
                        onChange={(e) => handleFieldChange(e.target.id, e.target.value)}
                        value={state.floors}
                    required
                    />
                </div>
            </div>
            <div className="flex justify-between mt-3" >
                <div className="flex items-center">
                    <div className="bg-slate-50 rounded-full p-2">
                        <Car size={32} color="#5bc7dc" />
                    </div>
                    <div className="ml-2 text-lg">                   
                        Parking
                    </div>
                </div>
                <div className="w-[55%] flex justify-between gap-1 items-start mt-2">
                    <button
                            className={`w-[45%] px-4 py-2 rounded-md transition-colors duration-300 ${activeButton === 'yes' ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'}`}
                        onClick={() => { setActiveButton('yes'); {title.includes('Start') ? handleFieldChange('parkingStart', "Yes") : handleFieldChange('parkingEnd', "Yes")}}}
                        >
                            Yes
                        </button>
                        <button
                            className={`w-[45%] px-4 py-2 rounded-md transition-colors duration-300 ${activeButton === 'no' ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'}`}
                        onClick={() => { setActiveButton('no'); {title.includes('Start') ? handleFieldChange('parkingStart', "No") : handleFieldChange('parkingEnd', "No")}}}
                        >
                            No
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LocationServiceForm