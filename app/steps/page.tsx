'use client'

import { Col } from "antd"

export default function Steps() {
  return (
  <Col span={24} className="h-screen bg-blue-900 pt-[81px] md:pt-[90px] pb-2 px-[5%]">
    <div className="flex flex-row flex-wrap-reverse h-full w-full rounded-xl border bg-white/20 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur p-0 lg:p-6 input_shadow lg:gap-10 justify-evenly overflow-y-scroll lg:overflow-y-hidden">
         {/* Map Section */}
      <div className="flex flex-col h-[300px] lg:h-full bg-cover bg-no-repeat rounded-b-lg lg:rounded-xl w-full lg:w-[45%] bg-[url('https://storage.prompt-hunt.workers.dev/cc21c6f2-9f26-4b1e-8ede-04597b9bba15')]"></div>
         {/* Form  Section*/}
      <div className="w-full rounded-t-lg lg:rounded-xl lg:w-[45%] h-max  section_title p-6 space-y-6"></div>
    </div>
  </Col>
  )
}
