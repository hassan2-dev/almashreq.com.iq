import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en.json';
import ar from './locales/ar.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { common: en },
      ar: { common: ar },
    },
    defaultNS: 'common',
    fallbackLng: 'ar',
    supportedLngs: ['en', 'ar'],
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
    },
  });

// EN = LTR, AR = RTL — run when i18n is ready and on every language change
function applyDirAndLang(lng?: string) {
  if (typeof document === 'undefined') return;
  const lang = lng ?? i18n.language ?? 'ar';
  const isRtl = lang === 'ar' || (typeof lang === 'string' && lang.startsWith('ar-'));
  const dir = isRtl ? 'rtl' : 'ltr';
  document.documentElement.setAttribute('dir', dir);
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.dir = dir;
}
i18n.on('initialized', () => applyDirAndLang());
i18n.on('languageChanged', (lng) => applyDirAndLang(lng));
applyDirAndLang(); // run once in case events already fired

export default i18n;
