import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translation files
import translationEN from "./locales/en.json";
import translationAr from "./locales/ar.json";

// Define the resources
const resources = {
  en: {
    translation: translationEN,
  },
  ar: {
    translation: translationAr,
  },
};

// Retrieve stored language or default to 'en'
const language = localStorage.getItem("i18nextLng") || "en";

// Initialize i18n
i18n.use(initReactI18next).init({
  resources,
  lng: language,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

// Function to set the `dir` attribute based on the language
const updateDirection = (lng) => {
  const direction = lng === "ar" ? "rtl" : "ltr";
  document.documentElement.setAttribute("dir", direction);
  document.documentElement.setAttribute("lang", lng);
};

// Initial set of `dir` attribute on load
updateDirection(language);

// Listen for language change and update `dir` attribute
i18n.on("languageChanged", (lng) => {
  localStorage.setItem("i18nextLng", lng);
  updateDirection(lng);
});

export default i18n;
