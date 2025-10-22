import { AccordeonComponent } from "../../AccordeonComponent"

export const FAQSComponent = () => {
  return (
    <section id="faqs" className="py-20">
      <div className="container mx-auto px-4">

        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900">Preguntas Frecuentes</h2>
          <p className="mt-4 text-lg text-gray-600">Aquí tienes algunas preguntas que pueden surgir.</p>
        </div>

        <div>
          <AccordeonComponent
            title={"¿Puedo importar mis tareas desde otra app?"}
            children={"¡Sí! Actualmente soportamos importaciones directas desde Trello, Asana y Todoist. Estamos trabajando para añadir más integraciones pronto."}
          />
          <AccordeonComponent
            title={"¿Existe un plan gratuito?"}
            children={"Ofrecemos una prueba gratuita de 14 días con todas las funciones. Después de eso, puedes elegir nuestro plan Pro o continuar en un plan Básico con limitaciones."}
          />
          <AccordeonComponent
            title={"¿Mis datos están seguros?"}
            children={"La seguridad es nuestra máxima prioridad. Usamos encriptación de grado militar (AES-256) para todos tus datos en reposo y en tránsito."}
          />
        </div>

      </div>
    </section>
  )
}
