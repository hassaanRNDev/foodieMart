import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {I18nManager} from 'react-native';

import {resources} from './resources';
import {getLanguage} from './utils';
export * from './utils';

const initialLanguage = 'en';

const languageDetector = {
  init: Function.prototype,
  type: 'languageDetector',
  async: true,
  // @ts-ignore
  detect: async callback => {
    const storeLanguage = await getLanguage();
    const selectedLanguage = storeLanguage || initialLanguage;
    callback(selectedLanguage);
  },
  cacheUserLanguage: () => {},
};

i18n
  .use(initReactI18next)
  // @ts-ignore
  .use(languageDetector)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    compatibilityJSON: 'v3', // By default React Native projects does not support Intl

    // allows integrating dynamic values into translations.
    interpolation: {
      escapeValue: false, // escape passed in values to avoid XSS injections
    },
  });

// Is it a RTL language?
export const isRTL: boolean = i18n.dir() === 'rtl';

I18nManager.allowRTL(isRTL);
I18nManager.forceRTL(isRTL);

export default i18n;
