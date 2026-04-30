import { useTranslation } from "react-i18next";

const langs = {
  en: "English",
  ar: "Arabic",
};

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <button
      className="cursor-pointer relative z-10 bg-transparent hover:bg-gray-100 border border-transparent text-black text-sm md:text-sm transition font-medium duration-200 rounded-full px-4 py-2 flex items-center justify-center dark:text-white dark:hover:bg-neutral-800 dark:hover:shadow-xl"
      aria-label="Select Language"
      onClick={() => changeLanguage(i18n.language === "ar" ? "en" : "ar")}
    >
      {langs[i18n.language === "ar" ? "en" : "ar"]}
    </button>
  );
};

export default LanguageSwitcher;
