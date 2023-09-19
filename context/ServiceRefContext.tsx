"use client"

import { MutableRefObject, createContext, useContext, useRef } from "react";

interface ServiceRefContextType {
    content: MutableRefObject<HTMLDivElement | null>;
}

const ServiceRefContext = createContext<ServiceRefContextType | null>(null);

export function useRefContext(){
    const context = useContext(ServiceRefContext)

    if(!context){
        throw new Error("ServiceRefContext must be used within a RefProvder")
    }

    return context;
}


type RefProvider = {
    children: React.ReactNode
}

export function RefProvider ({children}: RefProvider) {

    const contentRef = useRef<HTMLDivElement | null>(null)

    const contextValue: ServiceRefContextType = {
        content: contentRef,
    };

    return (
        <ServiceRefContext.Provider value={contextValue}>
            {children}
        </ServiceRefContext.Provider>
    )
}