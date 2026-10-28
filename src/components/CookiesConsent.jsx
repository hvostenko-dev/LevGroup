import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  FaCookieBite,
  FaShieldAlt,
  FaTimes,
  FaSlidersH,
  FaCheck,
  FaTable,
} from 'react-icons/fa';
import styles from './CookiesConsent.module.css';

const COOKIE_STORAGE_KEY = 'lev_cookie_consent';

export default function CookieConsent({ onBannerVisibilityChange }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || 'he';

  const [bannerVisible, setBannerVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // Categories
  const [functional, setFunctional] = useState(true);
  const [analytics, setAnalytics] = useState(false);

  // Check saved consent on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(COOKIE_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (typeof parsed.functional === 'boolean') setFunctional(parsed.functional);
        if (typeof parsed.analytics === 'boolean') setAnalytics(parsed.analytics);
        setBannerVisible(false);
        if (onBannerVisibilityChange) onBannerVisibilityChange(false);
      } else {
        setBannerVisible(true);
        if (onBannerVisibilityChange) onBannerVisibilityChange(true);
      }
    } catch {
      setBannerVisible(true);
      if (onBannerVisibilityChange) onBannerVisibilityChange(true);
    }
  }, [onBannerVisibilityChange]);

  // Listen to open-cookie-preferences event from footer or anywhere
  useEffect(() => {
    const handleOpen = () => setModalOpen(true);
    window.addEventListener('openCookieSettings', handleOpen);
    return () => window.removeEventListener('openCookieSettings', handleOpen);
  }, []);

  const saveConsent = (preferences) => {
    try {
      const record = {
        necessary: true,
        functional: preferences.functional,
        analytics: preferences.analytics,
        timestamp: new Date().toISOString(),
      };
      localStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify(record));
    } catch {
      // Ignore storage errors
    }
    setBannerVisible(false);
    setModalOpen(false);
    if (onBannerVisibilityChange) onBannerVisibilityChange(false);
  };

  const handleAcceptAll = () => {
    setFunctional(true);
    setAnalytics(true);
    saveConsent({ functional: true, analytics: true });
  };

  const handleDeclineNonEssential = () => {
    setFunctional(false);
    setAnalytics(false);
    saveConsent({ functional: false, analytics: false });
  };

  const handleSaveCustom = () => {
    saveConsent({ functional, analytics });
  };

  // Cookie table registry data
  const cookieRegistry = [
    {
      name: 'lev_cookie_consent',
      category: t('cookies.catNecessary'),
      categoryType: 'necessary',
      provider: 'LEV GROUP (Local)',
      purpose: {
        he: 'שומר את הסכמת והעדפות המשתמש לקובצי עוגיות ופרטיות באתר.',
        en: 'Stores user consent choices and privacy preferences on the website.',
        ru: 'Сохраняет выбор пользователя относительно файлов cookie и конфиденциальности.',
        fr: 'Enregistre les choix de consentement et préférences de cookies de l\'utilisateur.',
      },
      duration: '12 ' + (lang === 'he' ? 'חודשים' : lang === 'ru' ? 'месяцев' : lang === 'fr' ? 'mois' : 'months'),
    },
    {
      name: 'lev_lang',
      category: t('cookies.catFunctional'),
      categoryType: 'functional',
      provider: 'LEV GROUP (Local)',
      purpose: {
        he: 'שומר את שפת הממשק הנבחרת (עברית, אנגלית, צרפתית, רוסית) לחוויה רציפה.',
        en: 'Remembers the selected display language (Hebrew, English, French, Russian).',
        ru: 'Сохраняет выбранный язык интерфейса (иврит, английский, французский, русский).',
        fr: 'Mémorise la langue d\'affichage sélectionnée pour une navigation fluide.',
      },
      duration: '12 ' + (lang === 'he' ? 'חודשים' : lang === 'ru' ? 'месяцев' : lang === 'fr' ? 'mois' : 'months'),
    },
    {
      name: 'lev_a11y_prefs',
      category: t('cookies.catFunctional'),
      categoryType: 'functional',
      provider: 'LEV GROUP (Local)',
      purpose: {
        he: 'שומר את העדפות הנגישות שהותאמו (גודל כתב, ניגודיות כהה/בהירה, פונט קריא).',
        en: 'Remembers personalized accessibility tools (font size, contrast, readable font).',
        ru: 'Сохраняет индивидуальные настройки доступности (размер текста, контрастность).',
        fr: 'Mémorise vos réglages d\'accessibilité personnalisés (taille de texte, contraste).',
      },
      duration: '12 ' + (lang === 'he' ? 'חודשים' : lang === 'ru' ? 'месяцев' : lang === 'fr' ? 'mois' : 'months'),
    },
    {
      name: 'lev_analytics',
      category: t('cookies.catAnalytics'),
      categoryType: 'analytics',
      provider: 'LEV GROUP (Telemetry)',
      purpose: {
        he: 'איסוף נתוני מהירות ושימוש אנונימיים לחלוטין לצורך שיפור וייעול האתר.',
        en: 'Completely anonymous performance metrics to optimize loading and service quality.',
        ru: 'Анонимные показатели работы и скорости для постоянного улучшения сайта.',
        fr: 'Mesures anonymes de performances pour optimiser la rapidité et le confort du site.',
      },
      duration: '6 ' + (lang === 'he' ? 'חודשים' : lang === 'ru' ? 'месяцев' : lang === 'fr' ? 'mois' : 'months'),
    },
  ];

  return (
    <>
      {/* Sleek Floating Bottom Banner */}
      {bannerVisible && !modalOpen && (
        <aside
          className={styles.banner}
          role="region"
          aria-label="Cookie Consent Banner"
          aria-live="polite"
        >
          <div className={styles.bannerInner}>
            <div className={styles.bannerContent}>
              <div className={styles.badgeRow}>
                <span className={styles.cookieIconWrap}>
                  <FaCookieBite />
                </span>
                <span className={styles.bannerTitle}>{t('cookies.title')}</span>
              </div>
              <p className={styles.bannerText}>
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
              </p>
            </div>

            <div className={styles.bannerActions}>
              <button
                type="button"
                onClick={handleAcceptAll}
                className={styles.btnPrimary}
              >
                <FaCheck className={styles.btnIcon} />
                <span>{t('cookies.acceptAll')}</span>
              </button>

              <button
                type="button"
                onClick={handleDeclineNonEssential}
                className={styles.btnSecondary}
              >
                <span>{t('cookies.declineNonEssential')}</span>
              </button>

              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className={styles.btnSettings}
              >
                <FaSlidersH className={styles.btnIcon} />
                <span>{t('cookies.customize')}</span>
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* Comprehensive Cookie Preferences & Registry Modal ("Нормальная табличка") */}
      {modalOpen && (
        <div
          className={styles.modalOverlay}
          onClick={(e) => {
            if (e.target === e.currentTarget) setModalOpen(false);
          }}
          role="presentation"
        >
          <div
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-modal-title"
          >
            {/* Modal Header */}
            <div className={styles.modalHeader}>
              <div className={styles.headerInfo}>
                <span className={styles.headerIconBox}>
                  <FaShieldAlt />
                </span>
                <div>
                  <h2 id="cookie-modal-title" className={styles.modalTitle}>
                    {t('cookies.modalTitle')}
                  </h2>
                  <p className={styles.modalSubtitle}>
                    {t('cookies.modalSubtitle')}
                  </p>
                </div>
              </div>
              <button
                type="button"
                className={styles.closeBtn}
                onClick={() => setModalOpen(false)}
                aria-label="Close"
              >
                <FaTimes />
              </button>
            </div>

            {/* Modal Scrollable Content */}
            <div className={styles.modalBody}>
              {/* Category Switches */}
              <div className={styles.categories}>
                {/* Strictly Necessary */}
                <div className={styles.catCard}>
                  <div className={styles.catTop}>
                    <div className={styles.catInfo}>
                      <h3 className={styles.catName}>
                        {t('cookies.catNecessary')}
                      </h3>
                      <p className={styles.catDesc}>
                        {t('cookies.catNecessaryDesc')}
                      </p>
                    </div>
                    <span className={styles.lockedBadge}>
                      {t('cookies.alwaysActive')}
                    </span>
                  </div>
                </div>

                {/* Functional & Preferences */}
                <div className={styles.catCard}>
                  <div className={styles.catTop}>
                    <div className={styles.catInfo}>
                      <h3 className={styles.catName}>
                        {t('cookies.catFunctional')}
                      </h3>
                      <p className={styles.catDesc}>
                        {t('cookies.catFunctionalDesc')}
                      </p>
                    </div>
                    <label className={styles.switch}>
                      <input
                        type="checkbox"
                        checked={functional}
                        onChange={(e) => setFunctional(e.target.checked)}
                      />
                      <span className={styles.slider} />
                    </label>
                  </div>
                </div>

                {/* Analytics */}
                <div className={styles.catCard}>
                  <div className={styles.catTop}>
                    <div className={styles.catInfo}>
                      <h3 className={styles.catName}>
                        {t('cookies.catAnalytics')}
                      </h3>
                      <p className={styles.catDesc}>
                        {t('cookies.catAnalyticsDesc')}
                      </p>
                    </div>
                    <label className={styles.switch}>
                      <input
                        type="checkbox"
                        checked={analytics}
                        onChange={(e) => setAnalytics(e.target.checked)}
                      />
                      <span className={styles.slider} />
                    </label>
                  </div>
                </div>
              </div>

              {/* The Cookie Registry Table ("нормальная табличка") */}
              <div className={styles.tableSection}>
                <div className={styles.tableHeading}>
                  <FaTable className={styles.tableHeadingIcon} />
                  <h4>{t('cookies.modalTitle')}</h4>
                </div>

                <div className={styles.tableWrapper}>
                  <table className={styles.table}>
                    <thead>
                      <tr>
                        <th scope="col">{t('cookies.colName')}</th>
                        <th scope="col">{t('cookies.colCategory')}</th>
                        <th scope="col">{t('cookies.colProvider')}</th>
                        <th scope="col">{t('cookies.colPurpose')}</th>
                        <th scope="col">{t('cookies.colDuration')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cookieRegistry.map((item) => (
                        <tr key={item.name}>
                          <td className={styles.cellCode}>
                            <code>{item.name}</code>
                          </td>
                          <td>
                            <span
                              className={`${styles.catPill} ${
                                styles[item.categoryType]
                              }`}
                            >
                              {item.category}
                            </span>
                          </td>
                          <td className={styles.cellProvider}>{item.provider}</td>
                          <td className={styles.cellPurpose}>
                            {item.purpose[lang] || item.purpose.en}
                          </td>
                          <td className={styles.cellDuration}>
                            {item.duration}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Modal Actions Footer */}
            <div className={styles.modalFooter}>
              <button
                type="button"
                onClick={handleSaveCustom}
                className={styles.btnPrimary}
              >
                {t('cookies.save')}
              </button>

              <button
                type="button"
                onClick={handleAcceptAll}
                className={styles.btnSecondary}
              >
                {t('cookies.acceptAll')}
              </button>

              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className={styles.btnSettings}
              >
                {t('a11y.close')}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
