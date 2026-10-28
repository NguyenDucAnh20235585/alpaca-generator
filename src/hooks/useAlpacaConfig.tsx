import { useState } from "react";

import {
  defaultAlpaca,
  layerOrder,
  type AlpacaConfig,
  type AlpacaCategory,
} from "../data/alpaca";

import { alpacaOptions } from "../data/alpacaOptions";

export default function useAlpacaConfig() {
  const [alpacaConfig, setAlpacaConfig] = useState<AlpacaConfig>(defaultAlpaca);

  const handleRandom = () => {
    const randomConfig: AlpacaConfig = {
      ...defaultAlpaca,
    };

    for (const category of layerOrder) {
      const options = alpacaOptions[category];

      const randomIndex = Math.floor(Math.random() * options.length);

      randomConfig[category] = options[randomIndex] ?? defaultAlpaca[category];
    }

    setAlpacaConfig(randomConfig);
  };

  const handleOptionChange = (category: AlpacaCategory, option: string) => {
    setAlpacaConfig((currentConfig) => ({
      ...currentConfig,
      [category]: option,
    }));
  };

  return {
    alpacaConfig,
    handleRandom,
    handleOptionChange,
  };
}
