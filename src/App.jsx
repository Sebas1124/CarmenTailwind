import { HeroComponent } from "./components/features/Hero"
import { FooterComponent, NavbarComponent } from "./components/features/layout"

export const App = () => {
  return (
    <div>
        <NavbarComponent />

            <HeroComponent/>

        <FooterComponent />

    </div>
  )
}
