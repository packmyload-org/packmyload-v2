"use client";
import { useBookingForm } from "@/context/BookingFormContext";
import { calculateTax, sumItemPrices, sumVolume } from "@/utils/helpers";
import { MapPin, CalendarCheck, Truck, CurrencyNgn } from "@phosphor-icons/react";
import { Table, Col, Spin } from "antd";
import { useEffect, useState } from "react";
import { redirect, useRouter } from 'next/navigation';
const BookingLayout = dynamic(() => import('../BookingLayout'), {
  loading: () => <Loading/>,
});
import { alerts } from "@/components/alerts/Alert";
import dynamic from "next/dynamic";
import Loading from '@/app/loading';
import { CustomModal } from "@/components/modals/CustomModal";

export default function Checkout() {
    const {state, dispatch}=useBookingForm()
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading]= useState(false)
    const columns = [
  {
    title: 'Description ',
    dataIndex: 'desc',
    key: 'desc',
  },
  {
    title: 'Rate',
    dataIndex: 'rate',
    key: 'rate',
  },
 ];

//   const handleChangePage = (page: number) => {
//     setCurrentPage(page);
//     };
    const handleFieldChange = (field: string, value: boolean) => {
    dispatch({ type: 'UPDATE_FIELD', field, value });
    };
    const router= useRouter()

//   const pagination = {
//     current: currentPage,
//     pageSize: 5, 
//     total: state.items.length,
//     onChange: handleChangePage,
// };
    const volume = sumVolume(state.items.map(item => ({ ...item, volume: item.volume || 0 })));
    
    useEffect(() => {
        if (
            state.buildingTypeEnd === '' ||
            state.buildingTypeStart === '' ||
            state.firstName === '' ||
            state.lastName === '' ||
            state.destination === '' ||
            state.email === '' ||
            state.service === '' ||
            state.moveDate === '' ||
            state.moveTime === '' ||
            state.pickUp === ''
        ){
            return redirect('/book/locations-details')
        }
    })
    
    const priceString = state.totalPrice
    let price = Number(priceString.split(',').join(''));
    const truckPercentage = 50; // 50%
    const servicePercentage = 30; // 30%
    const truck = Math.round((price * truckPercentage) / 100);
    const service = Math.round((price * servicePercentage) / 100);
    const materialsPercentage = 100 - truckPercentage - servicePercentage; // Remaining percentage
    const materials = Math.round(price * (materialsPercentage / 100)); 
    const tax = calculateTax(price)
    const total = (price + tax)
    const data = {
        firstName: state.firstName,
        lastName: state.lastName,
        email: state.email,
        phoneNumber: state.phoneNumber,
        countryCode: state.countryCode,
        destination: state.destination,
        pickUp: state.pickUp,
        contactBy: state.contactBy,
        service: state.service,
        moveDate: state.moveDate,
        moveTime: state.moveTime,
        items: state.items,
        buildingTypeStart: state.buildingTypeStart,
        buildingTypeEnd: state.buildingTypeEnd,
        distance: state.distance,
        volume: volume,
        totalPrice: total,
    }
    const [displayModal,setDisplayModal]= useState(false)
    const handleMailQuote = async() => { 
        if (!state.acceptedTerms) {
            return alerts.error('Invalid Submission', 'Please accept our terms and conditions')
        } 
        setLoading(true)
        try {
            const res = await fetch('/api/booking', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(data)
            })
            if (res.ok) {
                setDisplayModal(true)
                setLoading(false)
                return;
            }
            alerts.error('Error', 'Oops! something went wrong. Unable to mail this email.')
            return;
            
        } catch (error: any) {
            console.error(error)
            alerts.error('Error', error.message)
        }
    }
    const handlePaymentGateway = async() => { 
         if (!state.acceptedTerms) {
             return alerts.error('Invalid Submission', 'Please accept our terms and conditions')
        }
        setLoading(true)
        try {
            const res = await fetch('/api/booking/payment', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(data)
            })
            if (res.ok) {
                setLoading(false)
                const data = await res.json()
                const { authorization_url } = data.data
                window.location.href = authorization_url;
                localStorage.clear()
                return;
            }
        } catch (error: any) {
            alerts.error('Error', 'Oops! something went wrong. Please reach out to customer care.')
            console.error(error)
        }
    }
