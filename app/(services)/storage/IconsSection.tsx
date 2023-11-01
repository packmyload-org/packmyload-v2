"use client"
import { 
    RocketLaunch,
    WifiHigh,
    Motorcycle,
    Cloud,
    ShoppingCart,
    PawPrint,
    TreeEvergreen,
    Wheelchair
} from '@phosphor-icons/react';

export const IconsSection: React.FC = () => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
            <section className='flex items-start gap-2'>
                <RocketLaunch size={25} color="#4db7fe" weight="fill" />
                <span className='text-[#878C9F] mt-[3px] font-medium'>200+ units- different sizes</span>
            </section>
            <section className='flex items-start gap-2'>
                <WifiHigh size={25} color="#4db7fe" />
                <span className='text-[#878C9F] mt-[3px] font-medium'>facilities in Lagos</span>
            </section>
            <section className='flex items-start gap-2'>
                <Motorcycle size={28} color="#4db7fe" weight="fill" />
                <span className='text-[#878C9F] mt-[3px] font-medium'>Easy Access</span>
            </section>
            <section className='flex items-start gap-2'>
                <Cloud size={25} color="#4db7fe" weight="fill" />
                <span className='text-[#878C9F] mt-[3px] font-medium'>Modern, clean facilities</span>
            </section>
            <section className='flex items-start gap-2'>
                <ShoppingCart size={25} color="#4db7fe" weight="fill" />
                <span className='text-[#878C9F] mt-[3px] font-medium'>No minimum stay</span>
            </section>
            <section className='flex items-start gap-2'>
                <PawPrint size={25} color="#4db7fe" weight="fill" />   
                <span className='text-[#878C9F] mt-[3px] font-medium'>Long term discounts</span>
            </section>
            <section className='flex items-start gap-2'>
                <TreeEvergreen size={25} color="#4db7fe" weight="fill" />   
                <span className='text-[#878C9F] mt-[3px] font-medium'>Containers, warehousing</span>
            </section>
            <section className='flex items-start gap-2'>
                <Wheelchair size={25} color="#4db7fe" weight="fill" />  
                <span className='text-[#878C9F] mt-[3px] font-medium'>Archiving</span>
            </section>
            <section className='flex items-start gap-2'>
                <Wheelchair size={25} color="#4db7fe" weight="fill" />  
                <span className='text-[#878C9F] mt-[3px] font-medium'>Daily/weekly Storage</span>
            </section>
        </div>
    )
}