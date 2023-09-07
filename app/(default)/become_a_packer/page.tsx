'use client'
// import { message } from 'antd';
import React, { ChangeEvent, useState } from 'react';

function PartnerPage() {
    const [data, setData] = useState({
        fullName: '',
        mobileNumber: '',
        location: '',
        dob:''
    })
   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent default form submission behavior

        if (!(data.dob || data.fullName || data.location || data.mobileNumber)) {
            alert('Oops, fill the form');
            return;
        }

        const res = await fetch('api/packer',
            {
                method: 'POST',
                body: JSON.stringify(data)
            })
        if (res.ok) {
           alert('application successful')
        }
    }
    return (
        <div className="flex justify-left min-h-screen bg-gray-100 mt-20">
            <div className="w-full md:w-1/2 lg:w-1/2 p-8">
                <h1 className="text-2xl font-semibold mb-4" style={{ color: '#4DB7FE' }}>
                    <span className='text-slate-600'>Earn money with your truck</span> <br />
                    Be active, meet new people &amp; make up to ₦200,000/week!
                </h1>
                <form className="bg-white rounded-lg shadow-md p-6" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="fullname">Fullname</label>
                        <input
                            id="fullname"
                            name="fullName"
                            type="text"
                            className="border border-gray-300 rounded-md px-3 py-4 w-full focus:outline-none focus:ring focus:border-blue-500"
                            placeholder="Enter Your Name"
                            required
                            onChange={(e:ChangeEvent<HTMLInputElement>) => setData({...data, fullName: e.target.value})}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="mobile">Mobile Number</label>
                        <input
                            id="mobile"
                            name="mobileNumber"
                            type="tel"
                            className="border border-gray-300 rounded-md px-3 py-4 w-full focus:outline-none focus:ring focus:border-blue-500"
                            placeholder="Enter Mobile Number"
                            required
                              onChange={(e:ChangeEvent<HTMLInputElement>) => setData({...data, mobileNumber: e.target.value})}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="location">Location</label>
                        <input
                            id="location"
                            name="location"
                            type="text"
                            className="border border-gray-300 rounded-md px-3 py-4 w-full focus:outline-none focus:ring focus:border-blue-500"
                            placeholder="Enter Location"
                            required
                            onChange={(e:ChangeEvent<HTMLInputElement>) => setData({...data, location: e.target.value})}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="dob">Date of Birth</label>
                        <input
                            id="dob"
                            name="dob"
                            type="date"
                            className="border border-gray-300 rounded-md px-3 py-4 w-full focus:outline-none focus:ring focus:border-blue-500"
                            required
                            onChange={(e:ChangeEvent<HTMLInputElement>) => setData({...data, dob: e.target.value})}
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700"
                    >
                        Sign me up
                    </button>
                </form>
            </div>
        </div>
    );
}

export default PartnerPage;
