import { useState } from "react";
import AlpacaPreview from "./components/AlpacaPreview";
import AlpacaActions from "./components/AlpacaActions";
import { defaultAlpaca, layerOrder, type AlpacaConfig } from "./data/alpaca";
import { alpacaOptions } from "./data/AlpacaOptions.tsx";

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

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-6">
      <h1 className="text-3xl font-bold">Alpaca Generator</h1>

      <AlpacaPreview alpacaConfig={alpacaConfig} />

      <AlpacaActions onRandom={handleRandom} onReset={handleReset} />
    </main>
  );
}

export default App;
