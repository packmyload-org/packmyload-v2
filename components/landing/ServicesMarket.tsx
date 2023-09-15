import { 
    Package,
    PlugsConnected,
    Warehouse,
    SuitcaseRolling,
    Toolbox,
    HandHeart,
    HouseLine,
    CoatHanger,
    Bed,
    Suitcase,
    Armchair,
    PawPrint
 } from "@phosphor-icons/react"
import { AdServicesCard } from "./custom/AdServicesCard"
export const ServicesMarket: React.FC = () => {

    return (
        <section className="max-w-6xl mx-auto mt-[90px]">
            <h1 className="text-[#2E5F9E] font-extrabold text-xl md:text-3xl text-center">Packmyload is your one-stop moving market place</h1>

            <p className="mt-4 text-xs md:text-base font-medium text-center">
                Through a quick chat, you can organize your entire move and access exculsive discounts from out verfiled vendors. <br /> Discover a world of benefits with us
            </p>

            <section className="grid grid-cols-2 md:grid-cols-4 gap-8 p-5 md:p-9">

                <AdServicesCard 
                    Icon = {<Package size={28} color="#2E5F9E" weight="fill" />}
                    text= "Moving Services"
                />
                <AdServicesCard 
                    Icon = {<PlugsConnected size={28} color="#2E5F9E" weight="fill" />}
                    text= "Connect utilities"
                />
                <AdServicesCard 
                    Icon = {<Warehouse size={28} color="#2e5f9e" weight="fill" />}
                    text= "Storage"
                />
                <AdServicesCard 
                    Icon = {<SuitcaseRolling size={28} color="#2e5f9e" weight="fill" />}
                    text= "Travel"
                />
                <AdServicesCard 
                    Icon = {<Toolbox size={28} color="#2e5f9e" weight="fill" />}
                    text= "Handy-Men"
                />
                <AdServicesCard 
                    Icon = {<HandHeart size={28} color="#2e5f9e" weight="fill" />}
                    text= "Care-Givers"
                />
                <AdServicesCard 
                    Icon = {<HouseLine size={28} color="#2e5f9e" weight="fill" />}
                    text= "Real-Estate"
                />
                <AdServicesCard 
                    Icon = {<CoatHanger size={28} color="#2e5f9e" weight="fill" />}
                    text= "Laundry"
                />
                <AdServicesCard 
                    Icon = {<Bed size={28} color="#2e5f9e" weight="fill" />}
                    text= "Mattresses"
                />
                <AdServicesCard 
                    Icon = {<Suitcase size={28} color="#2e5f9e" weight="fill" />}
                    text= "Packing Supplies"
                />
                <AdServicesCard 
                    Icon = {<Armchair size={28} color="#2e5f9e" weight="fill" />}
                    text= "Furniture"
                />
                <AdServicesCard 
                    Icon = {<PawPrint size={28} color="#2e5f9e" weight="fill" />}
                    text= "Pet-Care"
                />
            </section>

            <br />
        </section>
    )
}