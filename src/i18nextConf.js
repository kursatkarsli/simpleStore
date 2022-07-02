import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationTR from './assets/locales/tr/translationTR.json'
import translationEN from './assets/locales/tr/translationEN.json'

const availableLanguages = ['tr'];
const resources = {
    tr: {
        translation: translationTR
    },
    en: {
        translation: translationEN,
    }

};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: 'tr',

        detection: {
            checkWhitelist: true,
        },

        debug: false,

        whitelist: availableLanguages,

        interpolation: {
            escapeValue: false,
        },
    });

