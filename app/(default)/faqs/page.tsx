"use client";
import React, {useState} from "react";
import Accordion from "@/components/faq/Accordion";
import accordionOb from "@/components/faq/accordionItems.json";


interface Item {
    id: number;
    title: string;
    content: string
}
  
const fitems: Item[] = accordionOb.firstItems;
const sitems: Item[] = accordionOb.secondItems;

export default function Faqs(){
    const [activeId,setActiveId] = useState(1);

    const toggleAccordion = (itemId: number) => {
        if(activeId === itemId) return true

        return false
    }

    const handleItemClick = (itemId: number) => {
        if(activeId === itemId) setActiveId(0)

        else setActiveId(itemId);

        toggleAccordion(itemId)

    };

    const firstItems = fitems.map((acc) => (
        <div key={acc.id} onClick={() => handleItemClick(acc.id)} className= "w-full"
        >
            <Accordion 
                title = {acc.title} content={acc.content} buttonClassName = {`${
                activeId === acc.id ? 'bg-sky-400 text-white' : 'bg-white'}`} isActive = {toggleAccordion(acc.id)}
            />
        </div>
    ))
    const secondItems = sitems.map((acc) => (
        <div key={acc.id} onClick={() => handleItemClick(acc.id)} className= "w-full"
        >
            <Accordion 
                title = {acc.title} content={acc.content} buttonClassName = {`${
                activeId === acc.id ? 'bg-sky-400 text-white' : 'bg-white'}`} isActive = {toggleAccordion(acc.id)} 
            />
        </div>
    ))
    return(
        <>
            <div className="container pb-10 w-full" style={{marginTop: '140px'}}>
                <div className="section-title w-full relative  ">

                    <div className='gap-6 flex flex-col'>
                        <h2 className="w-full font-bold text-2xl md:text-3xl lg:text-4xl text-center mt-2">FAQ</h2>
                        <div className="section-subtitle text-3xl md:text-4xl lg:text-[3.4rem] uppercase font-bold">popular questions</div>
                        <span className="section-separator"></span>
                        <p className='w-full text-center '>Quick and Easy Answers at your Fingertips.</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4 w-full mt-10">
                    <div className="flex-1">    
                        {firstItems}    
                    </div>
                    <div className="flex-1">  
                        {secondItems}
                    </div>
                </div>
            </div>
        </>
    )
}