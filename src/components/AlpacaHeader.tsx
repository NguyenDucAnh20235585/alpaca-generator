import { useEffect, useRef, useState } from "react";
import LanguageSelector from "./LanguageSelector";
import { translations, type Language } from "../data/translations";

import ThemeSwitch from "./ThemeSwitch";

type AlpacaHeaderProps = {
  theme: "light" | "dark";
  onToggleTheme: () => void;
  language: Language;
  onLanguageChange: (language: Language) => void;
};

export default function AlpacaHeader({
  theme,
  onToggleTheme,
  language,
  onLanguageChange,
}: AlpacaHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const settingsRef = useRef<HTMLDialogElement>(null);
  const t = translations[language];

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape" || event.repeat) return;

      event.preventDefault();
      setMenuOpen((open) => !open);
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const mediaQuery = window.matchMedia("(min-width: 800px)");
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleResize = () => {
      setMenuOpen(false);
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      document.body.style.overflow = previousOverflow;
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, [menuOpen]);

  useEffect(() => {
    const dialog = settingsRef.current;
    if (!dialog) return;

    if (menuOpen && window.matchMedia("(min-width: 800px)").matches) {
      if (!dialog.open) dialog.showModal();
    } else if (dialog.open) {
      dialog.close();
    }
  }, [menuOpen]);

  return (
    <>
      <header className="relative z-30 mx-auto mb-12 w-full max-w-[500px] min-[600px]:max-w-none">
        <div className="relative z-30 flex items-center justify-between gap-4 min-[450px]:justify-center">
          <h1 className="font-sans text-2xl font-bold uppercase min-[800px]:text-4xl">
            Alpaca Generator
          </h1>

          <button
            type="button"
            aria-label={menuOpen ? "Close settings" : "Open settings"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="shrink-0 cursor-pointer rounded-md p-2 hover:bg-black/5 dark:hover:bg-white/10 min-[450px]:absolute min-[450px]:right-0"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path d="M5 5L19 19M19 5L5 19" />
              ) : (
                <>
                  <path d="M10.3 2h3.4l.5 2.3 1.7.7 2-1.3 2.4 2.4-1.3 2 .7 1.7 2.3.5v3.4l-2.3.5-.7 1.7 1.3 2-2.4 2.4-2-1.3-1.7.7-.5 2.3h-3.4l-.5-2.3-1.7-.7-2 1.3-2.4-2.4 1.3-2-.7-1.7-2.3-.5v-3.4l2.3-.5.7-1.7-1.3-2 2.4-2.4 2 1.3 1.7-.7z" />
                  <circle cx="12" cy="12" r="3.2" />
                </>
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-10 min-[800px]:hidden"
            />

            <div
              id="alpaca-menu"
              className="absolute top-full left-1/2 z-20 max-h-[calc(100dvh-100px)] w-screen -translate-x-1/2 overflow-y-auto border-b border-black/20 bg-white dark:border-white/15 dark:bg-[#292c35] px-5 pt-12 pb-16 min-[800px]:hidden"
            >
              <div className="flex items-center justify-between gap-4 py-5">
                <span className="font-bold">{t.language}</span>

                <LanguageSelector
                  language={language}
                  onLanguageChange={onLanguageChange}
                />
              </div>

              <div className="flex items-center justify-between py-5">
                <span className="font-bold uppercase">{t.darkMode}</span>

                <ThemeSwitch theme={theme} onToggleTheme={onToggleTheme} />
              </div>
            </div>
          </>
        )}
      </header>

      <dialog
        ref={settingsRef}
        aria-labelledby="settings-title"
        onCancel={(event) => event.preventDefault()}
        onClose={() => setMenuOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            setMenuOpen(false);
          }
        }}
        className="
          fixed inset-0 m-auto
          max-h-[calc(100dvh-2rem)]
          w-[calc(100%-2rem)] max-w-[400px]
          overflow-y-auto rounded-xl
          border border-[#2b2c34]/20
          bg-white p-6 text-[#2b2c34] shadow-xl
          backdrop:bg-black/55
          dark:border-white/15
          dark:bg-[#292c35]
          dark:text-[#f5f5f5]
          min-[800px]:p-8
        "
      >
        <div>
          <div className="mb-6 flex items-center justify-between">
            <h2 id="settings-title" className="text-2xl font-bold">
              {t.settings}
            </h2>

            <button
              type="button"
              aria-label="Close settings"
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer rounded-md p-2 hover:bg-black/5 dark:hover:bg-white/10"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M5 5L19 19M19 5L5 19" />
              </svg>
            </button>
          </div>

          <div className="border-t border-[#2b2c34]/15 dark:border-white/15">
            <div className="flex items-center justify-between gap-4 py-5">
              <span className="font-bold">{t.language}</span>

              <LanguageSelector
                language={language}
                onLanguageChange={onLanguageChange}
              />
            </div>

            <div className="border-t border-[#2b2c34]/15 dark:border-white/15" />

            <div className="flex items-center justify-between gap-4 py-5">
              <span className="font-bold">{t.darkMode}</span>

              <ThemeSwitch theme={theme} onToggleTheme={onToggleTheme} />
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
