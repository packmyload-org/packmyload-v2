import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, DirectionsRenderer, useLoadScript } from '@react-google-maps/api';
import { useInputContext } from '@/context/InputContext';
import { useStore } from '@/hooks/useDirections-hook';

interface RouteData {
  direction: google.maps.DirectionsResult | null;
  distance?: string;
  duration?: string;
}

function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
    libraries: ['places'],
  });

  const [mapCenter, setMapCenter] = useState<{ lat: number; lng: number }>({ lat: 48.8584, lng: 2.2945 });
  const { locationValue } = useInputContext();
  const [routeData, setRouteData] = useState<RouteData | null>({
    direction: null,
    distance: undefined,
    duration: undefined,
  });

  const calculateRoute = async (pickUp: string, destination: string) => {
    try {
      const directionService = new google.maps.DirectionsService();
      const results = await directionService.route({
        origin: pickUp,
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING,
      });

      return {
        direction: results,
        distance: results.routes[0].legs[0].distance?.text,
        duration: results.routes[0].legs[0].duration?.text,
      };
    } catch (error) {
      console.error('Error calculating route:', error);
      return null;
    }
  };

  const { pickUp, destination } = useStore(); 
  
  useEffect(() => {
    async function fetchRouteData() {
      if (!pickUp || !destination) {
        return;
      }

      const result = await calculateRoute(pickUp, destination);
      if (result) {
        setRouteData(result);
      }
    }

    fetchRouteData();
  }, [pickUp, destination]);

  if (loadError) {
    return <div>Error loading Google Maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className='w-full h-full'>
      <GoogleMap
        center={locationValue || mapCenter}
        zoom={15}
        mapContainerStyle={{ width: '100%', height: '100%' }}
        options={{
          streetViewControl: false,
          zoomControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
      >
        <Marker position={locationValue || mapCenter} />
        {routeData?.direction && <DirectionsRenderer directions={routeData.direction} />}
      </GoogleMap>
    </div>
  );
}

export default Map;
