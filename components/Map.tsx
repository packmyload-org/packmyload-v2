import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, DirectionsRenderer } from "@react-google-maps/api";
import { useInputContext } from '@/context/InputContext';
import { usePathname } from 'next/navigation';
import { alerts } from './alerts/Alert';
import { useBookingForm } from '@/context/BookingFormContext';

interface RouteData {
  direction: google.maps.DirectionsResult | null;
  distance: string | undefined;
  duration: string | undefined;
}

function Map() {
  const path = usePathname()
  const [mapCenter, setMapCenter] = useState({ lat: 6.465422, lng: 3.406448 });
  const [routeData, setRouteData] = useState<RouteData | null>(null);
  const { locationValue, triggerCalculateRoute, setTriggerCalculateRoute } = useInputContext()
  const {state,dispatch}  =useBookingForm()
  
  const calculateRoute = async () => {
    const {pickUp , destination} = state

    if (pickUp === '' || destination === '') {
      return null;
    }
    
    try {
      const directionService = new google.maps.DirectionsService();
      const results = await directionService.route({
        origin: pickUp,
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING,
      });
      console.log('results', results)
      return {
        direction: results,
        distance: results.routes[0].legs[0].distance?.text,
        duration: results.routes[0].legs[0].duration?.text,
      };
    } catch (error) {
      console.warn('Error calculating route:', error);
      alerts.error('Directions error','No route found by current travel mode.')
      return null;
    }
  };


   const handleFieldChange = (field: string, value: string) => {
    dispatch({ type: 'UPDATE_FIELD', field, value });
  };
  useEffect(() => {
    async function fetchRouteData() {
      const result = await calculateRoute();
      if (result) {
        handleFieldChange('distance', result?.distance ?? '')
        return setRouteData(result);
      }
      return null
    }
    console.log('isTriggered', triggerCalculateRoute)
    if (
      triggerCalculateRoute
      && state.pickUp !== ''
      && state.destination !== ''
    ) {
      fetchRouteData()
      setTriggerCalculateRoute(false)
      return
    }
  }, [triggerCalculateRoute, state.pickUp, state.destination]);

  useEffect(() => {
    if (path.includes('partner')) {
      setMapCenter(locationValue)
    }
  }, [locationValue])
  
  useEffect(() => {
     async function fetchRouteData() {
      const result = await calculateRoute();
      if (result) {
        setRouteData(result);
        handleFieldChange('distance', result?.distance ?? '')
      }
    }
    if (path.includes("book")) {
      fetchRouteData();
    }else if (path.includes('partner') ) {
      setMapCenter({ lat: 6.465422, lng: 3.406448 })
    }
  }, [path])
  console.log(routeData)
  return (
    <div className='w-full h-full mb-4 rounded-md shadow-md'>
      {
        !path.includes('book') ?    <GoogleMap
        center={mapCenter}
        zoom={15}
        mapContainerStyle={{ width: '100%', height: '100%' ,minHeight:'230px'}}
        options={{
          streetViewControl: false,
          zoomControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
      >
        <Marker position={mapCenter} />
        
      </GoogleMap> :
          <GoogleMap
        center={mapCenter}
        zoom={15}
        mapContainerStyle={{ width: '100%', height: '100%' ,minHeight:'230px'}}
        options={{
          streetViewControl: false,
          zoomControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
      >
            {
              routeData?.direction && <DirectionsRenderer directions={routeData.direction} /> }
      </GoogleMap>
  }
    </div>
  );
}

export default Map;
