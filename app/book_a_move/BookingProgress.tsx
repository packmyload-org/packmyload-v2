"use client"
import { useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { useBookingForm } from "@/context/BookingFormContext"

const progressLinks = [
    {
        id: 1,
        to: "/book_a_move",
        disabled: false
    }, 
    {
        id: 2,
        to: "/book_a_move/items",
        disabled: true
    },
    {
        id: 3,
        to: "/book_a_move/location-details",
        disabled: true
    },
    {
        id: 4,
        to: "/book_a_move/checkout",
        disabled: true
    }
]
export const BookingProgress: React.FC = () => {

    const router = useRouter()
    const pathName = usePathname()

    const {state} = useBookingForm()

    useEffect(() => {
        if([state.firstName, state.lastName, state.email,state.pickUp,state.destination, state.phoneNumber].every(Boolean)){
            progressLinks.map(item => {
                if(item.id === 2){
                    return {...item, disabled: false}
                }
            })
        }
        if(state.items.length){
            progressLinks.map(item => {
                if(item.id === 3){
                    return {...item, disabled: false}
                }
            })
        }
        if(state.buildingType){
            progressLinks.map(item => {
                if(item.id === 4){
                    return {...item, disabled: false}
                }
            })
        }

    },[pathName])

    return (
        <div className="flex gap-2 flex-wrap">
            {progressLinks.map(step => (
                <button 
                    key={step.id}
                    className={
                        `w-[40px] h-[8px] rounded-md ${!step.disabled ? 'bg-blue-300' : 'bg-slate-300'}`
                    }
                    onClick={() => router.push(step.to)}
                    disabled = {step.disabled}
                />
            ))}
        </div>
    )
}