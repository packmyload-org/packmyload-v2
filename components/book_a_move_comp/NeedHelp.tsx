"use client"
import { useState } from "react"
import {usePathname} from 'next/navigation'
import Link from 'next/link'

export const NeedHelp: React.FC = () => {
    const pathname = usePathname()

    const [info, setInfo] = useState(false)

    const onMouseEnter = () => {
        setInfo(() => true)
    }
    const onMouseLeave = () => {
        setInfo(() => false)
    }

    function toggleClick() {
        setInfo(prev => !prev)
    }
    if(!pathname.includes("contact-agent")){
        
        return (
            
            <span className="font-sm text-blue-300 font-black">
                <Link href='/book/contact-agent' className="text-blue-300 font-black">
                    Need help{" "}
                </Link>
                <button
                    className="rounded-full w-[20px] h-[20px] border border-black text-[12px]"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    onClick={toggleClick}
                >
                    ?
                </button>
                {
                    info && 
                    <div
                        className="bg-white p-2 mt-2 absolute top-8 right-4 text-sm border border-gray-300 rounded shadow-md"
                        >
                        Contact our agents to help you with your move.
                    </div>
    
                }
            </span>
        )
    }
}