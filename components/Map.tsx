import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, DirectionsRenderer, useLoadScript, Libraries } from "@react-google-maps/api";
import { useInputContext } from '@/context/InputContext';
import { usePathname } from 'next/navigation';
import { message } from 'antd';

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
    const pickUp = window.localStorage.getItem('pickUp');
    const destination = window.localStorage.getItem('destination');

    if (!pickUp || !destination) {
      return null;
    }
    
    // console.log(pickUp, destination)
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
      console.warn('Error calculating route:', error);
      alert('No route found between pickup and destination address')
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
    // console.log('isTriggered', triggerCalculateRoute)
    if (triggerCalculateRoute) {
      fetchRouteData()
      setTriggerCalculateRoute(!triggerCalculateRoute)
      
    }
  }, [triggerCalculateRoute]);

  useEffect(() => {
    if (path.includes('partner') ) {
      setMapCenter(locationValue)
    }
  },[locationValue])
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
     if (path.includes('partner') ) {
      setMapCenter({ lat: 48.8584, lng: 2.2945 })
    }
  }, [])
  
  return (
    <div className='w-full h-full  mb-4 rounded-md shadow-md'>
      <GoogleMap
        center={mapCenter}
        zoom={15}
        mapContainerStyle={{ width: '100%', height: '100%' ,minHeight:'200px'}}
        options={{
          streetViewControl: false,
          zoomControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
      >
        {
       ! routeData?.direction && <Marker position={mapCenter} />
        }
          
        {routeData?.direction && path.includes('book_a_move') && <DirectionsRenderer directions={routeData.direction} />}
      </GoogleMap>
    </div>
  );
}

export default Map;
