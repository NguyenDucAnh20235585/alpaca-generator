import type { Language } from "../data/translations";
import useLanguage from "../hooks/useLanguage";

export default function LanguageSelector() {
  const { language, changeLanguage } = useLanguage();

  return (
    <select
      aria-label="Language"
      value={language}
      onChange={(event) => changeLanguage(event.target.value as Language)}
      className="cursor-pointer rounded-md border border-black/20 bg-white px-3 py-2 text-sm text-[#2b2c34] dark:border-white/20 dark:bg-[#292c35] dark:text-white"
    >
      <option value="en">English</option>
      <option value="vi">Tiếng Việt</option>
      <option value="ja">にほんご</option>
    </select>
  );
}
