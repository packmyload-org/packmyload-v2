'use client'
import MoveCostTable from '@/components/MoveCostTable'
import React, { useEffect, useState } from 'react'
import data from '@/utils/prices.json'
type Props = {}

function page({ }: Props) {
 const [initialData, setInitialData] = useState({
  interState: [],
  intraState:[]
 })
 useEffect(() => {
  (async () => {
   const hostURL = window.location.origin;
   const res = await fetch(`${hostURL}/api/pricing`, {
    method: "GET",
    headers: {
     'Content-Type': 'application/json'
    },
   });
   const data = await res.json();
   const newObj = data.data[data.data.length - 1]
   delete newObj._id;
   delete newObj.__v;
   // console.log(newObj)
   setInitialData(newObj)
  })();
 }, []);

  return (
    <div className='min-h-screen pt-20 w-full md:max-w-7xl mx-auto space-y-5'>
      <h1 className='mt-6 font-bold text-3xl text-blue-600'>Hello Admin,</h1>
      <div>
        <MoveCostTable initialData={initialData}/>
      </div>
    </div>
  )
}

export default page