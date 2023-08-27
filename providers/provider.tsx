import { GoogleMapsProvider } from '@/context/GoogleMapsContext'
import { InputContextProvider } from '@/context/InputContext'
import { LoadingProvider } from '@/context/LoadingContext'
import React from 'react'

function Provider({children}:{children: React.ReactNode}) {
  return (
    <LoadingProvider>
      <GoogleMapsProvider>
        <InputContextProvider>
          {children}
        </InputContextProvider>
      </GoogleMapsProvider>
    </LoadingProvider>
  )
}

export default Provider