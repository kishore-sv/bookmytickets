import { Metadata } from "next";



export const metadata: Metadata = {
    title: "Movie",
    description: "Movie Info",
};




export default function MovieLayout({
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
