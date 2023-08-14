'use client'

import { usePathname, useSearchParams } from "next/navigation"

export default function Steps() {
 const path = useSearchParams()
  return (
    <div className="min-h-screen pt-[10%]">{path.get('step')}</div>
  )
}
