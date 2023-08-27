'use client'
import { AutoCompleteInput } from '@/components/AutoCompleteInput';
import Map from '@/components/Map';
import Alert from '@/components/alert/Alert';
import { useGoogleMaps } from '@/context/GoogleMapsContext';
import { useInputContext } from '@/context/InputContext';
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Loading from '../loading';
interface PartnerData {
    emailAddress: string,
    storeAddress: string,
    mobileNumber: string,
    storeName: string,
    reason: string,
    fullName: string
}
function PartnerPage() {
   const [data, setData] = useState<PartnerData>({
    storeName: '',
    fullName: '',
    emailAddress: '',
    mobileNumber: '',
    storeAddress: '',
    reason: '',
   });
    const { inputValue } = useInputContext();
    const{isLoaded}=useGoogleMaps()
     const [showAlert, setShowAlert] = useState(false);
    const [alertContent, setAlertContent] = useState('');
    const [loading, setLoading] = useState(false)
    const [scriptLoaded,setScriptLoaded]=useState(false)
    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let obj = {
            ...data
        };

        if (!data.storeAddress) {
            obj['storeAddress'] = inputValue;
        }

        if (!data.storeName || !data.fullName || !data.emailAddress || !data.mobileNumber || !data.storeAddress) {
            let content = 'Please fill out all required fields.';
            setAlertContent(content);
            setShowAlert(true);
            return
        }
        setShowAlert(!true);
        console.log('Form data to be submitted:', data);
        setLoading(true)
        const res = await fetch('api/partner', {
            method: 'POST',
            body: JSON.stringify(obj)
        });

        if (res.ok) {
            let content = 'Application successful.';
            setAlertContent(content);
            setShowAlert(true);
        }
        setLoading(false)
        setShowAlert(false)
    };

    useEffect(() => {
    if (!isLoaded) {
      setScriptLoaded(!scriptLoaded)
        }
      setScriptLoaded(false)
    }, [])
    
    if (scriptLoaded) {
        return <Loading/>
    }

    return (
        <div className="flex justify-left min-h-screen bg-gray-100 mt-20">
            <div className="w-full md:w-1/2 lg:w-1/2 p-8 max-h-[85vh] overflow-y-scroll scrollbar-hide">
                <h1 className="text-2xl font-semibold mb-4" style={{ color: '#4DB7FE' }}>
                    <span className='text-slate-600'>Same day delivery</span> <br />
                    Enable your store to get anything delivered, same day
                </h1>
                <div className="space-y-6 pt-8 border-t-2 border-t-slate-100" />
                <form className="bg-white rounded-lg" onSubmit={handleSubmit}>
                    <div className="mb-8">
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="storename">Store Name *</label>
                        <input
                            id="storename"
                            name="storeName"
                            type="text"
                            className="border border-gray-300 bg-neutral-100 outline outline-offset-2 outline-slate-200 mt-3 rounded-md px-3 py-4 w-full focus:outline-none focus:ring focus:border-blue-500"
                            placeholder="Home Again Furniture"
                        
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-8">
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="fullname">Full Name *</label>
                        <input
                            id="fullname"
                            name="fullName"
                            type="text"
                            className="border border-gray-300 bg-neutral-100 outline outline-offset-2 outline-slate-200 mt-3 rounded-md px-3 py-4 w-full focus:outline-none focus:ring focus:border-blue-500"
                            placeholder="John Doe"
                        
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-8">
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Email Address *</label>
                        <input
                            id="email"
                            name="emailAddress"
                            type="email"
                            className="border border-gray-300 bg-neutral-100 outline outline-offset-2 outline-slate-200 mt-3 rounded-md px-3 py-4 w-full focus:outline-none focus:ring focus:border-blue-500"
                            placeholder="Johndoe@mail.com"
                        
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-8">
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="mobile">Phone Number</label>
                        <input
                            id="mobile"
                            name="mobileNumber"
                            type="tel"
                            className="border border-gray-300 bg-neutral-100 outline outline-offset-2 outline-slate-200 mt-3 rounded-md px-3 py-4 w-full focus:outline-none focus:ring focus:border-blue-500"
                            placeholder="(070)-7273-27-26)"
                        
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-8">
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="location">Store Address *</label>

                        <AutoCompleteInput
                            inputName='storeAddress'
                            type='text'
                            inputStyle="border border-gray-300 bg-neutral-100 outline outline-offset-2 outline-slate-200 mt-3 rounded-md px-3 py-4 w-full focus:outline-none focus:ring focus:border-blue-500"
                            placeholder="Destination, Area, Street"
                        />
                    </div>
                    <div className="mb-8">
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="others">Anything Else</label>
                        <textarea
                            id="others"
                            name="reason"
                            placeholder='Tell us about your delivery needs'
                            className="border border-gray-300 bg-neutral-100 outline outline-offset-2 outline-slate-200 mt-3 rounded-md px-3 h-52 py-4 w-full focus:outline-none focus:ring focus:border-blue-500"
                            onChange={handleInputChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-400 w-32 h-14 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700 cursor-pointer"
                        disabled={loading}
                    >
                        {loading ? "loading...": "Sign me up"}
                    </button>
                </form>
                {showAlert && <Alert content={alertContent} /> }
            </div>
            <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-1/2">
                <Map/>
            </div>
        </div>
    );
}

export default PartnerPage;
