import React from 'react';

function PartnerPage() {
    return (
        <div className="flex justify-left min-h-screen bg-gray-100 mt-20">
            <div className="w-full md:w-1/2 lg:w-1/2 p-8 max-h-[85vh] overflow-y-scroll scrollbar-hide">
                <h1 className="text-2xl font-semibold mb-4" style={{ color: '#4DB7FE' }}>
                    <span className='text-slate-600'>Same day delivery</span> <br />
                    Enable your store to get anything delivered, same day
                </h1>
                <div className="space-y-6 pt-8 border-t-2 border-t-slate-100" />
                <form className="bg-white rounded-lg">
                    <div className="mb-8">
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="storename">Store Name *</label>
                        <input
                            id="storename"
                            name="storename"
                            type="text"
                            className="border border-gray-300 bg-neutral-100 outline outline-offset-2 outline-slate-200 mt-3 rounded-md px-3 py-4 w-full focus:outline-none focus:ring focus:border-blue-500"
                            placeholder="Home Again Furniture"
                            required
                        />
                    </div>
                    <div className="mb-8">
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="fullname">Full Name *</label>
                        <input
                            id="fullname"
                            name="fullname"
                            type="text"
                            className="border border-gray-300 bg-neutral-100 outline outline-offset-2 outline-slate-200 mt-3 rounded-md px-3 py-4 w-full focus:outline-none focus:ring focus:border-blue-500"
                            placeholder="John Doe"
                            required
                        />
                    </div>
                    <div className="mb-8">
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Email Address *</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className="border border-gray-300 bg-neutral-100 outline outline-offset-2 outline-slate-200 mt-3 rounded-md px-3 py-4 w-full focus:outline-none focus:ring focus:border-blue-500"
                            placeholder="Johndoe@mail.com"
                            required
                        />
                    </div>
                    <div className="mb-8">
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="mobile">Phone Number</label>
                        <input
                            id="mobile"
                            name="mobile"
                            type="tel"
                            className="border border-gray-300 bg-neutral-100 outline outline-offset-2 outline-slate-200 mt-3 rounded-md px-3 py-4 w-full focus:outline-none focus:ring focus:border-blue-500"
                            placeholder="(070)-7273-27-26)"
                            required
                        />
                    </div>
                    <div className="mb-8">
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="location">Store Address *</label>
                        <input
                            id="location"
                            name="location"
                            type="text"
                            className="border border-gray-300 bg-neutral-100 outline outline-offset-2 outline-slate-200 mt-3 rounded-md px-3 py-4 w-full focus:outline-none focus:ring focus:border-blue-500"
                            placeholder="Destination, Area, Street"
                            required
                        />
                    </div>
                    <div className="mb-8">
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="others">Anything Else</label>
                        <textarea
                            id="others"
                            name="others"
                            placeholder='Tell us about your delivery needs'
                            className="border border-gray-300 bg-neutral-100 outline outline-offset-2 outline-slate-200 mt-3 rounded-md px-3 h-52 py-4 w-full focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-400 w-32 h-14 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700"
                    >
                        Sign me up
                    </button>
                </form>
            </div>
            <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-1/2 bg-[url('https://storage.prompt-hunt.workers.dev/cc21c6f2-9f26-4b1e-8ede-04597b9bba15')]"></div>
        </div>
    );
}

export default PartnerPage;
