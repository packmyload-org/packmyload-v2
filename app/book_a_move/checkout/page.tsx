"use client";
import { useBookingForm } from "@/context/BookingFormContext";
import { sumVolume } from "@/utils/helpers";
import { MapPin, CalendarCheck, Truck, CurrencyNgn } from "@phosphor-icons/react";
import { Table, Col } from "antd";
import { useState } from "react";
export default function Checkout() {
    const {state}=useBookingForm()
    const [currentPage, setCurrentPage] = useState(1);
    const columns = [
  {
    title: 'Items',
    dataIndex: 'item',
    key: 'item',
  },
  {
    title: 'Qty',
    dataIndex: 'numberOfItems',
    key: 'numberOfItems',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
    ];

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };

  const pagination = {
    current: currentPage,
    pageSize: 5, 
    total: state.items.length,
    onChange: handleChangePage,
  };
    const volume = sumVolume(state.items)
    return(
        <>
            <div className="grid grid-cols-1 md:p-0 p-4 md:grid-cols-2 max-w-6xl mx-auto gap-4 mt-8">
            {/* Section 1 */}
                <div className="bg-blue-200 p-6 mb-4 rounded-md shadow-md">
                    <h1 className="text-2xl font-bold">{state.firstName}{"'s "}Move</h1>
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
                            DropOff Location
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
                            {state.moveDate}
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
                    <div className="flex mt-3 justify-between">
                        <div className="text-base min-w-max mr-5">                   
                            Move Type
                        </div>
                        <div className="mt-1 text-sm">                   
                            {state.moveType}
                        </div>
                    </div>
                     <div className="flex mt-3 justify-between">
                        <div className="text-base min-w-max mr-5">                   
                            Distance (km)
                        </div>
                        <div className="mt-1 text-sm">                   
                            {state.distance}
                        </div>
                    </div>
                     <div className="flex mt-3 justify-between">
                        <div className="text-base min-w-max mr-5">                   
                            Volume (cubits)
                        </div>
                        <div className="mt-1 text-sm">                   
                            {volume}
                        </div>
                    </div>
                    <div className="flex mt-3 justify-between">
                        <div className="text-base min-w-max mr-5">                   
                            Your Team
                        </div>
                        <div className="mt-1 text-sm">                   
                            1 packer (s)   
                        </div>
                    </div>
                </div>
                {/* Section 2 */}
                <div className="bg-blue-200 p-6 mb-4 rounded-md shadow-md">
                    {/* Move Items Table */}

                    <div className="space-y-6 mt-3 pt-3 border-t-2 border-t-sky-50" />
                    <div className="flex" style={{width: 'fit-content'}}>
                        <CurrencyNgn size={28} color="#444646" weight="fill" />
                        <div className="ml-2 text-lg font-medium">                   
                        Price Breakdown
                        </div>
                    </div>

                    <div className="space-y-6 mt-3 pt-3 border-t-2 border-t-sky-50" />
                    <Table className="w-[90%] mx-auto min-h-[45vh]" dataSource={state.items} columns={columns} pagination={pagination}/>
                    

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

                <Col span={24} className="space-y-4">
                    <div className="flex w-full pt-3">
                        <input type="checkbox" name="accepted-terms" className="mr-3 w-4" />
                        <p className="text-sm text-gray-800">
                            Confirm that you read and accept our <span><a href="/terms" className="text-sm text-gray-800 underline">terms and conditions</a></span> policy.
                        </p>
                    </div>
                    <div className="flex flex-row-reverse w-full justify-evenly">
                    <button
                        className={`text-lg font-semibold text-white hover:bg-blue-800 px-4 py-2 rounded-md bg-blue-500`}
                    >
                        PROCEED TO CHECKOUT
                    </button>
                    <button
                        className={`text-lg font-semibold text-white hover:bg-blue-800 px-4 py-2 rounded-md bg-blue-500`}
                    >
                        MAIL ME MY QUOTE
                    </button>
                    </div>
                </Col>
                </div>
            </div>
        </>
    )
}