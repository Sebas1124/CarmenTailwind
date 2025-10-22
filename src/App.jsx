import { HeroComponent } from "./components/features/Hero"
import { FooterComponent, NavbarComponent } from "./components/features/layout"

export const App = () => {
  const handleStartClick = () => {
    alert("¡Empezamos!");
  };
  return (
    <div>
        <NavbarComponent onClick={handleStartClick}/>

            <HeroComponent/>

        <FooterComponent />

    </div>
  )
}
