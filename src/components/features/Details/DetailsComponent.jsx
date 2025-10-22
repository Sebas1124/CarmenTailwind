import { FeatureCardComponent } from "./FeatureCardComponent"
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';

const cardsData = [
    {
        id: 1,
        icon: <BoltOutlinedIcon/>,
        title: "Tareas Inteligentes",
        description: "Clasifica y prioriza tus tareas automaticamente con nuestra IA integrada",
        color: "text-indigo-600",
        bgIcon: "bg-indigo-100"
    },
    {
        id: 2,
        icon: <EditCalendarOutlinedIcon/>,
        title: "Notas Enriquecidas",
        description: "Desde markdown hasta bloques de código. Tus notas, a tu manera.",
        color: "text-red-600",
        bgIcon: "bg-red-100"
    },
    {
        id: 3,
        icon: <PeopleAltOutlinedIcon/>,
        title: "Colaboración Real",
        description: "Invita a tu equipo y trabaja en proyectos compartidos sin esfuerzo.",
        color: "text-pink-600",
        bgIcon: "bg-pink-100"
    },
    {
        id: 4,
        icon: <BoltOutlinedIcon/>,
        title: "Integraciones Poderosas",
        description: "Conecta con tus herramientas favoritas y automatiza tu flujo de trabajo.",
        color: "text-green-600",
        bgIcon: "bg-green-100"
    }
];

export const DetailsComponent = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-extrabold text-gray-900">Todo lo que necesitas para tu tienda</h2>
                <p className="mt-4 text-lg text-gray-600">Nos centramos en la velocidad y la simplicidad.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {
                    cardsData.map((card) => (
                        <FeatureCardComponent
                            icon={card.icon}
                            title={card.title}
                            description={card.description}
                            color={card.color}
                            bgIcon={card.bgIcon}
                        />
                    ))
                }
            </div>
        </div>
    </section>
  )
}
