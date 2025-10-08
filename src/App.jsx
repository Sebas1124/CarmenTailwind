import { AdvancedCard } from "./components/AdvancedCard"
import { AnimationComponent } from "./components/AnimationComponent"
import { BackgroundsComponent } from "./components/BackgroundsComponent"
import { BotonGradient } from "./components/BotonGradient"
import { LayoutResponsive } from "./components/LayoutResponsive"
import { ShadowComponent } from "./components/ShadowComponent"
import { SimpleCard } from "./components/SimpleCard"
import { TextoComponent } from "./components/TextoComponent"


export const App = () => {
  return (
    // xs: extra small
    // sm = small
    // md = medium
    // lg = large
    // xl = extra large
    // 2xl = 2 extra large
    // 4xl = 4 extra large
    <div>
      <h1 
       className="text-center font-bold sm:text-red-500 md:text-blue-300 lg:text-orange-400 xl:text-purple-600"
      >
        Hola carmen estas aprendiendo 
        <span className="text-red-800">Tailwind</span>
      </h1>

      {/* cajas */}
      <div
        className="flex justify-center bg-gray-700 text-white rounded-md hover:bg-red-400 shadow-lg"
      >
        <h1>Hola mundo</h1>
      </div>

      {/* Textos y tamaños */}
      <TextoComponent/>

      {/* Background Component */}
      <BackgroundsComponent/>

      {/* Layout Responsive Component */}
      <LayoutResponsive/>

      {/* Boton Gradient Component */}
      <BotonGradient/>

      {/* Div con Shadow */}
      <ShadowComponent/>

      {/* Animaciones */}
      <AnimationComponent/>

      {/* Simple Card */}
      <SimpleCard
        titulo={"El gato de sebas"}
        descripcion={"¡Peligo! Gato agresivo."}
        img={"https://i.pinimg.com/236x/05/49/86/05498664d54894f92c6523c50c1eb9e6.jpg"}
      />

      <SimpleCard
        titulo={"El gato de carmen"}
        descripcion={"¡Peligo! Gato agresivo."}
        img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXwdKPHq5ZvBOH0nhh5EKQRCV_kg4ayZbrU62nuUkJsK4Dc1S2dKF85veYrmUMA8YDpWQ&usqp=CAU"}
      />

      {/* Card Avanzada */}
      <AdvancedCard/>

    </div>
  )
}
