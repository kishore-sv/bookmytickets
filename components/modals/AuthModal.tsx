import { LocationEdit, X } from "lucide-react";
import React, { useEffect, useRef } from "react";


type MenuModalProps = {
    open: boolean;
    setOpen: (val: boolean) => void;
};




const AuthModal: React.FC<MenuModalProps> = ({ open, setOpen }) => {
    const modalRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        if (open) {
            document.body.classList.add("overflow-hidden");
        }
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [open]);

    if (!open) return null;


    return (
        <div className="fixed inset-0 bg-neutral-900/50 flex justify-center items-center z-[99999]  ">
            <div
                ref={modalRef}
                className="w-[30%] animate-slide-down h-[60vh] flex flex-col items-center  bg-neutral-100 text-neutral-900 rounded-lg p-4"
            >
                <div className=" flex justify-between items-center w-full h-10 " >
                    <p className="text-xl font-semibold  " >Get Start</p>
                    <button onClick={() => setOpen(false)} className="py-1 px-2 hover:bg-neutral-200/50 rounded-md transition-all ease-in-out  cursor-pointer" >
                        <X />
                    </button>
                </div>


            </div>
        </div>
    );
};

export default AuthModal;
