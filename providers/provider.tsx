import { BookingFormProvider } from '@/context/BookingFormContext'
import { GoogleMapsProvider } from '@/context/GoogleMapsContext'
import { InputContextProvider } from '@/context/InputContext'
import { LoadingProvider } from '@/context/LoadingContext'
import { RefProvider } from '@/context/ServiceRefContext'
import React from 'react'

function Provider({children}:{children: React.ReactNode}) {
  return (
    <LoadingProvider>
        <GoogleMapsProvider>
          <BookingFormProvider>
            <InputContextProvider>
              <RefProvider>    
                {children}
              </RefProvider>
            </InputContextProvider>
          </BookingFormProvider>
        </GoogleMapsProvider>
    </LoadingProvider>
  )
}

export default Provider