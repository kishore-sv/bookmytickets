"use client"
import { useCity } from "@/hooks/CityProvider";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Hall() {
    const searchParams = useSearchParams();
    const movieName = searchParams.get("movie");

    const router = useRouter()
    const { city } = useCity()
    const path = usePathname()
    const moveiId = path.split("/")[2]

    return (
        <section className=" w-full h-full  " >
            <div className=" w-full h-[10vh] px-40 flex items-center  border-b border-neutral-500/50 " >
                <h2 className="text-3xl font-bold" >{movieName}</h2>
            </div>
            <div className=" w-full  shadow-lg h-[12vh] px-40 flex items-center gap-1  border-b border-neutral-500/50 " >
                <div className=" h-[90%] bg-[var(--primary-color)]  cursor-pointer flex justify-center items-center flex-col rounded-md w-[4.5vw]  " >
                    <p className="text-md font-light" >Thu</p>
                    <p className=" text-xl font-semibold " >03</p>
                    <p className="text-md font-light" >JUL</p>
                </div>
                <div className=" h-[90%] cursor-pointer hover:bg-neutral-200/50 rounded-md transition-all ease-in-out  flex justify-center items-center flex-col w-[4.5vw]  " >
                    <p className="text-md font-light" >Fri</p>
                    <p className=" text-xl font-semibold " >04</p>
                    <p className="text-md font-light" >JUL</p>
                </div><div className=" h-[90%] cursor-pointer hover:bg-neutral-200/50 rounded-md transition-all ease-in-out  flex justify-center items-center flex-col  w-[4.5vw]  " >
                    <p className="text-md font-light" >Sat</p>
                    <p className=" text-xl font-semibold " >05</p>
                    <p className="text-md font-light" >JUL</p>
                </div>
            </div>

            <div className="w-full pt-4 min-h-[68vh] px-40 bg-neutral-100 scroll-smooth overflow-x-scroll" >

                <div className="flex w-full border-b px-10  border-neutral-500/50 py-4 min-h-[16vh] bg-white" >
                    <h3 className=" text-md font-[510] h-full w-[25%]  " >PVR:Nexus (foremerly forum) kormalgala</h3>
                    <div className=" h-full flex flex-wrap gap-3 w-[80%] " >
                        <button
                            onClick={() => router.push(`/${city}/${moveiId}/halls/cinemaHallIDwillComeHere`)}
                            className=" h-[5vh] w-[7vw] hover:bg-neutral-200/50 rounded-[3px] transition-all ease-in-out   cursor-pointer border-2 border-l-5 border-green-500 flex justify-center items-center text-sm font-medium  " >3:30 PM</button>
                        <div className=" h-[5vh] w-[7vw] rounded-[3px] text-neutral-400  cursor-pointer border-2 border-l-5 border-neutral-400  flex justify-center items-center text-sm font-medium  " >6:30 PM</div>
                        <div className=" h-[5vh] w-[7vw] hover:bg-neutral-200/50 rounded-[3px] transition-all ease-in-out  cursor-pointer border-2 border-l-5 border-green-500 flex justify-center items-center text-sm font-medium  " >6:30 PM</div>
                        <div className=" h-[5vh] w-[7vw] hover:bg-neutral-200/50 rounded-[3px] transition-all ease-in-out  cursor-pointer border-2 border-l-5 border-yellow-500 flex justify-center items-center text-sm font-medium  " >9:30 PM</div>
                    </div>
                </div>


                <div className="flex w-full border-b px-10  border-neutral-500/50 py-4 min-h-[16vh] bg-white" >
                    <h3 className=" text-md font-[510] h-full w-[25%]  " >Balaji Cinema 4k Dolby Atoms RGB Laser:Tavarekere</h3>
                    <div className=" h-full flex flex-wrap gap-3 w-[80%] " >
                        <div className=" h-[5vh] w-[7vw] hover:bg-neutral-200/50 rounded-[3px] transition-all ease-in-out   cursor-pointer border-2 border-l-5 border-green-500 flex justify-center items-center text-sm font-medium  " >3:30 PM</div>
                        <div className=" h-[5vh] w-[7vw] hover:bg-neutral-200/50 rounded-[3px] transition-all ease-in-out  cursor-pointer border-2 border-l-5 border-green-500 flex justify-center items-center text-sm font-medium  " >6:30 PM</div>
                        <div className=" h-[5vh] w-[7vw] hover:bg-neutral-200/50 rounded-[3px] transition-all ease-in-out  cursor-pointer border-2 border-l-5 border-green-500 flex justify-center items-center text-sm font-medium  " >6:30 PM</div>
                        <div className=" h-[5vh] w-[7vw] hover:bg-neutral-200/50 rounded-[3px] transition-all ease-in-out  cursor-pointer border-2 border-l-5 border-yellow-500 flex justify-center items-center text-sm font-medium  " >9:30 PM</div>
                    </div>
                </div>
                <CinemaHallContainer name={"Ganesh 4k Cinema Dolby Atoms:Yelahanka"} numberOfShows={[{ show: "10:00 AM", status: "full" }, { show: "1:00 PM", status: "empty" }, { show: "4:00 PM", status: "filling" }, { show: "7:00 PM", status: "empty" }, { show: "10:00 PM", status: "empty" }]} />

                <div className="flex w-full border-b px-10  border-neutral-500/50 py-4 min-h-[16vh] bg-white" >
                    <h3 className=" text-md font-[510] h-full w-[25%]  " >INOX: Nexus, Whitefield</h3>
                    <div className=" h-full flex flex-wrap gap-3 w-[80%]  " >
                        <div className=" h-[5vh] w-[7vw] hover:bg-neutral-200/50 rounded-[3px] transition-all ease-in-out   cursor-pointer border-2 border-l-5 border-green-500 flex justify-center items-center text-sm font-medium  " >3:30 PM</div>
                        <div className=" h-[5vh] w-[7vw] hover:bg-neutral-200/50 rounded-[3px] transition-all ease-in-out   cursor-pointer border-2 border-l-5 border-green-500 flex justify-center items-center text-sm font-medium  " >3:30 PM</div>
                        <div className=" h-[5vh] w-[7vw] hover:bg-neutral-200/50 rounded-[3px] transition-all ease-in-out   cursor-pointer border-2 border-l-5 border-green-500 flex justify-center items-center text-sm font-medium  " >3:30 PM</div>
                        <div className=" h-[5vh] w-[7vw] hover:bg-neutral-200/50 rounded-[3px] transition-all ease-in-out   cursor-pointer border-2 border-l-5 border-green-500 flex justify-center items-center text-sm font-medium  " >3:30 PM</div>
                        <div className=" h-[5vh] w-[7vw] hover:bg-neutral-200/50 rounded-[3px] transition-all ease-in-out  cursor-pointer border-2 border-l-5 border-green-500 flex justify-center items-center text-sm font-medium  " >6:30 PM</div>
                        <div className=" h-[5vh] w-[7vw] hover:bg-neutral-200/50 rounded-[3px] transition-all ease-in-out  cursor-pointer border-2 border-l-5 border-green-500 flex justify-center items-center text-sm font-medium  " >6:30 PM</div>
                        <div className=" h-[5vh] w-[7vw] hover:bg-neutral-200/50 rounded-[3px] transition-all ease-in-out  cursor-pointer border-2 border-l-5 border-green-500 flex justify-center items-center text-sm font-medium  " >6:30 PM</div>
                        <div className=" h-[5vh] w-[7vw] hover:bg-neutral-200/50 rounded-[3px] transition-all ease-in-out  cursor-pointer border-2 border-l-5 border-green-500 flex justify-center items-center text-sm font-medium  " >6:30 PM</div>
                        <div className=" h-[5vh] w-[7vw] hover:bg-neutral-200/50 rounded-[3px] transition-all ease-in-out  cursor-pointer border-2 border-l-5 border-yellow-500 flex justify-center items-center text-sm font-medium  " >9:30 PM</div>
                    </div>
                </div>


            </div>

        </section>
    )
}



