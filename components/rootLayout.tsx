"use client"
import { useCity } from "@/hooks/CityProvider";
import Filters from "./Filters";

export default function NestedRootLayout({children}:Readonly<{children:React.ReactNode}>) {
    const {city}=useCity();
    return (
        <>
            {/* layout-1 */}
            {/* <div className=" w-full h-full flex gap-3" >
                  <div className=" w-[25%] h-full sticky top-[8vh] " >
                  <h2 className="text-xl leading-8 font-bold mt-4" >Filters</h2>
                  <Filters />
                  </div>
                  <div className=" w-full h-full " >
                  <h2 className="text-xl leading-8 font-bold mt-4" >Movies in Bengaluru</h2>
                  {children}
                  </div>
                  </div> */}

            {/* layout-2 */}
            <div className="w-full h-full" >
                {children}
            </div>
        </>

    )
}