"use client"
import LocationServiceForm from "@/components/book_a_move_comp/LocationServiceForm"

export default function Location_Details(){

    return (
        <>
         <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto gap-4 mt-10">
            {/* Your items go here */}
            <div className="p-5">
                <LocationServiceForm title={"Your Start Location"} location={"Location"} />
            </div>
            <div className="p-5">
                <LocationServiceForm title={"Your End Location"} location={"Location"} />
            </div>
        </div>
        </>
    )
}