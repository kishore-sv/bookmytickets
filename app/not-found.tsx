import Link from 'next/link'
import "@/app/(root)/[city]/globals.css"

export default function NotFound() {
    return (
        <div className=' w-full h-screen bg-neutral-200  flex flex-col justify-center items-center '  >
            <img draggable="false" src="/icon.svg" alt="logo" className=' selection:bg-[var(--primary-color)] h-full w-full' />
            <div className='absolute translate-y-30 rounded-b-2xl h-70 w-130 gap-3  p-3 flex flex-col justify-center items-center ' >
                <h2 className='text-2xl text-neutral-800 font-bold text-center ' >Could Not Find The Page <br />Your Looking For  </h2>
                <Link href="/" className=' transition-all ease-in-out text-center font-semibold border border-neutral-900 hover:bg-neutral-100 hover:text-[var(--primary-color)] py-1 px-2 rounded-md' >
                    Go Back To Home
                </Link>

            </div>
        </div>
    )
}