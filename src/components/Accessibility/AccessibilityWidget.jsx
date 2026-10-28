import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import {
  FaUniversalAccess,
  FaTimes,
  FaUndoAlt,
  FaExternalLinkAlt,
  FaEye,
  FaFont,
  FaLink,
  FaBan,
} from 'react-icons/fa';
import styles from './AccessibilityWidget.module.css';

const STORAGE_KEY = 'lev_a11y_prefs';

const defaultPrefs = {
  fontSize: 'medium', // 'small' | 'medium' | 'large' | 'xlarge'
  contrast: 'normal', // 'normal' | 'dark' | 'light'
  grayscale: false,
  highlightLinks: false,
  readableFont: false,
  reduceMotion: false,
};

export default function AccessibilityWidget({ isOpen, onClose }) {
  const { t } = useTranslation();
  const [prefs, setPrefs] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? { ...defaultPrefs, ...JSON.parse(saved) } : defaultPrefs;
    } catch {
      return defaultPrefs;
    }
  });

  const dialogRef = useRef(null);

  // Apply preferences to documentElement
  useEffect(() => {
    const doc = document.documentElement;

    // Font size
    doc.setAttribute('data-font-size', prefs.fontSize);

    // Contrast
    doc.setAttribute('data-contrast', prefs.contrast);

    // Grayscale
    if (prefs.grayscale) {
      doc.setAttribute('data-grayscale', 'true');
    } else {
      doc.removeAttribute('data-grayscale');
    }

    // Highlight links
    if (prefs.highlightLinks) {
      doc.setAttribute('data-highlight-links', 'true');
    } else {
      doc.removeAttribute('data-highlight-links');
    }

    // Readable font
    if (prefs.readableFont) {
      doc.setAttribute('data-readable-font', 'true');
    } else {
      doc.removeAttribute('data-readable-font');
    }

    // Reduce motion
    if (prefs.reduceMotion) {
      doc.setAttribute('data-reduce-motion', 'true');
    } else {
      doc.removeAttribute('data-reduce-motion');
    }

    // Persist
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    } catch {
      // Ignore storage errors
    }
  }, [prefs]);

  // Handle escape key to close modal
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  const updatePref = (key, value) => {
    setPrefs((prev) => ({ ...prev, [key]: value }));
  };

  const togglePref = (key) => {
    setPrefs((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const resetAll = () => {
    setPrefs(defaultPrefs);
  };

  if (!isOpen) return null;

  return (
    <div
      className={styles.overlay}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="presentation"
    >
      <div
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="a11y-dialog-title"
        ref={dialogRef}
      >
        {/* Header */}
        <div className={styles.dialogHeader}>
          <div className={styles.headerTitleWrap}>
            <span className={styles.iconBadge}>
              <FaUniversalAccess />
            </span>
            <div>
              <h2 id="a11y-dialog-title" className={styles.dialogTitle}>
                {t('a11y.title')}
              </h2>
              <p className={styles.dialogSubtitle}>{t('a11y.subtitle')}</p>
            </div>
          </div>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label={t('a11y.close')}
          >
            <FaTimes />
          </button>
        </div>

        {/* Content / Controls */}
        <div className={styles.dialogBody}>
          {/* Section: Text Size */}
          <div className={styles.controlGroup}>
            <label className={styles.groupLabel}>
              <FaFont className={styles.labelIcon} />
              <span>{t('a11y.textSize')}</span>
            </label>
            <div className={styles.btnRow}>
              <button
                type="button"
                className={`${styles.pillBtn} ${
                  prefs.fontSize === 'small' ? styles.pillActive : ''
                }`}
                onClick={() => updatePref('fontSize', 'small')}
              >
                {t('a11y.textSmall')}
              </button>
              <button
                type="button"
                className={`${styles.pillBtn} ${
                  prefs.fontSize === 'medium' ? styles.pillActive : ''
                }`}
                onClick={() => updatePref('fontSize', 'medium')}
              >
                {t('a11y.textNormal')}
              </button>
              <button
                type="button"
                className={`${styles.pillBtn} ${
                  prefs.fontSize === 'large' ? styles.pillActive : ''
                }`}
                onClick={() => updatePref('fontSize', 'large')}
              >
                {t('a11y.textLarge')}
              </button>
              <button
                type="button"
                className={`${styles.pillBtn} ${
                  prefs.fontSize === 'xlarge' ? styles.pillActive : ''
                }`}
                onClick={() => updatePref('fontSize', 'xlarge')}
              >
                {t('a11y.textXLarge')}
              </button>
            </div>
          </div>

          {/* Section: Contrast */}
          <div className={styles.controlGroup}>
            <label className={styles.groupLabel}>
              <FaEye className={styles.labelIcon} />
              <span>{t('a11y.contrast')}</span>
            </label>
            <div className={styles.btnGrid2}>
              <button
                type="button"
                className={`${styles.pillBtn} ${
                  prefs.contrast === 'normal' && !prefs.grayscale
                    ? styles.pillActive
                    : ''
                }`}
                onClick={() => {
                  updatePref('contrast', 'normal');
                  updatePref('grayscale', false);
                }}
              >
                {t('a11y.contrastNormal')}
              </button>
              <button
                type="button"
                className={`${styles.pillBtn} ${
                  prefs.contrast === 'dark' ? styles.pillActive : ''
                }`}
                onClick={() => updatePref('contrast', 'dark')}
              >
                {t('a11y.contrastDark')}
              </button>
              <button
                type="button"
                className={`${styles.pillBtn} ${
                  prefs.contrast === 'light' ? styles.pillActive : ''
                }`}
                onClick={() => updatePref('contrast', 'light')}
              >
                {t('a11y.contrastLight')}
              </button>
              <button
                type="button"
                className={`${styles.pillBtn} ${
                  prefs.grayscale ? styles.pillActive : ''
                }`}
                onClick={() => togglePref('grayscale')}
              >
                {t('a11y.grayscale')}
              </button>
            </div>
          </div>

          {/* Section: Assistive Toggles */}
          <div className={styles.controlGroup}>
            <div className={styles.toggleRow}>
              <button
                type="button"
                className={`${styles.toggleCard} ${
                  prefs.highlightLinks ? styles.toggleActive : ''
                }`}
                onClick={() => togglePref('highlightLinks')}
                aria-pressed={prefs.highlightLinks}
              >
                <div className={styles.toggleCardIcon}>
                  <FaLink />
                </div>
                <div className={styles.toggleCardText}>
                  <strong>{t('a11y.highlightLinks')}</strong>
                </div>
                <span className={styles.statusIndicator} />
              </button>

              <button
                type="button"
                className={`${styles.toggleCard} ${
                  prefs.readableFont ? styles.toggleActive : ''
                }`}
                onClick={() => togglePref('readableFont')}
                aria-pressed={prefs.readableFont}
              >
                <div className={styles.toggleCardIcon}>
                  <FaFont />
                </div>
                <div className={styles.toggleCardText}>
                  <strong>{t('a11y.readableFont')}</strong>
                </div>
                <span className={styles.statusIndicator} />
              </button>

              <button
                type="button"
                className={`${styles.toggleCard} ${
                  prefs.reduceMotion ? styles.toggleActive : ''
                }`}
                onClick={() => togglePref('reduceMotion')}
                aria-pressed={prefs.reduceMotion}
              >
                <div className={styles.toggleCardIcon}>
                  <FaBan />
                </div>
                <div className={styles.toggleCardText}>
                  <strong>{t('a11y.reduceMotion')}</strong>
                </div>
                <span className={styles.statusIndicator} />
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={styles.dialogFooter}>
          <button
            type="button"
            className={styles.resetBtn}
            onClick={resetAll}
          >
            <FaUndoAlt className={styles.actionIcon} />
            <span>{t('a11y.reset')}</span>
          </button>

          <a
            href="/accessibility.html"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.statementLink}
          >
            <span>{t('a11y.statement')}</span>
            <FaExternalLinkAlt className={styles.linkIcon} />
          </a>
        </div>
      </div>
    </div>
  );
}
