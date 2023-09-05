import React, {  createContext, useContext, useReducer } from 'react';

// Define the form state interface
interface BookingFormState {
  // Define your form fields here
  fullName: string;
  email: string;
  MovingOn: string;
  pickUp: string;
  destination: string;
  moveTime: string;
  phoneNumber: string;
  moveType: string,
  items: Array<{
    item: string;
    numberOfItems: string;
  }>;
  buildingType: string,
  floors: string,
  parkingStart:string,
  parkingEnd:string,
  service: string,
  distance: string,
}

// Define action types
type Action =
  | { type: 'UPDATE_FIELD'; field: string; value: string }
  | { type: 'UPDATE_ITEMS'; items: { item: string; numberOfItems: string }[] };
// Define initial form state
const initialFormState: BookingFormState = {
  fullName: '',
  email: '',
  MovingOn: '',
  pickUp: '',
  destination: '',
  moveTime: '',
  phoneNumber:'',
  moveType: 'Item Pick Up and Furniture Delivery',
  items: [],
  buildingType: '',
  floors: '',
  parkingStart: '',
  parkingEnd: '',
  service: '',
  distance:'',
};

// Create context
const BookingFormContext = createContext<{
  state: BookingFormState;
  dispatch: React.Dispatch<Action>;
} | undefined>(undefined);

// Define reducer function
// Define reducer function
const formReducer = (state: BookingFormState, action: Action): BookingFormState => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...state, [action.field]: action.value };
    case 'UPDATE_ITEMS':
      return { ...state, items: [...action.items] }; 
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

export const BookingFormProvider = ({ children }:{children: React.ReactNode}) => {
  const [state, dispatch] = useReducer(formReducer, initialFormState);

  return (
    <BookingFormContext.Provider value={{ state, dispatch }}>
      {children}
    </BookingFormContext.Provider>
  );
};


