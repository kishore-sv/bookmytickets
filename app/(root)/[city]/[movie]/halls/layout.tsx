import { Metadata } from "next";



export const metadata: Metadata = {
    title: "Cinema Halls",
    description: "Movie Cinema halls Info",
};




export default function HallLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <>
            {children}
        </>


    );
}
