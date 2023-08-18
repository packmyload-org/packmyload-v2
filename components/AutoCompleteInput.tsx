'use client'
import Loading from '@/app/loading';
import { useInputContext } from '@/context/InputContext';
import { useInputPlaceContext } from '@/hooks/useInputPlaceContext-hook'; 
import {useJsApiLoader,Autocomplete} from '@react-google-maps/api'
import { useState } from 'react';
interface AutoCompleteInputProps {
  inputStyle: string;
  inputName: string;
  type: string;
  placeholder: string;
}


export const AutoCompleteInput = ({ inputStyle, inputName, type, placeholder, }: AutoCompleteInputProps) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? '',
    libraries: ['places']
  });
 

  const { setInputValueWithLocalStorage, inputValue } = useInputContext();
  const [autocomplete, setAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);

  if (!isLoaded) {
    return <Loading />;
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValueWithLocalStorage(event.target.value,event.target.name);
  };

const { handlePlaceChanged } = useInputPlaceContext(autocomplete, inputName);



  return (
    <>
      <Autocomplete onLoad={(auto) => setAutocomplete(auto)} onPlaceChanged={handlePlaceChanged}>
        <input
          name={inputName}
          type={type}
          className={inputStyle}
          placeholder={placeholder}
          required
          // value={inputValue}
          onChange={handleInputChange}
        />
      </Autocomplete>
    </>
  );
};