import { useBookingForm } from '@/context/BookingFormContext';
import { useInputContext } from '@/context/InputContext';
import { usePathname } from 'next/navigation';

export const useInputPlaceContext = (autocomplete: google.maps.places.Autocomplete | null, inputName: string) => {
 const path = usePathname()
  const {
    setInputValueWithLocalStorage,
    setPlaceValueWithLocalStorage,
    setTriggerCalculateRoute,
  } = useInputContext();
const { state, dispatch } = useBookingForm();

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
            const formattedAddress = place.formatted_address;
            const latitude = place.geometry?.location?.lat();
            const longitude = place.geometry?.location?.lng();

            if (formattedAddress && inputName !== "pickUp" || "destination") {
              setInputValueWithLocalStorage(formattedAddress ?? '', inputName);
              path.includes('book_a_move') && setTriggerCalculateRoute(true)

              if (latitude !== undefined && longitude !== undefined && !path.includes('book_a_move') ) {
                let location = { lat: latitude, lng: longitude };
               setPlaceValueWithLocalStorage(location, inputName + 'Location');
              }
            }
                      setInputValueWithLocalStorage(formattedAddress ?? '', inputName);
              path.includes('book_a_move') && setTriggerCalculateRoute(true)
          handleFieldChange(inputName,formattedAddress  ?? '')
          }
        });
      }
   }
  };

  return { handlePlaceChanged };
};
