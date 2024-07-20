// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "./locales/en/translation.json";
import translationTR from "./locales/tr/translation.json";
import translationCN from "./locales/cn/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  tr: {
    translation: translationTR,
  },

  cn: {
    translation: translationCN,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },

    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
  });

export default i18n;
