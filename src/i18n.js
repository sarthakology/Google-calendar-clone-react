import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import english from './translationJSON/english.json';
import hindi from './translationJSON/hindi.json';
import french from './translationJSON/french.json';

const resources = {
    english: { translation: english },
    hindi: { translation: hindi },
    french: { translation: french },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'english',
        fallbackLng: 'english',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
