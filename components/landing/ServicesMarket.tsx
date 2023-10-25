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
    PawPrint,
    IdentificationCard,
    Buildings,
    Student
 } from "@phosphor-icons/react"
import { AdServicesCard } from "./custom/AdServicesCard"

export const ServicesMarket: React.FC = () => {

    return (
        <section className="max-w-6xl mx-auto mt-[90px] hidden sm:hidden lg:block">
            <h1 className="text-[#2E5F9E] p-4 md:p-0 font-extrabold text-2xl md:text-3xl text-center">Packmyload is your one-stop moving market place</h1>

            <p className="mt-4 p-4 md:p-0 text-xs md:text-base font-medium text-center">
                Through a quick chat, you can organize your entire move and access exculsive discounts from out verfiled vendors. <br /> Discover a world of benefits with us
            </p>

            <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 p-5 md:p-9">

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
                    text= "Travel & Protocol"
                />
                <AdServicesCard 
                    Icon = {<Toolbox size={28} color="#2e5f9e" weight="fill" />}
                    text= "Handy-Men"
                />
                <AdServicesCard 
                    Icon = {<Student size={28} color="#2e5f9e" weight="fill" />}
                    text= "School-search"
                />
                <AdServicesCard 
                    Icon = {<HouseLine size={28} color="#2e5f9e" weight="fill" />}
                    text= "Home-search"
                />
                <AdServicesCard 
                    Icon = {<CoatHanger size={28} color="#2e5f9e" weight="fill" />}
                    text= "Laundry"
                />
                <AdServicesCard 
                    Icon = {<Buildings size={28} color="#2e5f9e" weight="fill" />}
                    text= "Employee-relocation"
                />
                <AdServicesCard 
                    Icon = {<Suitcase size={28} color="#2e5f9e" weight="fill" />}
                    text= "Area Orientation"
                />
                <AdServicesCard 
                    Icon = {<Armchair size={28} color="#2e5f9e" weight="fill" />}
                    text= "Declutter"
                />
                <AdServicesCard 
                    Icon = {<IdentificationCard size={28} color="#2e5f9e" weight="fill" />}
                    text= "Visa/Travel Support"
                />
            </section>

            <br />
        </section>
    )
}