import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import he from './locales/he.json';
import fr from './locales/fr.json';
import ru from './locales/ru.json';

const SUPPORTED_LANGUAGES = ['he', 'en', 'fr', 'ru'];
const STORAGE_KEY = 'lev_lang';

const getInitialLanguage = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && SUPPORTED_LANGUAGES.includes(saved)) {
      return saved;
    }
  } catch {
    // Ignore storage access errors in restricted environments
  }
  return 'he';
};

const syncDocumentDirection = (lng) => {
  if (typeof document === 'undefined') return;
  const lang = SUPPORTED_LANGUAGES.includes(lng) ? lng : 'he';
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';
};

const initialLng = getInitialLanguage();
syncDocumentDirection(initialLng);

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    he: { translation: he },
    fr: { translation: fr },
    ru: { translation: ru },
  },
  lng: initialLng,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

i18n.on('languageChanged', (lng) => {
  syncDocumentDirection(lng);
  try {
    localStorage.setItem(STORAGE_KEY, lng);
  } catch {
    // Ignore storage errors
  }
});

export default i18n;
