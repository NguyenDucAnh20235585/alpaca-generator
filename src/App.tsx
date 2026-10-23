import { useState } from "react";

import AlpacaPreview from "./components/AlpacaPreview";
import AlpacaActions from "./components/AlpacaActions";
import AlpacaCustomizer from "./components/AlpacaCustomizer";

import {
  defaultAlpaca,
  layerOrder,
  type AlpacaConfig,
  type AlpacaCategory,
} from "./data/alpaca";

import { alpacaOptions } from "./data/alpacaOptions";

function App() {
  const [alpacaConfig, setAlpacaConfig] = useState<AlpacaConfig>(defaultAlpaca);

  const handleReset = () => {
    setAlpacaConfig({ ...defaultAlpaca });
  };

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

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-6">
      <h1 className="text-3xl font-bold">Alpaca Generator</h1>

      <AlpacaPreview alpacaConfig={alpacaConfig} />

      <AlpacaActions onRandom={handleRandom} onReset={handleReset} />

      <AlpacaCustomizer
        alpacaConfig={alpacaConfig}
        onOptionChange={handleOptionChange}
      />
    </main>
  );
}

export default App;
