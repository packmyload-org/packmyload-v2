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
}

// Define action types
type Action =
  | { type: 'UPDATE_FIELD'; field: string; value: string };

// Define initial form state
const initialFormState: BookingFormState = {
  fullName: '',
  email: '',
  MovingOn: '',
  pickUp: '',
  destination: '',
  moveTime: '',
  phoneNumber:'',
};

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
    // case 'PICKUP_FIELD_ERROR':
    //   return {...state, [action.field]: 'Not available in this location'}
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


