

export default function MovieMediaLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <div className="w-full min-h-[91vh] px-80 bg-neutral-200 flex flex-col items-center " >
            {children}
        </div>


    );
}
