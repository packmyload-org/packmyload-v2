'use client'

import React, { createContext, useContext, useState } from 'react';

interface InputContextType {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
 setInputValueWithLocalStorage: (value: string, name: string) => void;
 setPlaceValueWithLocalStorage: (value: any, name: string) => void;
 locationValue: any;
 setTriggerCalculateRoute: React.Dispatch<React.SetStateAction<boolean>>;
 triggerCalculateRoute: boolean;
}

const InputContext = createContext<InputContextType | undefined>(undefined);

export const useInputContext = () => {
  const context = useContext(InputContext);
  if (!context) {
    throw new Error('useInputContext must be used within an InputContextProvider');
  }
  return context;
};

export const InputContextProvider = ({ children }: { children: React.ReactNode }) => {
 

 const [inputValue, setInputValue] = useState<string>('');
 const [locationValue, SetLocationValue] = useState<any>()
 const [triggerCalculateRoute, setTriggerCalculateRoute] = useState<boolean>(false)

  const setInputValueWithLocalStorage = (value: string, name: string) => {
    setInputValue(value);
    localStorage.setItem(name, value); 
  };
 const setPlaceValueWithLocalStorage = (value: any, name: string) => {
   SetLocationValue(value)
   localStorage.setItem(name, JSON.stringify(value)); 
 };
  return (
    <InputContext.Provider value={{ inputValue, setInputValue, setInputValueWithLocalStorage, setPlaceValueWithLocalStorage, locationValue ,triggerCalculateRoute, setTriggerCalculateRoute}}>
      {children}
    </InputContext.Provider>
  );
};
