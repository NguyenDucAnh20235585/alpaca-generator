import { useEffect, useState } from "react";

export default function AlpacaHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    const mediaQuery = window.matchMedia("(min-width: 800px)");
    const previousOverflow = document.body.style.overflow;

    if (!mediaQuery.matches) {
      document.body.style.overflow = "hidden";
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    const handleResize = () => {
      if (mediaQuery.matches) setMenuOpen(false);
    };

    window.addEventListener("keydown", handleEscape);
    mediaQuery.addEventListener("change", handleResize);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, [menuOpen]);

  return (
    <header className="relative z-30 mx-auto mb-12 w-full max-w-[500px] min-[800px]:max-w-none">
      <div className="relative z-30 flex items-center justify-between gap-4 min-[450px]:justify-center min-[800px]:justify-between">
        <h1 className="text-2xl font-bold uppercase min-[800px]:text-4xl">
          Alpaca Generator
        </h1>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="alpaca-menu"
          onClick={() => setMenuOpen((open) => !open)}
          className="shrink-0 cursor-pointer rounded-md p-2 hover:bg-black/5 min-[450px]:absolute min-[450px]:right-0 min-[800px]:static"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path d="M5 5L19 19M19 5L5 19" />
            ) : (
              <path d="M4 6H20M4 12H20M4 18H20" />
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
            className="
              absolute top-full left-1/2 z-20
              w-screen -translate-x-1/2
              max-h-[calc(100dvh-100px)] overflow-y-auto
              border-b border-black/20 bg-white
              px-5 pt-12 pb-16
              min-[800px]:right-0 min-[800px]:left-auto
              min-[800px]:mt-2 min-[800px]:w-56
              min-[800px]:translate-x-0
              min-[800px]:rounded-lg min-[800px]:border
              min-[800px]:p-4 min-[800px]:shadow-lg
            "
          >
            <div className="flex items-center justify-between py-5">
              <span className="font-bold uppercase">Language</span>
              <span className="font-bold">EN</span>
            </div>

            <div className="flex items-center justify-between py-5">
              <span className="font-bold uppercase">Theme</span>
              <span className="font-bold">Light</span>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
