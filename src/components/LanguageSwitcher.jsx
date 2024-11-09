// src/App.js
import { useTranslation } from "react-i18next";
// import "../i18n"; // Import the i18n configuration
import { forwardRef } from "react";
// import { ChatWidgetController } from "./LiveChat";

const langs = {
  en: "English",
  ar: "العربية",
};
const LanguageSwitcher = ({ color }) => {
  const { t, i18n } = useTranslation();

  // Language change handler
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    // ChatWidgetController.switchLanguage(lng)
  };

  return (
    <button
      className="cursor-pointer relative z-10 bg-transparent hover:bg-gray-100 border border-transparent text-black text-sm md:text-sm transition font-medium duration-200 rounded-full px-4 py-2 flex items-center justify-center dark:text-white dark:hover:bg-neutral-800 dark:hover:shadow-xl"
      aria-label="Select Language" // Provide an accessible name for screen readers
      onClick={() => changeLanguage(i18n.language == "ar" ? "en" : "ar")}
    >
      {langs[i18n.language == "ar" ? "en" : "ar"]}
    </button>
  );
};

export default LanguageSwitcher;
