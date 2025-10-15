import { useState } from "react"
import { BotonGradient } from "./BotonGradient"

export const ModalComponent = ({ title, content }) => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

  return (
    <div className="mb-5">
        <BotonGradient
            text="Abrir modal"
            onClick={handleOpen}
        />


        {/* Fondo -> Backdrop */}
        {
            open && (
                <div className="fixed w-full h-full top-0 left-0 flex items-center justify-center bg-black opacity-90 transition-opacity duration-300">
                    {/* Panel del modal */}
                    <div
                        className="relative w-full max-w-lg rounded-lg bg-amber-400 p-6 shadow-xl transition-all duration-300 scale-95 animate-scale-in"
                    >
                        
                        <button
                            className="cursor-pointer absolute top-2 right-5 h-8 w-8 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-300 hover:text-gray-800 flex items-center justify-center"
                            onClick={handleClose}
                        >
                            &times;
                        </button>

                        <div>
                            <h2 className="text-2xl font-bold mb-4">{title}</h2>

                            <p className="text-gray-700">{content}</p>
                        </div>

                    </div>
                </div>
            )
        }
    </div>
  )
}
