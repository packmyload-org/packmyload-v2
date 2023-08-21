import { InputContextProvider } from '@/context/InputContext'
import { LoadingProvider } from '@/context/LoadingContext'
import React from 'react'

function Provider({children}:{children: React.ReactNode}) {
  return (
    <LoadingProvider>
     <InputContextProvider>
       {children}
     </InputContextProvider>
    </LoadingProvider>
  )
}

export default Provider