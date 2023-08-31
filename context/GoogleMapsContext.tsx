import React, { createContext, useContext, useEffect, useState } from 'react';
import { Libraries, LoadScript } from '@react-google-maps/api';

interface GoogleMapsContextProps {
  children: React.ReactNode;
}

interface GoogleMapsContextValue {
  isLoaded: boolean;
  loadError: boolean;
}

const GoogleMapsContext = createContext<GoogleMapsContextValue | undefined>(undefined);

export const useGoogleMaps = () => {
  const context = useContext(GoogleMapsContext);
  if (context === undefined) {
    throw new Error('useGoogleMaps must be used within a GoogleMapsProvider');
  }
  return context;
};

export const GoogleMapsProvider: React.FC<GoogleMapsContextProps> = ({ children }) => {
  const libraries: Libraries = ['places'];
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? '';

  return (
    <LoadScript googleMapsApiKey={apiKey} libraries={libraries}>
      <GoogleMapsContext.Provider value={{ isLoaded: true, loadError: false }}>
        {children}
      </GoogleMapsContext.Provider>
    </LoadScript>
  );
};
