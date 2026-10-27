type ThemeSwitchProps = {
  theme: "light" | "dark";
  onToggleTheme: () => void;
};

export default function ThemeSwitch({
  theme,
  onToggleTheme,
}: ThemeSwitchProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-label="Dark mode"
      aria-checked={theme === "dark"}
      onClick={onToggleTheme}
      className={`relative h-8 w-14 shrink-0 cursor-pointer rounded-full transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6246ea] ${
        theme === "dark" ? "bg-[#6246ea]" : "bg-[#d1d5db]"
      }`}
    >
      <span
        className={`absolute top-1 left-1 h-6 w-6 rounded-full bg-white shadow-sm transition-transform duration-200 ${
          theme === "dark" ? "translate-x-6" : "translate-x-0"
        }`}
      />
    </button>
  );
}
