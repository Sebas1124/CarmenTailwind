import { ContactComponent } from "./components/features/Contact/ContactComponent";
import { DetailsComponent } from "./components/features/Details/DetailsComponent";
import { FAQSComponent } from "./components/features/FAQS";
import { HeroComponent } from "./components/features/Hero"
import { FooterComponent, NavbarComponent } from "./components/features/layout"

export const App = () => {
  const handleStartClick = () => {
    alert("¡Empezamos!");
  };
  return (
    <>
        <NavbarComponent onClick={handleStartClick}/>

          <HeroComponent/>

          <DetailsComponent/>

          <FAQSComponent/>

          <ContactComponent/>

        <FooterComponent />

    </>
  )
}
