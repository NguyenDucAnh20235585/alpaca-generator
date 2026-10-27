import { useState, useEffect } from "react";

import AlpacaHeader from "./components/AlpacaHeader";
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

type Theme = "light" | "dark";

function App() {
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

  const handleDownload = async () => {
    const canvas = document.createElement("canvas");
    canvas.width = 720;
    canvas.height = 720;

    const context = canvas.getContext("2d");
    if (!context) return;

    try {
      for (const layer of layerOrder) {
        const image = await new Promise<HTMLImageElement>((resolve, reject) => {
          const img = new Image();

          img.onload = () => resolve(img);
          img.onerror = () => reject(new Error(`Failed to load ${layer}`));

          img.src = `/alpaca/${layer}/${alpacaConfig[layer]}.png`;
        });

        context.drawImage(image, 0, 0, 720, 720);
      }

      const link = document.createElement("a");
      link.download = "alpaca.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (error) {
      console.error("Failed to download alpaca:", error);
      alert("Unable to download alpaca image.");
    }
  };

  const handleOptionChange = (category: AlpacaCategory, option: string) => {
    setAlpacaConfig((currentConfig) => ({
      ...currentConfig,
      [category]: option,
    }));
  };

  const [theme, setTheme] = useState<Theme>(() => {
    return localStorage.getItem("alpaca-theme") === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");

    localStorage.setItem("alpaca-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  return (
    <main className="min-h-screen bg-white px-4 py-8 font-sans text-[#2b2c34] transition-colors duration-200 dark:bg-[#181a20] dark:text-[#f5f5f5] min-[800px]:px-8">
      <div className="mx-auto max-w-7xl">
        <AlpacaHeader theme={theme} onToggleTheme={toggleTheme} />

        <div className="grid gap-10 min-[800px]:grid-cols-2 min-[800px]:items-start">
          <div className="w-full max-w-[500px] justify-self-center">
            <AlpacaPreview alpacaConfig={alpacaConfig} />

            <AlpacaActions
              onRandom={handleRandom}
              onDownload={handleDownload}
            />
          </div>

          <div className="w-full max-w-[500px] justify-self-center min-[800px]:max-w-none">
            <AlpacaCustomizer
              alpacaConfig={alpacaConfig}
              onOptionChange={handleOptionChange}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
