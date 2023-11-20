'use client'
import { useState } from 'react'; // Import useState
import { useBookingForm } from '@/context/BookingFormContext';
import { useInputContext } from '@/context/InputContext';
import { usePathname } from 'next/navigation';
import { alerts } from '@/components/alerts/Alert';

export const useInputPlaceContext = (autocomplete: google.maps.places.Autocomplete | null, inputName: string) => {
  const path = usePathname();
  const {
    setInputValueWithLocalStorage,
    setPlaceValueWithLocalStorage,
    setTriggerCalculateRoute,
  } = useInputContext();
  const { dispatch } = useBookingForm();

  const handleFieldChange = (field: string, value: string) => {
    dispatch({ type: 'UPDATE_FIELD', field, value });
  };

  const handlePlaceChanged = () => {
    if (autocomplete) {
      const placeId = autocomplete.getPlace()?.place_id;

      if (placeId) {
        const placeService = new google.maps.places.PlacesService(document.createElement('div'));
        placeService.getDetails({ placeId }, (place, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK && place) {
            // Check if the place has address components
            // if (place.address_components) {
              // Check if the place has 'street_address' or 'premise' types
              // const hasStreetAddress = place.address_components.some(component =>
              //   component.types.includes('street_address')
              // );

              // const hasPremise = place.address_components.some(component =>
              //   component.types.includes('premise')
              // );

              // if (hasStreetAddress || hasPremise) {
                const formattedAddress = place.formatted_address;
                const latitude = place.geometry?.location?.lat();
                const longitude = place.geometry?.location?.lng();

                if (formattedAddress && (inputName !== 'pickUp' || 'destination')) {
                  setInputValueWithLocalStorage(formattedAddress ?? '', inputName);
                  path.includes('move') && setTriggerCalculateRoute(true);

                  if (latitude !== undefined && longitude !== undefined && !path.includes('book')) {
                    let location = { lat: latitude, lng: longitude };
                    setPlaceValueWithLocalStorage(location, inputName + 'Location');
                  }
                }

                if (inputName === 'pickUp') {
                  const wordsToCheck: string[] = ['Nigeria', 'Lagos', 'Abuja'];
                  const isNigeriaPresent = formattedAddress?.includes('Nigeria');
                  const someWordPresent = wordsToCheck.slice(1).some(word => formattedAddress?.includes(word));

                  if (isNigeriaPresent && someWordPresent) {
                    setInputValueWithLocalStorage(formattedAddress ?? '', inputName);
                    handleFieldChange(inputName, formattedAddress ?? '');
                    path.includes('book') && setTriggerCalculateRoute(true);
                    // setNewMessage('Valid address with Nigeria present.');
                    return;
                  } else {
                    alerts.error(`Pick Up Field`,`We're not operating in ${formattedAddress}`)
                    return;
                  }
                }

                setInputValueWithLocalStorage(formattedAddress ?? '', inputName);
                handleFieldChange(inputName, formattedAddress ?? '');
                path.includes('book') && setTriggerCalculateRoute(true);
              // } else {
              //   // Display an error message if the place doesn't have the required address types
              //   alerts.error(`Invalid Address`, `Please provide a valid street or residential address.`);
              // }
            // } else {
            //   // Handle cases where address_components are not available
            //   alerts.error(`Invalid Address`, `Please provide a valid street or residential address.`);
            // }
          }
        });
      }
    }
  };

  return { handlePlaceChanged }; // Return the new message
};
