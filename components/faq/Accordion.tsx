// components/Accordion.tsx
import React from 'react';
import { CaretUp, CaretDown } from "@phosphor-icons/react";

interface AccordionProps {
  title: string;
  content: string | React.ReactNode;
  buttonClassName?: string;
  isActive?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({ title, content, buttonClassName, isActive }) => {

  let arrowButton = <CaretDown size={20}/>

  if(!!isActive) arrowButton = <CaretUp size={20}/>

  return (
    <div className="border rounded-md w-full mt-5">
        <button
            className={`w-full text-left p-4 focus:outline-none flex justify-between ${buttonClassName}`}
        >
            {title}
            <span className='bg-slate-1000'>
                {arrowButton}
            </span>
        </button>
        <div
            className={`overflow-hidden transition-all duration-500 ${
                isActive ? 'max-h-screen' : 'max-h-0'
              }`}
        >
            <div className={'p-4 border-t'}>{content}</div>
        </div>
    </div>
  );
};

export default Accordion;
