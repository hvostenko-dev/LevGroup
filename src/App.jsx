import "./App.css";
import "./i18n";

import LanguageSwitcher from "./components/LanguageSwitcher/LanguageSwitcher.jsx";
import HeroSection      from "./components/HeroSection/HeroSection.jsx";
import ServicesSection  from "./components/ServicesSection/ServiceSection.jsx";
import ContactSection   from "./components/ContactSection/ContactSection.jsx";
import CookieConsent from "./components/CookiesConsent.jsx";


export default function App() {
  return (
    <div className="App">
      <LanguageSwitcher />
      <HeroSection />
      <ServicesSection />
      <ContactSection />
      <CookieConsent />
    </div>
  );
}
