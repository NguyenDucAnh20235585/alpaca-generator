import { translations, type Language } from "../data/translations";

import { useState } from "react";
import {
  categoryOrder,
  type AlpacaCategory,
  type AlpacaConfig,
} from "../data/alpaca";
import { alpacaOptions } from "../data/alpacaOptions";

type AlpacaCustomizerProps = {
  alpacaConfig: AlpacaConfig;
  onOptionChange: (category: AlpacaCategory, option: string) => void;
  language: Language;
};

export default function AlpacaCustomizer({
  alpacaConfig,
  onOptionChange,
  language,
}: AlpacaCustomizerProps) {
  const [activeCategory, setActiveCategory] = useState<AlpacaCategory>("hair");
  const t = translations[language];

  const options = alpacaOptions[activeCategory];

  return (
    <section className="w-full">
      <h2 className="mb-4 text-xl font-bold uppercase">{t.customize}</h2>

      <div className="flex flex-wrap gap-3">
        {categoryOrder.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            aria-pressed={activeCategory === category}
            className={`cursor-pointer rounded-full border-2 px-6 py-3 text-[15px] font-bold capitalize transition-colors ${
              activeCategory === category
                ? "border-[#6246ea] bg-[#6246ea] text-white"
                : "border-[#2b2c34] text-[#2b2c34] hover:border-[#6246ea] hover:bg-[#6246ea] hover:text-white dark:border-white/50 dark:text-[#f5f5f5] dark:hover:border-[#6246ea] dark:hover:bg-[#6246ea] dark:hover:text-white"
            }`}
          >
            {t.categories[category]}
          </button>
        ))}
      </div>

      <h2 className="mb-4 mt-8 text-xl font-bold uppercase">{t.styles}</h2>

      <div className="flex flex-wrap gap-3">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onOptionChange(activeCategory, option)}
            aria-pressed={alpacaConfig[activeCategory] === option}
            className={`cursor-pointer rounded-full border-2 px-6 py-3 text-[15px] font-bold capitalize transition-colors ${
              alpacaConfig[activeCategory] === option
                ? "border-[#6246ea] bg-[#6246ea] text-white"
                : "border-[#2b2c34] text-[#2b2c34] hover:border-[#6246ea] hover:bg-[#6246ea] hover:text-white dark:border-white/50 dark:text-[#f5f5f5] dark:hover:border-[#6246ea] dark:hover:bg-[#6246ea] dark:hover:text-white"
            }`}
          >
            {option
              .replace("darkblue", "dark blue")
              .replace(/([a-z])(\d)/g, "$1 $2")
              .replaceAll("-", " ")}
          </button>
        ))}
      </div>
    </section>
  );
}
