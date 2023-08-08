// components/Accordion.tsx
import React from 'react';
import { CaretUp, CaretDown } from "@phosphor-icons/react";

interface AccordionProps {
  title: string;
  content: string | React.ReactNode;
  buttonClassName?: string;
  showContent?: string;
  isActive?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({ title, content, buttonClassName, showContent, isActive }) => {

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
      {(
        <div className={`p-4 border-t mt-10 ${showContent}`}>{content}</div>
      )}
    </div>
  );
};

export default Accordion;
