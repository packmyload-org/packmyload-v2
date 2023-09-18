'use client'
import {MapPin} from '@phosphor-icons/react'

export default function Loading() {
  return (
    <div className="w-full absolute top-0 min-h-full z-[9999] bg-slate-600 text-center flex justify-center items-center">
      <MapPin
        color="#4bcbfe"
        size={50}
        weight='fill'
        className='animate-bounces'
      />
    </div>
  );
}
