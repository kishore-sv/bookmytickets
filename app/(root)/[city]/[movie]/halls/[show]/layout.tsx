import { Metadata } from "next";



export const metadata: Metadata = {
    title: "Show",
    description: "Movie Show Info",
};




export default function ShowLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>)
{

   

    return (

        <div className=" min-w-screen min-h-screen bg-neutral-100 absolute translate-y-[-9vh] z-[99999999]  " >
            {children}
        </div>


    );
}
