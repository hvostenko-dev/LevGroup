import { useState } from 'react';
import './App.css';

import Header from './components/Header/Header.jsx';
import HeroSection from './components/HeroSection/HeroSection.jsx';
import ServicesSection from './components/ServicesSection/ServiceSection.jsx';
import ContactSection from './components/ContactSection/ContactSection.jsx';
import CookieConsent from './components/CookiesConsent.jsx';
import AccessibilityWidget from './components/Accessibility/AccessibilityWidget.jsx';
import AccessibilityButton from './components/Accessibility/AccessibilityButton.jsx';

export default function App() {
  const [selectedService, setSelectedService] = useState('');
  const [a11yOpen, setA11yOpen] = useState(false);
  const [cookieBannerActive, setCookieBannerActive] = useState(false);

  const handleSelectService = (serviceId) => {
    setSelectedService(serviceId);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <Header onOpenA11y={() => setA11yOpen(true)} />
      <main>
        <HeroSection />
        <ServicesSection onSelectService={handleSelectService} />
        <ContactSection
          selectedService={selectedService}
          onServiceChange={setSelectedService}
          onOpenA11y={() => setA11yOpen(true)}
        />
      </main>

      {/* Floating non-intrusive Accessibility Button (automatically adjusts when banner is open) */}
      <AccessibilityButton
        floating
        shifted={cookieBannerActive}
        onClick={() => setA11yOpen(true)}
      />

      {/* Built-in Full-Featured Accessibility Modal */}
      <AccessibilityWidget
        isOpen={a11yOpen}
        onClose={() => setA11yOpen(false)}
      />

      {/* Sleek Cookie Consent Banner & Table Modal */}
      <CookieConsent
        onBannerVisibilityChange={setCookieBannerActive}
      />
    </div>
  );
}
