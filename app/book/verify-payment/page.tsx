'use client'
import { redirect, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react'
import { alerts } from '@/components/alerts/Alert';
import { Spin } from 'antd';

type Props = {}

export default function page({ }: Props) {
  let spin = true;
  const params = useSearchParams()
  useEffect(() => {
    const ref = params?.get('reference')
    if (ref) {
      Update(ref)
    }
  })

  async function Update(ref: string) {
    const res = await fetch('/api/booking/payment', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({reference: ref})
    })
    if (res.ok) {
      const response = res.json()
      alerts.success('success', response)
      redirect('/')
    }
  }

  return (
   <div className="w-full h-screen flex flex-col space-x-2 justify-center items-center">
      <Spin spinning={spin} delay={500} size="large">
      </Spin>
      <p className='mt-4 text-lg font-bold text-gray-800'>Please wait while we verify your transaction.</p>
   </div>
   )
}