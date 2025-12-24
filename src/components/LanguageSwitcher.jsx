import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <div className="flex gap-2 items-center">
      <button
        onClick={() => changeLanguage("hi")}
        className={`px-3 py-1 rounded border text-sm ${
          i18n.language === "hi"
            ? "bg-red-600 text-white"
            : "bg-white text-gray-700"
        }`}
      >
        हिंदी
      </button>

      <button
        onClick={() => changeLanguage("en")}
        className={`px-3 py-1 rounded border text-sm ${
          i18n.language === "en"
            ? "bg-red-600 text-white"
            : "bg-white text-gray-700"
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
