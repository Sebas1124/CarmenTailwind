
export const TooltipComponent = ({ text, tooltipText }) => {
  return (
    <div className="relative flex justify-center mb-5">

        <div className="group cursor-pointer rounded-lg bg-blue-400 px-4 py-2 text-white">
            {text}
            <span
                className="absolute bottom-full left-1/2 z-20 scale-0 mb-3
                           transition-all duration-300
                           -translate-x-1/2 px-4 py-2
                           rounded-md
                           shadow-lg
                           bg-gray-950
                           group-hover:scale-100"
            >
                {tooltipText}
            </span>
        </div>
    </div>
  )
}
