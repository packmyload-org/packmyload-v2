'use client'

import { Col } from "antd"

export default function Steps() {
  return (
  <Col span={24} className="min-h-screen bg-blue-900 pt-[81px] md:pt-[94px] pb-3 px-[5%]">
    <div className="flex flex-col flex-wrap-reverse h-full w-full rounded-xl border bg-white/20 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur p-0 lg:p-6 input_shadow gap-3 justify-evenly overflow-y-scroll lg:overflow-y-hidden text-white">
        <h3 className="w-full text-center text-3xl font-bold font-mono">You're Almost There</h3>
        <p className="w-full text-center text-lg">Please select the items or category you need help with to enable us serve you better.</p>
        <div>

        </div>
    </div>
  </Col>
  )
}
