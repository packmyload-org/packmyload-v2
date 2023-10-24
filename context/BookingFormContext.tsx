'use client'
import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Define the form state interface
interface BookingFormState {
  // Define your form fields here
  firstName: string;
  lastName: string;
  email: string;
  moveDate: string;
  pickUp: string;
  destination: string;
  moveTime: string;
  phoneNumber: string;
  moveType: string;
  items: Array<{
    item: string;
    numberOfItems: string;
    volume?: number;
  }>;
  rooms: Array<{
    room: string;
    numberOfRooms: string;
  }>;
  buildingTypeStart: string;
  buildingTypeEnd: string;
  floorsStart: string;
  floorsEnd: string;
  parkingStart: string;
  parkingEnd: string;
  service: string;
  distance: string;
  contactBy: string;
  countryCode: string;
  acceptedTerms: boolean;
  totalPrice: string;
  size: string;
  movers: number;
}

// Define action types
type Action =
  | { type: 'UPDATE_FIELD'; field: string; value: string | boolean | number}
  | { type: 'UPDATE_ITEMS'; items: { item: string; numberOfItems: string; volume?: number }[] }
  | { type: 'UPDATE_ROOMS'; rooms: { room: string; numberOfRooms: string; }[] }
  | { type: 'RESTORE_STATE'; payload: BookingFormState };

// Define initial form state
const initialFormState: BookingFormState = {
  firstName: '',
  lastName: '',
  email: '',
  moveDate: '',
  pickUp: '',
  destination: '',
  moveTime: '',
  phoneNumber: '',
  moveType: 'Item Pick Up and Furniture Delivery',
  items: [],
  rooms: [],
  buildingTypeStart: '',
  buildingTypeEnd: '',
  floorsStart: '',
  floorsEnd: '',
  parkingStart: '',
  parkingEnd: '',
  service: '',
  distance: '',
  contactBy: '',
  countryCode: '+ 234',
  acceptedTerms: false,
  size: '',
  totalPrice: '',
  movers: 0,
};

// Define a key for localStorage
const LOCAL_STORAGE_KEY = 'bookingFormState';

// Create context
const BookingFormContext = createContext<{
  state: BookingFormState;
  dispatch: React.Dispatch<Action>;
} | undefined>(undefined);

// Define reducer function
const formReducer = (state: BookingFormState, action: Action): BookingFormState => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...state, [action.field]: action.value };
    case 'UPDATE_ITEMS':
      return { ...state, items: [...action.items] };
    case 'UPDATE_ROOMS':
      return { ...state, rooms: [...action.rooms] };
    case 'RESTORE_STATE':
      return action.payload;
    default:
      return state;
  }
};

export const useBookingForm = () => {
  const context = useContext(BookingFormContext);
  if (context === undefined) {
    throw new Error('useBookingForm must be used within a BookingFormProvider');
  }
  return context;
};

export const BookingFormProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(formReducer, initialFormState);

  // Load initial state from localStorage (if available)
  useEffect(() => {
    const savedState = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedState) {
      dispatch({ type: 'RESTORE_STATE', payload: JSON.parse(savedState) });
    }
  }, []);

  // Update localStorage whenever the state changes
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  return (
    <BookingFormContext.Provider value={{ state, dispatch }}>
      {children}
    </BookingFormContext.Provider>
  );
};
