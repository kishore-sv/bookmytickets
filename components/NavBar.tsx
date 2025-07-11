"use client"
import { ChevronDown, Clapperboard, Menu, Search } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import CityModal from "./modals/CityModal";
import MenuModal from "./modals/MenuModal";
import { useCity } from "@/hooks/CityProvider";
import AuthModal from "./modals/AuthModal";

export default function NavBar() {
    const [cityOpen, setCityOpen] = useState<boolean>(false);
    // const [city, setCity] = useState<string>("Bengaluru");
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [authOpen, setAuthOpen] = useState<boolean>(false);

    const { city, setCity } = useCity();



    return (
        <>
            <CityModal open={cityOpen} setOpen={setCityOpen} setCity={setCity} city={city} />
            <MenuModal open={menuOpen} setOpen={setMenuOpen} />
            <AuthModal open={authOpen} setOpen={setAuthOpen} />
            <nav className=" w-full h-[8vh] bg-white/80 shadow-lg z-99 backdrop-blur-md px-20 py-3 flex justify-between items-center sticky top-0 border-b-[0.5px] border-neutral-500/20 mt-2   " >

                <section className=" w-[55%] h-full flex items-center gap-4 " >
                    <Link href="/" className="flex justify-center cursor-pointer items-center">
                        <Clapperboard fill="#f84464" className="mb-1" size={35} />
                        <h1 className="text-xl font-bold" >bookmytickets</h1>
                    </Link>
                    <div className="w-full  border border-neutral-500/50 rounded-sm flex gap-3 py-1 px-2 items-center " >
                        <Search size={16} />
                        <input type="text" placeholder="Search for movies..." className="w-full outline-none  " />
                    </div>
                </section>

                <section className=" w-[25%] h-full flex gap-6 justify-center  items-center " >
                    <button onClick={() => setCityOpen(!cityOpen)} className="cursor-pointer hover:bg-neutral-200/50 rounded-md transition-all ease-in-out py-1 px-3 " >
                        <div className=" flex justify-center items-center cursor-pointer capitalize " >{city} <ChevronDown /></div>
                    </button>
                    <button onClick={() => setAuthOpen(!authOpen)} className="cursor-pointer" >
                        <div className="bg-[var(--primary-color)] hover:bg-[var(--primary-color)]/90 transition-all ease-in-out rounded-md cursor-pointer text-white py-1 px-3" >Sign in</div>
                    </button>
                    <button onClick={() => setMenuOpen(!menuOpen)} className=" cursor-pointer hover:bg-neutral-200/50 rounded-md transition-all ease-in-out py-1 px-3 " >
                        <Menu />
                    </button>
                </section>


            </nav>
        </>
    )
}


// bg-[var(--primary-color)]