import { useTranslation } from 'react-i18next';
import { FaUniversalAccess } from 'react-icons/fa';
import styles from './AccessibilityButton.module.css';

export default function AccessibilityButton({ onClick, floating = false, shifted = false }) {
  const { t } = useTranslation();

  if (floating) {
    return (
      <button
        type="button"
        className={`${styles.floatingBtn} ${shifted ? styles.shifted : ''}`}
        onClick={onClick}
        aria-label={t('a11y.buttonTitle')}
        title={t('a11y.buttonTitle')}
      >
        <FaUniversalAccess className={styles.icon} />
        <span className={styles.tooltip}>{t('a11y.badge')}</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      className={styles.headerBtn}
      onClick={onClick}
      aria-label={t('a11y.buttonTitle')}
      title={t('a11y.buttonTitle')}
    >
      <FaUniversalAccess className={styles.headerIcon} />
      <span className={styles.headerText}>{t('a11y.badge')}</span>
    </button>
  );
}
