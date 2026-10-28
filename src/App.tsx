import { useTranslation } from "react-i18next";

import AlpacaHeader from "./components/AlpacaHeader";
import AlpacaPreview from "./components/AlpacaPreview";
import AlpacaActions from "./components/AlpacaActions";
import AlpacaCustomizer from "./components/AlpacaCustomizer";

import useAlpacaConfig from "./hooks/useAlpacaConfig";
import useDownload from "./hooks/useDownload";
import useTheme from "./hooks/useTheme";

function App() {
  const { alpacaConfig, handleRandom, handleOptionChange } = useAlpacaConfig();
  const { handleDownload } = useDownload(alpacaConfig);
  const { theme, toggleTheme } = useTheme();
  const { i18n } = useTranslation();

  return (
    <main
      className={`
        min-h-screen bg-white px-4 py-8
        ${i18n.language === "vi" ? "font-vi" : "font-sans"}
        text-[#2b2c34] transition-colors duration-200
        dark:bg-[#181a20] dark:text-[#f5f5f5]
        min-[800px]:px-8
      `}
    >
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