const CinemaHallContainer = ({ name, numberOfShows }: { name: string, numberOfShows: any[] }) => {

    const router = useRouter()
    const { city } = useCity()
    const path = usePathname()
    const moveiId = path.split("/")[2]


    return (
        <div className="flex w-full border-b px-10  border-neutral-500/50 py-4 min-h-[16vh] bg-white" >
            <h3 className=" text-md font-[510] h-full w-[25%]  " >{name}</h3>
            <div className=" h-full flex flex-wrap gap-3 w-[80%] " >
                {
                    numberOfShows.map((show, idx) => (
                        <button
                            onClick={() =>{
                                if(show.status ==="empty" || show.status==="filling" ) return router.push(`/${city}/${moveiId}/halls/cinemaHallIDwillComeHere`)
                                alert("show is full")
                                }}
                            key={idx}
                            // title={`
                            // ${show.status === "full" && "Sold Out"}
                            // ${show.status === "empty" && "Available"}
                            // ${show.status === "filling" && "Almost Full"}
                            // `}
                            className={` 
                            ${show.status === "full" && "border-neutral-400 text-neutral-400   "}
                            ${show.status === "empty" && "border-green-500 hover:bg-neutral-200/50 "}
                            ${show.status === "filling" && "border-yellow-500 hover:bg-neutral-200/50"}
                            h-[5vh] w-[7vw]  rounded-[3px] transition-all ease-in-out cursor-pointer border-2 border-l-5  flex justify-center items-center text-sm font-medium `} >{show.show}</button>
                    ))
                }
            </div>
        </div>
    )
}