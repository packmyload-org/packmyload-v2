'use client'
import Image from 'next/image'
export default function Loading() {
  return (
    <div className="w-full absolute top-0 min-h-full z-[9999] bg-slate-600 text-center flex justify-center items-center">
     <Image src='/images/marker.png' alt='loader' width={100} height={100} className='animate-bounce' priority />
    </div>
  );
}
