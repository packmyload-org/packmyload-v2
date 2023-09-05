"use client";
import { useBookingForm } from "@/context/BookingFormContext";
import { MapPin, CalendarCheck, Truck, CurrencyNgn } from "@phosphor-icons/react";
import { Table } from "antd";
export default function Checkout() {
    const {state}=useBookingForm()
    console.log(state.distance)
    return(
        <>
            <div className="grid grid-cols-1 md:p-0 p-4 md:grid-cols-2 max-w-6xl mx-auto gap-4 mt-8">
            {/* Section 1 */}
                <div className="bg-blue-200 p-6 mb-4 rounded-md shadow-md">
                    <h1 className="text-2xl font-bold">{state.fullName}{"'s "}Move</h1>
                    <div className="flex mt-8" style={{width: 'fit-content'}}>
                        <MapPin size={25} color="#444646" weight="fill" />
                        <div className="ml-2 text-lg font-medium">                   
                            Locations
                        </div>
                    </div>

                    <div className="space-y-6 mt-3 pt-3 border-t-2 border-t-sky-50" />

                    <div className="flex justify-between">
                        <div className="text-base min-w-max mr-5">                   
                            Pickup Location
                        </div>
                        <div className="mt-1 text-sm">                   
                            {state.pickUp}
                        </div>
                    </div>
                    <div className="flex mt-2 justify-between">
                        <div className="text-base min-w-max mr-5">                   
                            Dropoff Location
                        </div>
                        <div className="mt-1 text-sm">                   
                            {state.destination}
                        </div>
                    </div>

                    <div className="space-y-6 mt-3 pt-3 border-t-2 border-t-sky-50" />

                    <div className="flex mt-2" style={{width: 'fit-content'}}>
                        <CalendarCheck size={27} color="#444646" />
                        <div className="ml-2 text-lg font-medium">                   
                            Time & Date
                        </div>
                    </div>

                    <div className="space-y-6 mt-3 pt-3 border-t-2 border-t-sky-50" />

                    <div className="flex justify-between">
                        <div className="text-base min-w-max mr-5">                   
                            Date
                        </div>
                        <div className="mt-1 text-sm">                   
                            {state.MovingOn}
                        </div>
                    </div>
                    <div className="flex mt-2 justify-between">
                        <div className="text-base min-w-max mr-5">                   
                            Time
                        </div>
                        <div className="mt-1 text-sm">                   
                            {state.moveTime}
                        </div>
                    </div>
                    <div className="space-y-6 mt-3 pt-3 border-t-2 border-t-sky-50" />

                    <div className="flex mt-2" style={{width: 'fit-content'}}>
                        <Truck size={27} color="#444646" weight="fill" />
                        <div className="ml-2 text-lg font-medium ">                   
                            Move Summary
                        </div>
                    </div>

                    <div className="space-y-6 mt-3 pt-3 border-t-2 border-t-sky-50" />

                    <div className="flex justify-between">
                        <div className="text-base min-w-max mr-5">                   
                            Service
                        </div>
                        <div className="mt-1 text-sm">                   
                            {state.service}
                        </div>
                    </div>
                    <div className="flex mt-2 justify-between">
                        <div className="text-base min-w-max mr-5">                   
                            Move Type
                        </div>
                        <div className="mt-1 text-sm">                   
                            {state.moveType}
                        </div>
                    </div>
                </div>
                {/* Section 2 */}
                <div className="bg-blue-200 p-6 mb-4 rounded-md shadow-md">
                    {/* Move Items Table */}

                    <Table className="w-[90%] mx-auto" dataSource={state.items} />
                    <div className="space-y-6 mt-3 pt-3 border-t-2 border-t-sky-50" />
                    <div className="flex" style={{width: 'fit-content'}}>
                        <CurrencyNgn size={28} color="#444646" weight="fill" />
                        <div className="ml-2 text-lg font-medium">                   
                        Price Breakdown
                        </div>
                    </div>

                    <div className="space-y-6 mt-3 pt-3 border-t-2 border-t-sky-50" />
                    
                    <div className="flex justify-between">
                        <div className="text-base min-w-max mr-5">                   
                            Distance (km)
                        </div>
                        <div className="mt-1 text-sm">                   
                            {state.distance}
                        </div>
                    </div>
                     <div className="flex justify-between">
                        <div className="text-base min-w-max mr-5">                   
                            Volume (km)
                        </div>
                        <div className="mt-1 text-sm">                   
                            {/* {state.volume} */}
                        </div>
                    </div>
                    <div className="flex mt-2 justify-between">
                        <div className="text-base min-w-max mr-5">                   
                            Your Team
                        </div>
                        <div className="mt-1 text-sm">                   
                            1 packer (s)   
                        </div>
                    </div>

                    <div className="space-y-6 mt-3 pt-3 border-t-2 border-t-sky-50" />

                    <div className="flex mt-2 justify-between">
                        <div className="text-base">                   
                            Taxes
                        </div>
                        <div className="mt-1 text-sm flex">                   
                            <CurrencyNgn size={20} color="#444646" /> 0.00    
                        </div>
                    </div>
                    <div className="flex mt-2 justify-between">
                        <div className="text-base">                   
                            Total
                        </div>
                        <div className="mt-1 text-sm flex">                   
                            <CurrencyNgn size={20} color="#444646" /> 0.00    
                        </div>
                    </div>

                    <div className="space-y-6 mt-3 pt-3 border-t-2 border-t-sky-50" />

                    <button
                        className={`text-white hover:text-gray-400 px-4 py-2 rounded-md bg-blue-500`}
                    >
                        Continue
                    </button>
                </div>
            </div>
        </>
    )
}