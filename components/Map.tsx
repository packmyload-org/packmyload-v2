import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, DirectionsRenderer, useLoadScript, Libraries } from "@react-google-maps/api";
import { useInputContext } from '@/context/InputContext';
import { usePathname } from 'next/navigation';

interface RouteData {
  direction: google.maps.DirectionsResult | null;
  distance: string | undefined;
  duration: string | undefined;
}

function Map() {
  const path = usePathname()
  const [mapCenter, setMapCenter] = useState({ lat: 48.8584, lng: 2.2945 });
  const [routeData, setRouteData] = useState<RouteData | null>(null);
  const {locationValue, triggerCalculateRoute, setTriggerCalculateRoute} = useInputContext()
  const calculateRoute = async () => {
    const pickUp = localStorage.getItem('pickUp');
    const destination = localStorage.getItem('destination');

    if (!pickUp || !destination) {
      return null;
    }

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

  useEffect(() => {
    async function fetchRouteData() {
      const result = await calculateRoute();
      if (result) {
        setRouteData(result);
      }
    }
    if (path.includes("book_a_move")) {
      fetchRouteData();
    }
    if (triggerCalculateRoute) {
      fetchRouteData()
      setTriggerCalculateRoute(!triggerCalculateRoute)
    }
  }, [path, triggerCalculateRoute]);

  useEffect(() => {
    if (path.includes('partner') ) {
      setMapCenter(locationValue)
    }
  },[locationValue])

  return (
    <div className='w-full h-full'>
      <GoogleMap
        center={mapCenter}
        zoom={15}
        mapContainerStyle={{ width: '100%', height: '100%' }}
        options={{
          streetViewControl: false,
          zoomControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
      >
        <Marker position={mapCenter} />
        {routeData?.direction && path.includes('book_a_move') && <DirectionsRenderer directions={routeData.direction} />}
      </GoogleMap>
    </div>
  );
}

export default Map;
