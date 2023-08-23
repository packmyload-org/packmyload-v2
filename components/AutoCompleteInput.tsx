'use client'
import { useInputContext } from '@/context/InputContext';
import { useStore } from '@/hooks/useDirections-hook';
import { useInputPlaceContext } from '@/hooks/useInputPlaceContext-hook'; 
import {Autocomplete} from '@react-google-maps/api'
import { useState } from 'react';
interface AutoCompleteInputProps {
  inputStyle: string;
  inputName: string;
  type: string;
  placeholder: string;
}


export const AutoCompleteInput = ({ inputStyle, inputName, type, placeholder, }: AutoCompleteInputProps) => {

 const { setInputValueWithLocalStorage } = useInputContext();
 const [autocomplete, setAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);

 const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setInputValueWithLocalStorage(event.target.value, event.target.name);
 };

 const { handlePlaceChanged } = useInputPlaceContext(autocomplete, inputName);
 const storeData = useStore()
 const name = inputName.toLowerCase()
  return (
   <>
    <Autocomplete onLoad={(auto) => setAutocomplete(auto)} onPlaceChanged={handlePlaceChanged} className='w-full grid place-items-start'>
        <input
          name={inputName}
          type={type}
          className={inputStyle}
          placeholder={placeholder}
          onChange={handleInputChange}
          defaultValue={name === 'pickup' ? storeData?.pickUp ?? '' : name === 'destination' ? storeData?.destination ?? '' : ''}
        />
      </Autocomplete>
    </>
  );
};