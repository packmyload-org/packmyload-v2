"use client"
import LocationServiceForm from "@/components/book_a_move_comp/LocationServiceForm"
import Link from 'next/link'
export default function Location_Details(){

    return (
        <section className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 mx-auto gap-4 mt-10">
                {/* Your items go here */}
                <div className="p-5">
                    <LocationServiceForm title={"Your Start Location"} location={"Location"} />
                </div>
                <div className="p-5">
                    <LocationServiceForm title={"Your End Location"} location={"Location"} />
                </div>
            </div>
            <Link href={"/book_a_move/checkout"}>
                <div
                className='bg-blue-600 mx-auto w-[120px] text-center mb-2 font-bold text-md text-gray-600 hover:text-gray-100 hover:bg-blue-300 p-2 rounded-lg'
                >
                    Proceed
                
                </div>
            </Link>
        </section>
    )
}