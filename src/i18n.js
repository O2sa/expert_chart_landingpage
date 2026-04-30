import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en.json";
import translationAr from "./locales/ar.json";

const resources = {
  en: {
    translation: translationEN,
  },
  ar: {
    translation: translationAr,
  },
};

const language = localStorage.getItem("i18nextLng") || "en";

i18n.use(initReactI18next).init({
  resources,
  lng: language,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

const updateDirection = (lng) => {
  const direction = lng === "ar" ? "rtl" : "ltr";
  document.documentElement.setAttribute("dir", direction);
  document.documentElement.setAttribute("lang", lng);
};

updateDirection(language);
i18n.on("languageChanged", (lng) => {
  localStorage.setItem("i18nextLng", lng);
  updateDirection(lng);
});

export default i18n;
