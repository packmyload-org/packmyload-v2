import { useBookingForm } from "@/context/BookingFormContext"

export const DisplayUpperFormDetails = () => {
  const {state}=useBookingForm()

 return (
   <div className="flex flex-wrap gap-3 h-[20vh] w-full ">
            <div className="m-auto flex flex-col gap-1 items-start">
              <label className="text-sm text-blue-300 font-medium" htmlFor="MovingFrom">Moving From </label>
              <p className="text-blue-300 text-lg font-black">{state.pickUp}</p>
            </div>
            <div className="m-auto flex flex-col gap-1 items-start">
              <label className="text-sm text-blue-300 font-medium" htmlFor="MovingTo">Moving To</label>
            <p className="text-blue-300 text-lg font-black">{state.destination}</p>

            </div>
            <div className="m-auto flex flex-col gap-1 items-start">
              <label className="text-sm text-blue-300 font-medium" htmlFor="MovingFrom">Date </label>
            <p className="text-blue-300 text-lg font-black">{state.moveDate}</p>
          </div>
          <div className="m-auto flex flex-col gap-1 items-start">
            <label className="text-sm text-blue-300 font-medium" htmlFor="MovingFrom">Time</label>
            <p className="text-blue-300 text-lg font-black">{state.moveTime}</p>
          </div>
        </div>
 )
}