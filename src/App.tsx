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
    <main className="min-h-screen px-4 py-8 min-[800px]:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-12 text-center text-4xl font-bold uppercase">
          Alpaca Generator
        </h1>

        <div className="grid gap-10 min-[800px]:grid-cols-2 min-[800px]:items-start">
          <div className="w-full max-w-[500px] justify-self-center">
            <AlpacaPreview alpacaConfig={alpacaConfig} />

            <AlpacaActions onRandom={handleRandom} onReset={handleReset} />
          </div>

          <AlpacaCustomizer
            alpacaConfig={alpacaConfig}
            onOptionChange={handleOptionChange}
          />
        </div>
      </div>
    </main>
  );
}

export default App;
