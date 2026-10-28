import { useState, useEffect } from "react";

import AlpacaHeader from "./components/AlpacaHeader";
import AlpacaPreview from "./components/AlpacaPreview";
import AlpacaActions from "./components/AlpacaActions";
import AlpacaCustomizer from "./components/AlpacaCustomizer";

import useAlpacaConfig from "./hooks/useAlpacaConfig";

import { type Language } from "./data/translations";
import { layerOrder } from "./data/alpaca";

type Theme = "light" | "dark";

function App() {
  const { alpacaConfig, handleRandom, handleOptionChange } = useAlpacaConfig();

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

  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem("alpaca-language");

    if (savedLanguage === "vi" || savedLanguage === "ja") {
      return savedLanguage;
    }

    return "en";
  });

  useEffect(() => {
    localStorage.setItem("alpaca-language", language);
    document.documentElement.lang = language;
  }, [language]);

  return (
    <main
      className={`
    min-h-screen bg-white px-4 py-8
    ${language === "vi" ? "font-vi" : "font-sans"}
    text-[#2b2c34] transition-colors duration-200
    dark:bg-[#181a20] dark:text-[#f5f5f5]
    min-[800px]:px-8
  `}
    >
      <div className="mx-auto max-w-7xl">
        <AlpacaHeader
          theme={theme}
          onToggleTheme={toggleTheme}
          language={language}
          onLanguageChange={setLanguage}
        />

        <div className="grid gap-10 min-[800px]:grid-cols-2 min-[800px]:items-start">
          <div className="w-full max-w-[500px] justify-self-center">
            <AlpacaPreview alpacaConfig={alpacaConfig} />

            <AlpacaActions
              onRandom={handleRandom}
              onDownload={handleDownload}
              language={language}
            />
          </div>

          <div className="w-full max-w-[500px] justify-self-center min-[800px]:max-w-none">
            <AlpacaCustomizer
              alpacaConfig={alpacaConfig}
              onOptionChange={handleOptionChange}
              language={language}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
