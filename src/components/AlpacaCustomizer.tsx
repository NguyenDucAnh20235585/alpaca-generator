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
};

export default function AlpacaCustomizer({
  alpacaConfig,
  onOptionChange,
}: AlpacaCustomizerProps) {
  const [activeCategory, setActiveCategory] = useState<AlpacaCategory>("hair");

  const options = alpacaOptions[activeCategory];

  return (
    <section className="w-full">
      <h2 className="mb-4 text-2xl font-bold">Accessorize the Alpaca</h2>

      <div className="flex flex-wrap gap-3">
        {categoryOrder.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            aria-pressed={activeCategory === category}
            className={`cursor-pointer rounded-full border-2 px-4 py-2 font-semibold capitalize ${
              activeCategory === category
                ? "border-violet-600 bg-violet-600 text-white"
                : "border-slate-800 text-slate-900 hover:border-violet-600"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <h2 className="mb-4 mt-8 text-2xl font-bold">Style</h2>

      <div className="flex flex-wrap gap-3">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onOptionChange(activeCategory, option)}
            aria-pressed={alpacaConfig[activeCategory] === option}
            className={`cursor-pointer rounded-full border-2 px-4 py-2 font-semibold capitalize ${
              alpacaConfig[activeCategory] === option
                ? "border-violet-600 bg-violet-600 text-white"
                : "border-slate-800 text-slate-900 hover:border-violet-600"
            }`}
          >
            {option.replaceAll("-", " ")}
          </button>
        ))}
      </div>
    </section>
  );
}
