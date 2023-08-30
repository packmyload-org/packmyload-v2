'use client'
import ItemsCounter from '@/components/book_a_move_comp/ItemsCounter'
import React from 'react'
import Link from 'next/link'

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
        <Link href={'/book_a_move/locations-details'}>
 
          <div
            className='bg-blue-600 mx-auto text-center w-[120px] mb-2 font-bold text-md text-gray-600 hover:text-gray-100 hover:bg-blue-300 p-2 rounded-lg'
            >
              Proceed
          </div>
        </Link>
      </div>
  )
}
