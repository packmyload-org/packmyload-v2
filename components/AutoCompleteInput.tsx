'use client'
import { useInputContext } from '@/context/InputContext';
import { useStore } from '@/hooks/useDirections-hook';
import { useInputPlaceContext } from '@/hooks/useInputPlaceContext-hook'; 
import {useJsApiLoader,Autocomplete, Libraries} from '@react-google-maps/api'
import { useEffect, useState } from 'react';
interface AutoCompleteInputProps {
  inputStyle: string;
  inputName: string;
  type: string;
  placeholder: string;
}


export const AutoCompleteInput = ({ inputStyle, inputName, type, placeholder, }: AutoCompleteInputProps) => {
 let libraries: Libraries = ['places']

 const { isLoaded } = useJsApiLoader({
  googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? '',
  libraries: libraries
 });
 

 const { setInputValueWithLocalStorage } = useInputContext();
 const [autocomplete, setAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);
 if (!isLoaded) {
  return <h1>{isLoaded || 'loading... '}</h1>
 }

 const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setInputValueWithLocalStorage(event.target.value, event.target.name);
 };

 const { handlePlaceChanged } = useInputPlaceContext(autocomplete, inputName);
 const { pickUp, destination } = useStore()

const name = inputName.toLowerCase()
  return (
   <>
      <Autocomplete onLoad={(auto) => setAutocomplete(auto)} onPlaceChanged={handlePlaceChanged} className='w-full grid place-items-start'>
        <input
          name={inputName}
          type={type}
          className={inputStyle}
          placeholder={placeholder}
          required
          onChange={handleInputChange}
          defaultValue={name === 'pickup' ? pickUp ?? '' : name === 'destination' ? destination ?? '' : ''}
        />
      </Autocomplete>
    </>
  );
};