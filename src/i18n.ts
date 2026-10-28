import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { translations } from "./data/translations";

const savedLanguage = localStorage.getItem("alpaca-language");

const initialLanguage =
  savedLanguage === "vi" || savedLanguage === "ja" ? savedLanguage : "en";

void i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translations.en },
    vi: { translation: translations.vi },
    ja: { translation: translations.ja },
  },

  lng: initialLanguage,
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

document.documentElement.lang = initialLanguage;

i18n.on("languageChanged", (language) => {
  localStorage.setItem("alpaca-language", language);
  document.documentElement.lang = language;
});

export default i18n;
