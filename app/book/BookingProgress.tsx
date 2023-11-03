"use client"
import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { useBookingForm } from "@/context/BookingFormContext"

type progressLinks = Array<{
    id: number,
    to: string,
    disabled: boolean
}>

const bookingUrls = ["/book","/book/rooms","/book/items","/book/location-details","/book/checkout"]

const originalLinks: progressLinks = [
    {
        id: 1,
        to: "/book",
        disabled: false
    }, 
    {
        id: 2,
        to: "/book/rooms",
        disabled: true
    },
    {
        id: 3,
        to: "/book/items",
        disabled: true
    },
    {
        id: 4,
        to: "/book/locations-details",
        disabled: true
    },
    {
        id: 5,
        to: "/book/checkout",
        disabled: true
    }
]
export const BookingProgress: React.FC = () => {

    const router = useRouter()
    const pathName = usePathname()

    const {state} = useBookingForm()

    const [progressLinks, setProgressLinks] = useState<progressLinks>([...originalLinks])

    const handleProgress = (linkIndex: number) => {
        setProgressLinks((initialProgress ): progressLinks => {
            return initialProgress.map((link,index) => {
                if(index === linkIndex){
                    return {...link, disabled: false}
                }
                return link
            })
        } )
    }

    useEffect(() => {
        if([state.firstName !== '', state.lastName !== '', state.email !== '',state.pickUp !== '',state.destination !== '', state.phoneNumber !== ''].every(Boolean)){
            handleProgress(1);
        }
        if(state.rooms.length){
            handleProgress(2);
        }
        if(state.items.length){
            handleProgress(3);
        }
        if(state.buildingTypeStart !== '' && state.buildingTypeEnd !== ''){
            handleProgress(4);
        }

        if(!bookingUrls.includes(pathName)){
            return () => {
                setProgressLinks(() => originalLinks)
            }
        }

    },[pathName])

    return (
        <div className="flex gap-2 flex-wrap">
            {progressLinks.map(step => (
                <button 
                    key={step.id}
                    className={
                        `w-[40px] cursor-pointer h-[8px] rounded-md ${!step.disabled ? 'bg-blue-300' : 'bg-slate-300'}`
                    }
                    onClick={() => router.push(step.to)}
                    disabled = {step.disabled}
                />
            ))}
        </div>
    )
}