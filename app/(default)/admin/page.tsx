'use client'
import Link from "next/link";
import { useState , FormEvent} from "react";
import error from '@/public/images/icons/AlertError.svg';
import { set } from "mongoose";
import { alerts } from "@/components/alerts/Alert";
import { useRouter } from "next/navigation";

export default function SignIn() {
 const [otp, setOtp] = useState(false)
 const [data, setData] = useState({email:'', otp: ''})
 const [loading, setLoading] = useState(false)
 const router = useRouter()
 async function handleGenerateOTP(e: FormEvent) {
  e.preventDefault()
  try {
   setLoading(true)
   const res = await fetch('/api/auth/generate', {
    method: "POST",
    headers: {
    },
    body: JSON.stringify(data)
   })
   if (res.ok){
    setLoading(false)
    alerts.success('success', 'email successfully sent!')
    setOtp(true)
    return
   }
   setLoading(false)
   alerts.error('Error', "Invalid credentials")
   return
   } catch (error) {
   console.log('auth err==>', error)
   setLoading(false)
   alert('something went wrong!')
  }
 } 

 async function handleSignIn() {
   try {
   setLoading(true)
   const res = await fetch('/api/auth/signIn', {
    method: "POST",
    headers: {
     'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
   })
   if (res.ok){
    setLoading(false)
    setOtp(false)
    router.push('/admin/dashboard')
    return
   }
   setLoading(false)
   alerts.error('Error', "Invalid credentials")
   return
   } catch (error) {
   console.log('auth err==>', error)
   setLoading(false)
   alert('something went wrong!')
  }
 }
 return (
  <>
    <main className='mt-20 h-[80dvh] w-full'>
      <div className="w-full h-full ">
        {/* Content */}
            {/* <AuthHeader /> */}
            <div className="w-[80%] my-auto md:w-1/2 mx-auto h-full  px-4 py-8 flex flex-col justify-center">
              <h1 className="text-3xl text-blue-600  font-bold mb-6 text-center">
                {otp ? 'Almost There!' :"Welcome back! "} ✨
              </h1>
              {/* Form */}
              <form onSubmit={(e)=>handleGenerateOTP(e)}>
                <div className="space-y-4 w-[70%] mx-auto">
                  <div>
                    <label
                      className="block text-md font-medium mb-1"
                      htmlFor="email"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      className=" w-full mx-auto p-2 h-10 rounded-sm bg-sky-300 "
                     type="email"
                     onChange={(e)=>setData({...data, email: e.target.value})}
                    />
                  </div>
                {otp &&
                 <div>
                    <label
                      className="block text-md font-medium mb-1"
                      htmlFor="password"
                    >
                      OTP
                    </label>
                    <input
                      id="password"
                      className=" w-full mx-auto p-2 h-10 rounded-sm bg-sky-300"
                      type="password"
                      autoComplete="on"
                      onChange={(e)=>setData({...data, otp: e.target.value})}
                    />
                 </div>
                }
                </div>
                <div className="flex items-center justify-between mt-6">
                 
                 {otp ?  <button
               className=" w-1/3 mx-auto p-2 text-center bg-blue-700 hover:bg-blue-900 rounded-md text-white
                    "
                   disabled={data.otp === '' ? true : false}
                  onClick={handleSignIn}
                  >
                    {loading ? 'VERIFYING' : 'SIGN IN'}
                    </button>:
                     <button
                       className=" w-1/3 mx-auto p-2 text-center bg-blue-700 hover:bg-blue-900 rounded-md text-white"
                       type="submit"
                       disabled={data.email === '' ?true : false}
                  >
                    {loading ? "SENDING MAIL" : "SEND OTP" }
                  </button>
                 }
                </div>
              </form>
              {/* Footer */}
                
                {/* Warning */}
              
            </div>

        {/* <AuthImage /> */}
      </div>
    </main>
   </>
  );
}