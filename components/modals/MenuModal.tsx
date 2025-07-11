import { LocationEdit } from "lucide-react";
import React, { useEffect, useRef } from "react";


type MenuModalProps = {
    open: boolean;
    setOpen: (val: boolean) => void;
};




const MenuModal: React.FC<MenuModalProps> = ({ open, setOpen }) => {
    const modalRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        }

        function handleEscape(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setOpen(false);
            }
        }

        if (open) {
            document.body.classList.add("overflow-hidden");
            document.addEventListener("mousedown", handleClickOutside);
            document.addEventListener("keydown", handleEscape);
        }

        return () => {
            document.body.classList.remove("overflow-hidden");
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscape);
        };
    }, [open]);

    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-neutral-900/50 flex justify-end  z-[99999]  ">
            <div
                ref={modalRef}
                className="w-[25%] flex flex-col items-center min-h-screen bg-neutral-100 text-neutral-900 rounded-tl-lg rounded-bl-lg p-4"
            >


            </div>
        </div>
    );
};

export default MenuModal;
