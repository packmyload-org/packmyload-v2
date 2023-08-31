'use client'
import ItemsCounter from '@/components/book_a_move_comp/ItemsCounter'
import React from 'react'
import Link from 'next/link'

export default function page() {
  return (
    
    <div
      className='grid grid-cols-1 max-w-6xl mx-auto gap-4 mt-10'
    >
      <input type="text" placeholder='search' className='w-[350px] outline-none p-2 h-10 input_shadow border-gray-400 rounded-lg' />
      <div className='py-3 space-y-3'>
        <div className='w-full flex justify-between'>
            <ItemsTabs name='All'/>
            <ItemsTabs name='All'/>
            <ItemsTabs name='All'/>
        </div>
            <div className='flex gap-2 w-full  justify-between flex-wrap pb-3'>
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

type props = {
  name: string;
}
const ItemsTabs = (props: props) => {
  return (
    <section className='w-[100px]'>
      <p>{props.name}</p>
    </section>
  )
}