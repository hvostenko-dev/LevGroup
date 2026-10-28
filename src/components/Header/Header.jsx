import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaWhatsapp } from 'react-icons/fa';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import AccessibilityButton from '../Accessibility/AccessibilityButton';
import styles from './Header.module.css';

export default function Header({ onOpenA11y }) {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a
          href="#hero"
          onClick={scrollToTop}
          className={styles.brand}
          aria-label="LEV GROUP Home"
        >
          <span className={styles.brandMark} />
          <span className={styles.brandText}>LEV GROUP</span>
        </a>

        <nav className={styles.nav} aria-label="Primary Navigation">
          <a href="#services" className={styles.navLink}>
            {t('nav.services')}
          </a>
          <a href="#contact" className={styles.navLink}>
            {t('nav.contact')}
          </a>
        </nav>

        <div className={styles.actions}>
          <AccessibilityButton onClick={onOpenA11y} />
          <LanguageSwitcher />
          <a
            href="https://wa.me/972524388967"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappBtn}
            aria-label={t('nav.cta')}
          >
            <FaWhatsapp className={styles.whatsappIcon} />
            <span className={styles.whatsappText}>{t('nav.cta')}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
