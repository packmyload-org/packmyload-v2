import React from 'react';

function PartnerPage() {
    return (
        <div className="flex justify-left min-h-screen bg-gray-100 mt-20">
            <div className="w-full md:w-1/2 lg:w-1/2 p-8">
                <h1 className="text-2xl font-semibold mb-4" style={{ color: '#4DB7FE' }}>
                    <span className='text-slate-600'>Earn money with your truck</span> <br />
                    Be active, meet new people &amp; make up to ₦200,000/week!
                </h1>
                <form className="bg-white rounded-lg shadow-md p-6">
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="fullname">Fullname</label>
                        <input
                            id="fullname"
                            name="fullname"
                            type="text"
                            className="border border-gray-300 rounded-md px-3 py-4 w-full focus:outline-none focus:ring focus:border-blue-500"
                            placeholder="Enter Your Name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="mobile">Mobile Number</label>
                        <input
                            id="mobile"
                            name="mobile"
                            type="tel"
                            className="border border-gray-300 rounded-md px-3 py-4 w-full focus:outline-none focus:ring focus:border-blue-500"
                            placeholder="Enter Mobile Number"
                            required
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
