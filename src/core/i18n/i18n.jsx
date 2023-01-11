import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import headerTEng from '../../components/header/i18n/en';
import headerTFr from '../../components/header/i18n/fr';
import aboutTEng from '../../components/about/i18n/en';
import aboutTFr from '../../components/about/i18n/fr';
import experiencedTFr from '../../components/experience/i18n/fr';
import experiencedTEn from '../../components/experience/i18n/en';

const allEnglishTranslation = {
  ...headerTEng,
  ...aboutTEng,
  ...experiencedTEn,
};
const allFrenchTranslation = { ...headerTFr, ...aboutTFr, ...experiencedTFr };

const language = localStorage.getItem('lng');

const setLanguage = (code) => {
  if (!code) {
    code = language;
  }
  if (code) {
    if (code === 'GB') {
      return 'en';
    }
    return code.toLocaleLowerCase();
  }
  if (language) {
    if (language === 'GB') {
      return 'en';
    }
    return language.toLocaleLowerCase();
  }
  return 'en';
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          ...allEnglishTranslation,
        },
      },
      fr: {
        translation: {
          ...allFrenchTranslation,
        },
      },
    },
    lng: setLanguage(), // if you're using a language detector, do not define the lng option
    // fallbackLng: 'en',
    // react i18next special options (optional)
    react: {
      bindI18n: 'loaded languageChanged',
      bindI18nStore: 'added',
      useSuspense: true,
    },
  });

export { setLanguage, i18n };
