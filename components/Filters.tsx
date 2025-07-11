export default function Filters() {
    return (
        <div className="w-full h-[16vh] " >


            <div className=" w-full h-1/3 flex items-center gap-2 overflow-x-scroll scroll-smooth " >
                <button className=" rounded-3xl transition-all ease-in border border-neutral-500/50 text-[var(--primary-color)] cursor-pointer hover:bg-[var(--primary-color)] hover:text-white py-[2px] px-3 " >Telugu</button>
                <button className=" rounded-3xl transition-all ease-in border border-neutral-500/50 text-[var(--primary-color)] cursor-pointer hover:bg-[var(--primary-color)] hover:text-white py-[2px] px-3 " >Kannada</button>
                <button className=" rounded-3xl transition-all ease-in border border-neutral-500/50 text-[var(--primary-color)] cursor-pointer hover:bg-[var(--primary-color)] hover:text-white py-[2px] px-3 " >English</button>
                <button className=" rounded-3xl transition-all ease-in border border-neutral-500/50 text-[var(--primary-color)] cursor-pointer hover:bg-[var(--primary-color)] hover:text-white py-[2px] px-3 " >Tamil</button>
                <button className=" rounded-3xl transition-all ease-in border border-neutral-500/50 text-[var(--primary-color)] cursor-pointer hover:bg-[var(--primary-color)] hover:text-white py-[2px] px-3 " >Hindi</button>
            </div>

            <div className=" w-full h-1/3 flex items-center gap-2 overflow-x-scroll scroll-smooth " >
                <button className=" rounded-3xl transition-all ease-in border border-neutral-500/50 text-[var(--primary-color)] cursor-pointer hover:bg-[var(--primary-color)] hover:text-white py-[2px] px-3 " >Drama</button>
                <button className=" rounded-3xl transition-all ease-in border border-neutral-500/50 text-[var(--primary-color)] cursor-pointer hover:bg-[var(--primary-color)] hover:text-white py-[2px] px-3 " >Comedy</button>
                <button className=" rounded-3xl transition-all ease-in border border-neutral-500/50 text-[var(--primary-color)] cursor-pointer hover:bg-[var(--primary-color)] hover:text-white py-[2px] px-3 " >Thriller</button>
                <button className=" rounded-3xl transition-all ease-in border border-neutral-500/50 text-[var(--primary-color)] cursor-pointer hover:bg-[var(--primary-color)] hover:text-white py-[2px] px-3 " >Horror</button>
                <button className=" rounded-3xl transition-all ease-in border border-neutral-500/50 text-[var(--primary-color)] cursor-pointer hover:bg-[var(--primary-color)] hover:text-white py-[2px] px-3 " >Crime</button>
            </div>

            <div className=" w-full h-1/3 flex items-center gap-2 overflow-x-scroll scroll-smooth " >
                <button className=" rounded-3xl transition-all ease-in border border-neutral-500/50 text-[var(--primary-color)] cursor-pointer hover:bg-[var(--primary-color)] hover:text-white py-[2px] px-3 " >2D</button>
                <button className=" rounded-3xl transition-all ease-in border border-neutral-500/50 text-[var(--primary-color)] cursor-pointer hover:bg-[var(--primary-color)] hover:text-white py-[2px] px-3 " >3D</button>
                <button className=" rounded-3xl transition-all ease-in border border-neutral-500/50 text-[var(--primary-color)] cursor-pointer hover:bg-[var(--primary-color)] hover:text-white py-[2px] px-3 " >4DX</button>
                <button className=" rounded-3xl transition-all ease-in border border-neutral-500/50 text-[var(--primary-color)] cursor-pointer hover:bg-[var(--primary-color)] hover:text-white py-[2px] px-3 " >IMAX 2D</button>
                <button className=" rounded-3xl transition-all ease-in border border-neutral-500/50 text-[var(--primary-color)] cursor-pointer hover:bg-[var(--primary-color)] hover:text-white py-[2px] px-3 " >IMAX 3D</button>
            </div>


        </div>
    )
}