'use client'
import ItemsCounter from '@/components/book_a_move_comp/ItemsCounter'
import React from 'react'

export default function page() {
  return (
   <div
    className='grid grid-cols-1 max-w-6xl mx-auto gap-4 mt-10'
     >
    <div className='p-5'>
      <div className='flex gap-3 justify-evenly flex-wrap mb-3'>
        <ItemsCounter title='items'/>
        <ItemsCounter title='items'/>
        <ItemsCounter title='items'/>
        <ItemsCounter title='items'/>
        <ItemsCounter title='items'/>
        <ItemsCounter title='items'/>
        <ItemsCounter title='items'/>
        <ItemsCounter title='items'/>
      </div>
      </div>
   </div>
  )
}
