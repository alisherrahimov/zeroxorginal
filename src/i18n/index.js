import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import kril from './kril.json';
import uz from './uz.json';
import ru from './ru.json';

i18n.use(initReactI18next).init({
  lng: 'uz',
  fallbackLng: 'uz',
  compatibilityJSON: 'v3',
  resources: {
    uz: uz,
    ru: ru,
    kril: kril,
  },
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
  react: {
    useSuspense: false,
  },
});
export default i18n;
