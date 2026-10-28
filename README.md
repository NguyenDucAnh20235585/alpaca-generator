# Alpaca Generator

A responsive Alpaca Generator built with React, TypeScript, Vite, and Tailwind CSS.
Users can customize an alpaca, generate random combinations, and download their creations as PNG images.
**Live Demo:** https://alpaca-generator-eosin.vercel.app/

## Features

- **Alpaca Customization:** Customize different parts of an alpaca, including hair, eyes, ears, mouth, accessories, and backgrounds.
- **Randomize:** Generate random combinations of available styles.
- **Download:** Export the customized alpaca as a 720 × 720 PNG using the HTML Canvas API.
- **Responsive Design:** Layouts optimized for mobile, tablet, and desktop.
- **Dark Mode:** Switch between light and dark themes, with preferences saved in localStorage.
- **Multilingual Support:** English, Vietnamese, and Japanese (Hiragana/Katakana) UI translations.
- **Settings:** Responsive settings panel on mobile and centered modal on tablet/desktop.

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS v4
- HTML Canvas API
- Local Storage API

## Project Structure

```text
src/
├── components/
│   ├── AlpacaHeader.tsx
│   ├── AlpacaPreview.tsx
│   ├── AlpacaCustomizer.tsx
│   ├── AlpacaActions.tsx
│   ├── ThemeSwitch.tsx
│   └── LanguageSelector.tsx
├── data/
│   ├── alpaca.ts
│   ├── alpacaOptions.ts
│   └── translations.ts
├── App.tsx
└── index.css
public/
└── alpaca/
```

## Getting Started

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd alpaca-generator
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run ESLint:

```bash
npm run lint
```

## How It Works

### Alpaca Customization

The alpaca is rendered using multiple transparent PNG layers. Each customization option changes the corresponding layer while preserving the others.

### Randomize

The Randomize feature selects a random valid option for each category and updates the alpaca configuration.

### Download

The Download feature uses the HTML Canvas API to combine all selected image layers into a single PNG file.

### Dark Mode

The current theme is managed through React state. Tailwind CSS applies theme-specific styles, and the selected preference is stored in localStorage.

### Multilingual Support

The application uses a translation dictionary for English, Vietnamese, and Japanese(though it might be incorrect since my Japanese isn't that great).
React updates the displayed text according to the selected language without changing the underlying alpaca configuration or asset filenames.
Language preferences are saved in localStorage.

### Responsive Settings

On mobile, Settings opens as a panel below the header. On tablet and desktop, Settings opens in a centered modal with a dimmed backdrop.
The application also supports the Escape key as a shortcut to toggle Settings.

## Development Status

Core alpaca customization, randomization, downloading, responsive layouts, Dark Mode, and multilingual UI support have been implemented.
Final testing and responsive behavior refinements are ongoing.
