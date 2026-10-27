import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './CookiesConsent.module.css';

export default function CookieConsent() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const choice = localStorage.getItem('cookieConsent');
      if (!choice) {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem('cookieConsent', 'accepted');
    } catch {
      // Ignore storage errors
    }
    setVisible(false);
  };

  const decline = () => {
    try {
      localStorage.setItem('cookieConsent', 'declined');
    } catch {
      // Ignore storage errors
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className={styles.banner}
      role="region"
      aria-label="Cookie Consent"
      aria-live="polite"
    >
      <span className={styles.text}>
        {t('cookies.text')}{' '}
        <a
          href="/privacy.html"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          {t('cookies.privacyLink')}
        </a>
        .
      </span>
      <div className={styles.actions}>
        <button type="button" onClick={accept} className={styles.buttonAccept}>
          {t('cookies.accept')}
        </button>
        <button
          type="button"
          onClick={decline}
          className={styles.buttonDecline}
        >
          {t('cookies.decline')}
        </button>
      </div>
    </div>
  );
}
