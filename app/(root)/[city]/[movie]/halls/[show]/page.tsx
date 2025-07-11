"use client"
import { useCity } from "@/hooks/CityProvider";
import { ChevronLeft, Pencil, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"



const Rows = ({ rowName, length }: { rowName: string, length: number }) => {
    const [selected, setSelected] = useState<boolean>(false)
    const [selectedI, setSelectedI] = useState<number>()
    return (
        <>
            <tr className=" gap-2 my-2 flex justify-center items-center min-w-full " >
                <th className=" mr-auto " >{rowName}</th>
                {
                    Array.from({ length: length }).map((_, i) => (
                        <td
                            onClick={() => {
                                setSelectedI(i)
                                setSelected(!selected)
                            }}
                            key={i} className={` ${(selectedI === i) ? " bg-green-500 text-neutral-100 " : ""} rounded-md border border-green-500 text-green-500 flex justify-center items-center cursor-pointer hover:bg-green-500 hover:text-neutral-100  w-6 h-6 `}>{i + 1}</td>

                    ))
                }
            </tr>
        </>

    )
}


export default function ShowPage() {

    const router = useRouter()
    useEffect(() => {
        document.body.classList.add("overflow-hidden");

        return () => {
            document.body.classList.remove("overflow-hidden");
        }
    }, [])
    // const { city } = useCity()

    return (
        <div className="w-full h-full" >
            <header className=" w-full px-4 h-[8vh] bg-white border-b border-neutral-500/50  flex justify-between items-center " >
                <div className="flex justify-center items-center gap-2" >
                    <button
                        onClick={() => router.back()}
                        className=" cursor-pointer " >
                        <ChevronLeft size={36} />
                    </button>
                    <div>
                        <h2 className=" font-[510] " >F1: The Movie (4DX)</h2>
                        <h2 className=" font-[500] text-sm " >PVR:Nexus (foremerly forum) kormalgala</h2>
                    </div>
                </div>
                <div className="flex  w-[15%] justify-between items-center gap-2">
                    <button className="py-1 px-2 text-sm  cursor-pointer hover:bg-neutral-200/50 transition-all ease-in-out border rounded-md border-neutral-500 flex justify-center items-center gap-1" >2 Tickets <Pencil size={14} /> </button>
                    <button
                        onClick={() => router.back()}
                        className="py-1 px-2 cursor-pointer hover:bg-neutral-200/50 rounded-md " ><X size={20} /> </button>
                </div>
            </header>
            <div className=" w-full h-[8vh] bg-neutral-200 px-16 gap-4 shadow-lg border-neutral-500/50  flex items-center " >
                <div className=" h-[5vh] w-[7vw]  rounded-[3px] transition-all ease-in-out  cursor-pointer border-2 bg-green-500  border-green-500 text-neutral-100 flex justify-center items-center text-sm font-medium  " >6:30 PM</div>
                <div className=" h-[5vh] w-[7vw] hover:bg-neutral-300 rounded-[3px] transition-all ease-in-out  cursor-pointer border-2  border-yellow-500 text-yellow-500 flex justify-center items-center text-sm font-medium  " >9:30 PM</div>
                <div className=" h-[5vh] w-[7vw] rounded-[3px] text-neutral-400  cursor-pointer border-2  border-neutral-400  flex justify-center items-center text-sm font-medium  " >6:30 PM</div>
            </div>



            <div className="seats w-full py-4 h-full px-100  " >
                <table className="" >
                    <tbody>
                        <tr className=" border-b border-neutral-500/20 text-neutral-400 text-sm my-3 " ><td>Rs. 330 ROYAL</td></tr>
                        <tr className=" gap-2 my-2 flex justify-center items-center min-w-full " >
                            <th className=" mr-40 " >M</th>
                            <td className=" rounded-md border border-green-500 text-green-500 flex justify-center items-center cursor-pointer hover:bg-green-500 hover:text-neutral-100  w-6 h-6 ">1</td>
                            <td className=" rounded-md border border-green-500 text-green-500 flex justify-center items-center cursor-pointer hover:bg-green-500 hover:text-neutral-100  w-6 h-6 ">2</td>
                            <td className=" rounded-md border border-green-500 text-green-500 flex justify-center items-center cursor-pointer hover:bg-green-500 hover:text-neutral-100  w-6 h-6 ">3</td>
                            <td className=" rounded-md border border-green-500 text-green-500 flex justify-center items-center cursor-pointer hover:bg-green-500 hover:text-neutral-100  w-6 h-6 ">4</td>
                            <td className=" rounded-md border border-neutral-200 text-neutral-50 bg-neutral-200/80 flex justify-center items-center cursor-pointer   w-6 h-6 ">5</td>
                            <td className=" rounded-md border border-neutral-200 text-neutral-50 bg-neutral-200/80 flex justify-center items-center cursor-pointer   w-6 h-6 ">6</td>
                            <td className=" rounded-md border border-neutral-200 text-neutral-50 bg-neutral-200/80 flex justify-center items-center cursor-pointer   w-6 h-6 ">7</td>
                            <td className=" rounded-md border border-neutral-200 text-neutral-50 bg-neutral-200/80 flex justify-center items-center cursor-pointer   w-6 h-6 ">8</td>
                            <td className=" rounded-md border border-neutral-200 text-neutral-50 bg-neutral-200/80 flex justify-center items-center cursor-pointer   w-6 h-6 ">9</td>
                            <td className=" rounded-md border border-green-500 text-green-500 flex justify-center items-center cursor-pointer hover:bg-green-500 hover:text-neutral-100  w-6 h-6 ">10</td>
                            <td className=" rounded-md border border-green-500 text-green-500 flex justify-center items-center cursor-pointer hover:bg-green-500 hover:text-neutral-100  w-6 h-6 ">11</td>
                            <td className=" rounded-md border border-neutral-200 text-neutral-50 bg-neutral-200/80 flex justify-center items-center cursor-pointer   w-6 h-6 ">12</td>
                            <td className=" rounded-md border border-neutral-200 text-neutral-50 bg-neutral-200/80 flex justify-center items-center cursor-pointer   w-6 h-6 ">13</td>
                            <td className=" rounded-md border border-green-500 text-green-500 flex justify-center items-center cursor-pointer hover:bg-green-500 hover:text-neutral-100  w-6 h-6 ">14</td>
                        </tr>

                        <tr className=" border-b border-neutral-500/20 text-neutral-400 text-sm my-3 " ><td>Rs. 220 CLUB</td></tr>
                        <tr className=" gap-2 my-2 flex justify-center items-center min-w-full " >
                            <th className=" mr-40 " >L</th>
                            <td className=" rounded-md border border-green-500 text-green-500 flex justify-center items-center cursor-pointer hover:bg-green-500 hover:text-neutral-100  w-6 h-6 ">1</td>
                            <td className=" rounded-md border border-green-500 text-green-500 flex justify-center items-center cursor-pointer hover:bg-green-500 hover:text-neutral-100  w-6 h-6 ">2</td>
                            <td className=" rounded-md border border-green-500 text-green-500 flex justify-center items-center cursor-pointer hover:bg-green-500 hover:text-neutral-100  w-6 h-6 ">3</td>
                            <td className=" rounded-md border border-green-500 text-green-500 flex justify-center items-center cursor-pointer hover:bg-green-500 hover:text-neutral-100  w-6 h-6 ">4</td>
                            <td className=" rounded-md border border-neutral-200 text-neutral-50 bg-neutral-200/80 flex justify-center items-center cursor-pointer   w-6 h-6 ">5</td>
                            <td className=" rounded-md border border-neutral-200 text-neutral-50 bg-neutral-200/80 flex justify-center items-center cursor-pointer   w-6 h-6 ">6</td>
                            <td className=" rounded-md border border-neutral-200 text-neutral-50 bg-neutral-200/80 flex justify-center items-center cursor-pointer   w-6 h-6 ">7</td>
                            <td className=" rounded-md border border-neutral-200 text-neutral-50 bg-neutral-200/80 flex justify-center items-center cursor-pointer   w-6 h-6 ">8</td>
                            <td className=" rounded-md border border-neutral-200 text-neutral-50 bg-neutral-200/80 flex justify-center items-center cursor-pointer   w-6 h-6 ">9</td>
                            <td className=" rounded-md border border-green-500 text-green-500 flex justify-center items-center cursor-pointer hover:bg-green-500 hover:text-neutral-100  w-6 h-6 ">10</td>
                            <td className=" rounded-md border border-green-500 text-green-500 flex justify-center items-center cursor-pointer hover:bg-green-500 hover:text-neutral-100  w-6 h-6 ">11</td>
                            <td className=" rounded-md border border-neutral-200 text-neutral-50 bg-neutral-200/80 flex justify-center items-center cursor-pointer   w-6 h-6 ">12</td>
                            <td className=" rounded-md border border-neutral-200 text-neutral-50 bg-neutral-200/80 flex justify-center items-center cursor-pointer   w-6 h-6 ">13</td>
                            <td className=" rounded-md border border-green-500 text-green-500 flex justify-center items-center cursor-pointer hover:bg-green-500 hover:text-neutral-100  w-6 h-6 ">14</td>
                        </tr>
                        <tr className=" gap-2 my-2 flex justify-center items-center min-w-full " >
                            <th className=" mr-40 " >K</th>
                            <td className=" rounded-md border border-green-500 text-green-500 flex justify-center items-center cursor-pointer hover:bg-green-500 hover:text-neutral-100  w-6 h-6 ">1</td>
                            <td className=" rounded-md border border-green-500 text-green-500 flex justify-center items-center cursor-pointer hover:bg-green-500 hover:text-neutral-100  w-6 h-6 ">2</td>
                            <td className=" rounded-md border border-green-500 text-green-500 flex justify-center items-center cursor-pointer hover:bg-green-500 hover:text-neutral-100  w-6 h-6 ">3</td>
                            <td className=" rounded-md border border-green-500 text-green-500 flex justify-center items-center cursor-pointer hover:bg-green-500 hover:text-neutral-100  w-6 h-6 ">4</td>
                            <td className=" rounded-md border border-neutral-200 text-neutral-50 bg-neutral-200/80 flex justify-center items-center cursor-pointer   w-6 h-6 ">5</td>
                            <td className=" rounded-md border border-neutral-200 text-neutral-50 bg-neutral-200/80 flex justify-center items-center cursor-pointer   w-6 h-6 ">6</td>
                            <td className=" rounded-md border border-neutral-200 text-neutral-50 bg-neutral-200/80 flex justify-center items-center cursor-pointer   w-6 h-6 ">7</td>
                            <td className=" rounded-md border border-neutral-200 text-neutral-50 bg-neutral-200/80 flex justify-center items-center cursor-pointer   w-6 h-6 ">8</td>
                            <td className=" rounded-md border border-neutral-200 text-neutral-50 bg-neutral-200/80 flex justify-center items-center cursor-pointer   w-6 h-6 ">9</td>
                            <td className=" rounded-md border border-green-500 text-green-500 flex justify-center items-center cursor-pointer hover:bg-green-500 hover:text-neutral-100  w-6 h-6 ">10</td>
                            <td className=" rounded-md border border-green-500 text-green-500 flex justify-center items-center cursor-pointer hover:bg-green-500 hover:text-neutral-100  w-6 h-6 ">11</td>
                            <td className=" rounded-md border border-neutral-200 text-neutral-50 bg-neutral-200/80 flex justify-center items-center cursor-pointer   w-6 h-6 ">12</td>
                            <td className=" rounded-md border border-neutral-200 text-neutral-50 bg-neutral-200/80 flex justify-center items-center cursor-pointer   w-6 h-6 ">13</td>
                            <td className=" rounded-md border border-green-500 text-green-500 flex justify-center items-center cursor-pointer hover:bg-green-500 hover:text-neutral-100  w-6 h-6 ">14</td>
                        </tr>

                        <Rows rowName="J" length={14} />
                        <Rows rowName="H" length={14} />
                        <Rows rowName="G" length={14} />

                        <tr className=" border-b border-neutral-500/20 text-neutral-400 text-sm my-3 " ><td>Rs. 190 EXECUTIVE</td></tr>
                        <Rows rowName="F" length={14} />
                        <Rows rowName="E" length={14} />
                        <Rows rowName="D" length={14} />
                        <Rows rowName="C" length={14} />
                        <Rows rowName="B" length={14} />
                        <Rows rowName="A" length={14} />
                    </tbody>

                </table>
                <div className=" w-[125%] flex flex-col justify-center items-center h-[4vh]  mt-10 " >
                    <div className="bg-blue-300 w-[30%] h-full rounded-md "></div>
                    <p className="text-center" >All eyes this way please!</p>
                </div>
            </div>

            <div className="w-full h-[10vh] py-2 border-t border-neutral-500/50 shadow-2xl shadow-neutral-950 flex justify-center items-center  " >
                <button
                    onClick={() => router.push(`cinemaHallIDwillComeHere/payment`)}
                    className="cursor-pointer  " >
                    <div className="bg-[var(--primary-color)] hover:bg-[var(--primary-color)]/90 transition-all ease-in-out text-lg font-medium rounded-md cursor-pointer text-white py-2 px-20" >Pay Rs.1000</div>
                </button>
            </div>

        </div>
    )
}