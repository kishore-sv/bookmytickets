"use client"
import { Clapperboard } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PaymentPage() {
    const [number, setNumber] = useState<string>("")
    const [numberError, setNumberError] = useState<boolean>(false)

    const router=useRouter()

    return (
        <section className="min-w-screen min-h-screen " >
            <header className=" w-full h-[8vh] bg-white/80 shadow-lg z-99 backdrop-blur-md px-20 py-3 flex justify-between items-center sticky top-0 border-b-[0.5px] border-neutral-500/50 " >
                <div className=" w-[55%] h-full flex items-center gap-4 " >
                    <Link href="/" className="flex justify-center cursor-pointer items-center">
                        <Clapperboard fill="#f84464" className="mb-1" size={35} />
                        <h1 className="text-xl font-bold" >bookmytickets</h1>
                    </Link>
                </div>
            </header>

            <div className="  w-full h-full px-40 flex justify-center items-center " >


                <div className=" px-4 py-10 h-[92vh] w-1/2 flex flex-col gap-4  items-center   border-r border-neutral-500/50 " >

                    <label className="text-xl font-[600] capitalize" >Share your Contact Number to send ticket</label>
                    <input
                        value={number}
                        onChange={(e) => {
                            const value = e.target.value;

                            // Only allow digits (0-9)
                            if (/^\d*$/.test(value)) {
                                setNumber(value);
                            }
                        }}
                        type="text" placeholder="Mobile Number" className=" placeholder:text-[18px] rounded-md outline-none text-2xl px-4 w-[35%] py-2 border focus:border-neutral-900 border-neutral-400 " />
                    <div className="w-full h-120  flex justify-center items-center  overflow-hidden rounded-md" >
                        <img src="/payment.png" draggable="false" className="scale-[.7] selection:bg-transparent rounded-md object-cover " alt="" />
                    </div>
                    <button
                        onClick={() => router.push(`tickets/Thammudu`)}
                        className="cursor-pointer  " >
                        <div className="bg-[var(--primary-color)] hover:bg-[var(--primary-color)]/90 transition-all ease-in-out text-lg font-medium rounded-md cursor-pointer text-white py-2 px-20" >Pay Rs.1000</div>
                    </button>

                </div>

                <div className=" h-[92vh] w-1/2 px-20 py-10  " >
                    <div className=" w-full h-[69%] overflow-hidden  rounded-md py-3 border border-neutral-500/50 " >
                        <div className="px-4 w-full" >
                            <h4 className=" text-lg  ">Ticket Summary</h4>
                            <div className=" flex w-full justify-between mt-6 items-center " >
                                <div>
                                    <h5 className=" text-xl font-[510] " >Thammudu (A)</h5>
                                    <p className="text-neutral-600">Telugu, 2D</p>
                                </div>
                                <p className=" text-2xl font-[510] flex flex-col justify-center items-center " >5 <span className="text-[18px] font-medium text-neutral-600" > Tickets</span></p>
                            </div>
                            <p className="mt-6 text-neutral-600">PVR: Nexus (Formerly Forum), Koramangala (AUDI 9)</p>
                            <div className="w-full mt-6 " >
                                <p>C:11,C:12</p>
                                <p>Fri,04,Jul,2025</p>
                                <p>07:10 PM</p>
                            </div>
                            <div className=" w-full mt-10 text-neutral-600 flex justify-between items-center " >
                                <p>Subtotal</p>
                                <p>Rs. 500</p>
                            </div>
                        </div>
                        <div className=" border-t bg-neutral-200 px-4 border-neutral-500/50 py-2 text-xl w-full mt-10 flex justify-between items-center " >
                            <p className="font-[510]">Total</p>
                            <p className="font-bold">Rs. 500</p>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}