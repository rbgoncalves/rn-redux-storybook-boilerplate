import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translations from './translations';

i18n.use(initReactI18next).init({
  lng: 'pt',
  resources: translations,
  ns: ['common'],
  defaultNS: 'common',
  debug: true,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
