
export const BadgeComponent = ({ icon, number }) => {
  return (
    <div className="mb-5 px-3 py-2">

        <div className="relative w-14 h-40 cursor-pointer">
            {icon}

            <span className="absolute bg-red-500 px-2 text-white rounded-full -top-4 right-0">
                {number}
            </span>
        </div>

    </div>
  )
}
