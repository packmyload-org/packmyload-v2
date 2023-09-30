import { BookingFormProvider } from '@/context/BookingFormContext'
import { GoogleMapsProvider } from '@/context/GoogleMapsContext'
import { InputContextProvider } from '@/context/InputContext'
import { LoadingProvider } from '@/context/LoadingContext'
import React from 'react'
function Provider({children}:{children: React.ReactNode}) {
  return (
    <LoadingProvider>
        <GoogleMapsProvider>
          <BookingFormProvider>
            <InputContextProvider>   
                {children}
            </InputContextProvider>
          </BookingFormProvider>
        </GoogleMapsProvider>
    </LoadingProvider>
  )
}

export default Provider