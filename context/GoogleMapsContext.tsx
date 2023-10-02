// 'use client'
// import React, { createContext, useContext, useEffect, useState } from 'react';
// import { Libraries } from '@react-google-maps/api';
// import Loading from '@/app/loading';

// interface GoogleMapsContextProps {
//   children: React.ReactNode;
// }

// interface GoogleMapsContextValue {
//   isLoaded: boolean;
//   loadError: boolean;
// }

// const GoogleMapsContext = createContext<GoogleMapsContextValue | undefined>(undefined);

// export const useGoogleMaps = () => {
//   const context = useContext(GoogleMapsContext);
//   if (context === undefined) {
//     throw new Error('useGoogleMaps must be used within a GoogleMapsProvider');
//   }
//   return context;
// };

// export const GoogleMapsProvider: React.FC<GoogleMapsContextProps> = ({ children }) => {
//   const libraries: Libraries = ['places'];
//   const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? '';
//   // State for loading status
//   const [loadError, setLoadError] = useState(false); // State for load error
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = ``;
//     script.async = true;
//     script.id = 'google-maps-script'; // Add an id to the script element

//     script.onload = () => {
//       setIsLoaded(true); // Google Maps is loaded
//     };

//     script.onerror = () => {
//       console.log(script.onerror)
//       setLoadError(true); // Error occurred during Google Maps load
//     };

//     document.body.appendChild(script);

//     return () => {
//       // Clean up script tag by id if component unmounts
//       const scriptElement = document.getElementById('google-maps-script');
//       if (scriptElement && scriptElement.parentNode) {
//         scriptElement.parentNode.removeChild(scriptElement);
//       }
//     };
//   }, [apiKey, libraries]);

//   if (!isLoaded) {
//     return <Loading/>
//   }

//   return (
//     <GoogleMapsContext.Provider value={{ isLoaded, loadError }}>
//       {children}
//     </GoogleMapsContext.Provider>
//   );
// };
