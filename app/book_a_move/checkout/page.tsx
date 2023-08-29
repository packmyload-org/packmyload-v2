"use client";
import { MapPin, CalendarCheck, Truck, CurrencyNgn } from "@phosphor-icons/react";
export default function Checkout(){
    return(
        <>
            <div className="grid grid-cols-1 md:p-0 p-4 md:grid-cols-2 max-w-6xl mx-auto gap-4 mt-8">
            {/* Section 1 */}
                <div className="bg-blue-200 p-6 mb-4 rounded-md shadow-md">
                    <h1 className="text-2xl font-bold">Your Move</h1>
                    <div className="flex mt-8" style={{width: 'fit-content'}}>
                        <MapPin size={25} color="#444646" weight="fill" />
                        <div className="ml-2 text-lg font-medium">                   
                            Locations
                        </div>
                    </div>

                    <div className="space-y-6 mt-3 pt-3 border-t-2 border-t-sky-50" />

                    <div className="flex justify-between">
                        <div className="text-base">                   
                            Pickup Location
                        </div>
                        <div className="mt-1 text-sm">                   
                            6301 Silver Dart Drive, Mississauga, ON
                        </div>
                    </div>
                    <div className="flex mt-2 justify-between">
                        <div className="text-base">                   
                            Dropoff Location
                        </div>
                        <div className="mt-1 text-sm">                   
                            6301 Silver Dart Drive, Mississauga, ON
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
                        <div className="text-base">                   
                            Date
                        </div>
                        <div className="mt-1 text-sm">                   
                            19/08/2023
                        </div>
                    </div>
                    <div className="flex mt-2 justify-between">
                        <div className="text-base">                   
                            Time
                        </div>
                        <div className="mt-1 text-sm">                   
                            8:00:00 PM
                        </div>
                    </div>
                    <div className="space-y-6 mt-3 pt-3 border-t-2 border-t-sky-50" />

                    <div className="flex mt-2" style={{width: 'fit-content'}}>
                        <Truck size={27} color="#444646" weight="fill" />
                        <div className="ml-2 text-lg font-medium">                   
                            Move Type
                        </div>
                    </div>

                    <div className="space-y-6 mt-3 pt-3 border-t-2 border-t-sky-50" />

                    <div className="flex justify-between">
                        <div className="text-base">                   
                            Move Type
                        </div>
                        <div className="mt-1 text-sm">                   
                            Small moves & furniture delivery
                        </div>
                    </div>
                    <div className="flex mt-2 justify-between">
                        <div className="text-base">                   
                            My Items
                        </div>
                        <div className="mt-1 text-sm">                   
                            1 Bed Frame
                        </div>
                    </div>
                </div>
                {/* Section 2 */}
                <div className="bg-blue-200 p-6 mb-4 rounded-md shadow-md">
                    <div className="flex" style={{width: 'fit-content'}}>
                        <CurrencyNgn size={28} color="#444646" weight="fill" />
                        <div className="ml-2 text-lg font-medium font-medium">                   
                        Price Breakdown
                        </div>
                    </div>

                    <div className="space-y-6 mt-3 pt-3 border-t-2 border-t-sky-50" />
                    
                    <div className="flex justify-between">
                        <div className="text-base">                   
                            Distance (km)
                        </div>
                        <div className="mt-1 text-sm">                   
                            0.00
                        </div>
                    </div>
                    <div className="flex mt-2 justify-between">
                        <div className="text-base">                   
                            Volume
                        </div>
                        <div className="mt-1 text-sm">                   
                            Approx. 6 cubic feet    
                        </div>
                    </div>
                    <div className="flex mt-2 justify-between">
                        <div className="text-base">                   
                            Your Team
                        </div>
                        <div className="mt-1 text-sm">                   
                            1 Mates(s)   
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