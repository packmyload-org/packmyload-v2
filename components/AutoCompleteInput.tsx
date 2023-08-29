'use client'
import { useInputContext } from '@/context/InputContext';
// import { useStore } from '@/hooks/useDirections-hook';
import { Libraries, useJsApiLoader } from '@react-google-maps/api'
import { useInputPlaceContext } from '@/hooks/useInputPlaceContext-hook'; 
import {Autocomplete} from '@react-google-maps/api'
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useBookingForm } from '@/context/BookingFormContext';
interface AutoCompleteInputProps {
  inputStyle: string;
  inputName: string;
  type: string;
  placeholder: string;
}


export const AutoCompleteInput = ({ inputStyle, inputName, type, placeholder, }: AutoCompleteInputProps) => {
 const { setInputValueWithLocalStorage } = useInputContext();
  const [autocomplete, setAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);
 
  const {state}=useBookingForm()
 const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setInputValueWithLocalStorage(event.target.value, event.target.name);
 };

 const { handlePlaceChanged } = useInputPlaceContext(autocomplete, inputName);

  const name = inputName.toLowerCase()
 
  return (
    <>
    <Autocomplete onLoad={(auto) => setAutocomplete(auto)} onPlaceChanged={handlePlaceChanged} className='w-full grid place-items-start'>
        <input
          name={inputName}
          type={type}
          className={inputStyle}
          placeholder={placeholder}
          defaultValue={name === "pickup" ? state.pickUp : name === 'destination' ? state.destination : '' }
        />
      </Autocomplete>
    </>
  );
};