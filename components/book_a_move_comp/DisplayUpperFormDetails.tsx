import { useBookingForm } from "@/context/BookingFormContext"

export const DisplayUpperFormDetails = () => {
  const {state}=useBookingForm()

 return (
   <div className="grid grid-cols-1 gap-3 h-auto w-full ">
            <div className=" flex flex-col gap-1 items-start">
              <label className="text-xs text-blue-300 font-medium" htmlFor="MovingFrom">Moving From </label>
              <p className="text-blue-300 text-sm font-black">{state.pickUp}</p>
            </div>
            <div className=" flex flex-col gap-1 items-start">
              <label className="text-xs text-blue-300 font-medium" htmlFor="MovingTo">Moving To</label>
            <p className="text-blue-300 text-sm font-black">{state.destination}</p>

            </div>
            <div className='grid grid-cols-2'>
                <div className=" flex flex-col gap-1 items-start">
                  <label className="text-xs text-blue-300 font-medium" htmlFor="MovingFrom">Date </label>
                <p className="text-blue-300 text-sm font-black">{state.moveDate}</p>
              </div>
              <div className=" flex flex-col gap-1 items-start">
                <label className="text-xs text-blue-300 font-medium" htmlFor="MovingFrom">Time</label>
                <p className="text-blue-300 text-sm font-black">{state.moveTime}</p>
              </div>
            </div>
        </div>
 )
}