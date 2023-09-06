'use client'
import { MapPin } from "@phosphor-icons/react";

export default function Loading() {
  return (
    <div className="w-full absolute top-0 min-h-full z-[9999] bg-slate-600 text-center flex justify-center items-center">
      <MapPin
        size={32}
        color="#4bcbfe"
        weight="fill"
        className="animate-bounce"
      />
    </div>
  );
}
