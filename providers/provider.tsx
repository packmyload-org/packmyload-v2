import { BookingFormProvider } from '@/context/BookingFormContext'
import { InputContextProvider } from '@/context/InputContext'
import { LoadingProvider } from '@/context/LoadingContext'
import React from 'react'
function Provider({children}:{children: React.ReactNode}) {
  return (
    <LoadingProvider>
          <BookingFormProvider>
            <InputContextProvider>   
                {children}
            </InputContextProvider>
          </BookingFormProvider>
    </LoadingProvider>
  )
}

export default Provider