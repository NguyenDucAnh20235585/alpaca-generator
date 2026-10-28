import { useTranslation } from "react-i18next";
import type { Language } from "../data/translations";

export default function useLanguage() {
  const { i18n } = useTranslation();

  const language: Language =
    i18n.language === "vi" || i18n.language === "ja" ? i18n.language : "en";

  const changeLanguage = (nextLanguage: Language) => {
    void i18n.changeLanguage(nextLanguage);
  };

  return {
    language,
    changeLanguage,
  };
}