const rightContent=(
    <div className="w-[90%] mx-auto relative">
                {/* Section 1 */}
                <Spin spinning={loading} delay={500} size="large">
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
                        <div className="mt-1 text-sm w-[85%] mx-3">                   
                            {state.pickUp}
                        </div>
                    </div>
                    <div className="flex mt-2 justify-between">
                        <div className="text-base min-w-max mr-5">                   
                            DropOff Location
                        </div>
                        <div className="mt-1 text-sm w-[85%]">                   
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
                            size
                        </div>
                        <div className="mt-1 text-sm">                   
                          {state.size}  ft²
                        </div>
                    </div>
                </div>
        </Spin>
        {/* Section 2 */}
        <Spin spinning={loading} delay={500} size="large">   
                <div className="bg-blue-200 p-6 mb-4 rounded-md shadow-md mt-4">
                <div className="flex mt-3 justify-between">
                        <div className="text-base min-w-max mr-5">                   
                            Movers
                        </div>
                        <div className="mt-1 text-sm">                   
                          {state.movers}
                        </div>
                    </div>
                    {/* Move Items Table */}

                    <div className="space-y-6 mt-3 pt-3 border-t-2 border-t-sky-50" />
                    <div className="flex" style={{width: 'fit-content'}}>
                        <CurrencyNgn size={28} color="#444646" weight="fill" />
                        <div className="ml-2 text-lg font-medium">                   
                        Price Breakdown
                        </div>
                    </div>

                    <div className="space-y-6 mt-3 pt-3 border-t-2 border-t-sky-50" />
                    <Table className="w-[90%] mx-auto min-h-auto" dataSource={[{desc:'Truck Rental', rate:`${truck}`},{desc:'Moving Materials', rate:`${materials} (boxes, wrapping materials e.t.c)`},{desc:'Service Charge', rate:`${service}`}]} columns={columns} pagination={false} />
                    

                    <div className="space-y-6 mt-3 pt-3 border-t-2 border-t-sky-50" />

                    <div className="flex mt-2 justify-between">
                        <div className="text-base">                   
                            Taxes
                        </div>
                        <div className="mt-1 text-sm flex">                   
                            <CurrencyNgn size={20} color="#444646" /> {tax}   
                        </div>
                    </div>
                    <div className="flex mt-2 justify-between">
                        <div className="text-base">                   
                            Sum Total
                        </div> 
                        <div className="mt-1 text-sm flex">                   
                    <CurrencyNgn size={20} color="#444646" /> {total}  
                        </div>
                    </div>

                    <div className="space-y-6 mt-3 pt-3 border-t-2 border-t-sky-50" />

                <Col span={24} className="space-y-4">
                    <div className="flex w-full pt-3">
                    <input
                        type="checkbox"
                        name="acceptedTerms"
                        className="mr-3 w-4"
                        checked={state.acceptedTerms}
                        onChange={(e) => {
                            const { name, checked } = e.target;
                            handleFieldChange(name, checked);
                                }}
                    />
                        <p className="text-sm text-gray-800">
                            Confirm that you read and accept our <span><a href="/terms" className="text-sm text-gray-800 underline">terms and conditions</a></span> policy.
                        </p>
                    </div>
                    <div className="flex flex-row-reverse w-full justify-evenly gap-2">
                    <button
                        className={`text-sm md:text-md font-semibold text-white  hover:bg-white hover:text-blue-300 px-4 py-2 rounded-md bg-blue-500`}
                        onClick={handlePaymentGateway}
                    >
                        PROCEED TO CHECKOUT
                    </button>
                    <button
                        className={`text-sm md:text-md font-semibold text-white hover:bg-white hover:text-blue-300 px-4 py-2 rounded-md bg-blue-500`}
                        onClick={handleMailQuote}
                    >
                        MAIL ME MY QUOTE
                    </button>
                    </div>
                </Col>
        
                 </div>
            </Spin>
            <CustomModal 
                displayModal={displayModal}
                setDisplayModal={setDisplayModal}
                />
            </div>
       
    )
    const leftContent = (
        <div className="hidden md:block p-1 lg:px-4 my-auto h-[45vh] w-full checkout-bg">
        
        </div>
    )
    return <BookingLayout
                stepDescription="Finalize your move"
                leftContent={leftContent}
                rightContent={rightContent}/>
}