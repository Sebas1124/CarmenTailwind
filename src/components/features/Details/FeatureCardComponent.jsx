
export const FeatureCardComponent = ({icon, title, description, color, bgIcon}) => {
  return (
    <div className="p-8 bg-white rounded-2xl shadow-lg">
        <div className={`flex items-center justify-center h-12 w-12 rounded-full ${bgIcon} ${color}`}>
            {icon}
        </div>
        <h3 className="mt-6 text-xl font-bold">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
    </div>
  )
}
