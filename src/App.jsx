import { useState } from 'react';
import './App.css';

import Header from './components/Header/Header.jsx';
import HeroSection from './components/HeroSection/HeroSection.jsx';
import ServicesSection from './components/ServicesSection/ServiceSection.jsx';
import ContactSection from './components/ContactSection/ContactSection.jsx';
import CookieConsent from './components/CookiesConsent.jsx';

export default function App() {
  const [selectedService, setSelectedService] = useState('');

  const handleSelectService = (serviceId) => {
    setSelectedService(serviceId);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection onSelectService={handleSelectService} />
        <ContactSection
          selectedService={selectedService}
          onServiceChange={setSelectedService}
        />
      </main>
      <CookieConsent />
    </div>
  );
}
