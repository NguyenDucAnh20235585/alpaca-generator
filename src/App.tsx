import { useState } from "react";
import AlpacaPreview from "./components/AlpacaPreview";
import { defaultAlpaca, type AlpacaConfig } from "./data/alpaca";

function App() {
  const [alpacaConfig, setAlpacaConfig] = useState<AlpacaConfig>(defaultAlpaca);

  const handleReset = () => {
    setAlpacaConfig({ ...defaultAlpaca });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-6">
      <h1 className="text-3xl font-bold">Alpaca Generator</h1>

      <AlpacaPreview alpacaConfig={alpacaConfig} />

      <button
        type="button"
        onClick={handleReset}
        className="cursor-pointer rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
      >
        Reset
      </button>
    </main>
  );
}

export default App;
