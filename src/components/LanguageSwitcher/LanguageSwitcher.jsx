import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGlobe, FaChevronDown } from 'react-icons/fa';
import styles from './LanguageSwitcher.module.css';

const languages = [
  { code: 'he', label: 'עברית', short: 'HE' },
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'fr', label: 'Français', short: 'FR' },
  { code: 'ru', label: 'Русский', short: 'RU' },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    const onClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', onClickOutside);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onClickOutside);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };

  const active =
    languages.find((l) => l.code === i18n.language) || languages[0];

  return (
    <div className={styles.switcher} ref={menuRef}>
      <button
        type="button"
        className={styles.toggle}
        onClick={() => setOpen((o) => !o)}
        aria-label="Change language"
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <FaGlobe className={styles.globeIcon} />
        <span className={styles.labelFull}>{active.label}</span>
        <span className={styles.labelShort}>{active.short}</span>
        <FaChevronDown
          className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`}
        />
      </button>

      {open && (
        <ul className={styles.menu} role="listbox" aria-label="Select language">
          {languages.map((lang) => {
            const isSelected = lang.code === active.code;
            return (
              <li key={lang.code} role="option" aria-selected={isSelected}>
                <button
                  type="button"
                  className={isSelected ? styles.active : ''}
                  onClick={() => changeLanguage(lang.code)}
                  disabled={isSelected}
                >
                  <span>{lang.label}</span>
                  <span className={styles.langCode}>{lang.short}</span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
