import React from 'react';

function PartnerFirst() {
    return (
        <div className="flex justify-left items-center min-h-screen bg-gray-100">
            <div className="w-full md:w-1/2 lg:w-1/2 p-8">
                <h1 className="text-2xl font-semibold mb-4" style={{ color: '#4DB7FE' }}>
                    Same day delivery
                    Enable your store to get anything delivered, same day
                </h1>
                <form className="bg-white rounded-lg shadow-md p-6">
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="storeName">Store Name</label>
                        <input
                            id="storeName"
                            name="storeName"
                            type="text"
                            className="border border-gray-300 rounded-md px-3 py-4 w-full focus:outline-none focus:ring focus:border-blue-500"
                            placeholder="Home Again Furniture"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="fullname">Fullname</label>
                        <input
                            id="fullname"
                            name="fullname"
                            type="text"
                            className="border border-gray-300 rounded-md px-3 py-4 w-full focus:outline-none focus:ring focus:border-blue-500"
                            placeholder="Enter Fullname"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="mobile">Phone Number</label>
                        <input
                            id="mobile"
                            name="mobile"
                            type="tel"
                            className="border border-gray-300 rounded-md px-3 py-4 w-full focus:outline-none focus:ring focus:border-blue-500"
                            placeholder="Enter Phone Number"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="storeAddress">Store Address</label>
                        <input
                            id="storeAddress"
                            name="storeAddress"
                            type="text"
                            className="border border-gray-300 rounded-md px-3 py-4 w-full focus:outline-none focus:ring focus:border-blue-500"
                            placeholder="Destination, Area, Street"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="deliveryNeeds">Anything Else</label>
                        <textarea
                            id="deliveryNeeds"
                            name="deliveryNeeds"
                            className="border border-gray-300 rounded-md px-3 py-4 w-full h-32 focus:outline-none focus:ring focus:border-blue-500"
                            placeholder="Tell us about your delivery needs"
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

export default PartnerFirst;
