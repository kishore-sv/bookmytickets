import Link from "next/link";
import React, { useEffect, useRef } from "react";


type CityModalProps = {
    open: boolean;
    setOpen: (val: boolean) => void;
    setCity: (val: string) => void;
    city: string;
};

const Cities = [
    {
        img: "/assests/bengaluru.jpg",
        name: "bengaluru"
    },
    {
        img: "/assests/hyd.jpg",
        name: "hyderabad"
    },
    {
        img: "/assests/chennai.jpg",
        name: "chennai"
    },
    {
        img: "/assests/kochi.jpg",
        name: "kochi"
    },
    {
        img: "/assests/mumbai.jpg",
        name: "mumbai"
    },
]


const CityModal: React.FC<CityModalProps> = ({ open, setOpen, setCity, city }) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const presentCity = city

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        }

        function handleEscape(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setOpen(false);
            }
        }

        if (open) {
            document.body.classList.add("overflow-hidden");
            document.addEventListener("mousedown", handleClickOutside);
            document.addEventListener("keydown", handleEscape);
        }

        return () => {
            document.body.classList.remove("overflow-hidden");
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscape);
        };
    }, [open]);

    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-neutral-900/50  z-[99999] flex justify-center pt-20 ">
            <div
                ref={modalRef}
                className="animate-slide-down w-[70%]  flex flex-col items-center h-50 bg-white text-neutral-900   rounded-lg p-4"
            >
                <h3 className="text-xl font-semibold"  >Popular Cities</h3>
                <div className="flex justify-evenly items-center w-full mt-4 " >
                    {Cities.map((city, idx) => (
                        <Link href={`/${city.name}`} onClick={() => {
                            setOpen(false)
                            setCity(city.name)
                        }} key={city.name} className=" bg-white  cursor-pointer flex flex-col gap-2 items-center ">
                            <img src={city.img} draggable="false" alt={city.name} loading="lazy" className="w-20 h-20 bg-neutral-50 " />
                            <p className={` ${city.name === presentCity ? "text-red-400" : "text-neutral-900"} hover:bg-neutral-200/50 py-1 px-2 rounded-md  text-lg capitalize  `}  >{city.name}</p>
                        </Link>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default CityModal;
