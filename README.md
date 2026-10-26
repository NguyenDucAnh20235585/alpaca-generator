# Alpaca Generator

A simple Alpaca Image Generator built with React, TypeScript, Vite, and Tailwind CSS v4.

This project was independently developed as a frontend practice task, inspired by the [Alpaca Generator](https://alpaca-image-generator-beta.vercel.app/).

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS v4
- HTML Canvas API

## Features

- **Alpaca Preview:** Display an alpaca using multiple PNG layers.
- **Customization:** Change individual parts such as hair, eyes, mouth, accessories, and backgrounds.
- **Randomize:** Generate a random alpaca configuration.
- **Reset:** Restore the default configuration.
- **Download:** Export the customized alpaca as a 720×720 PNG image.

## Getting Started

**Requirements:** Node.js and npm.

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Other commands:

```bash
npm run build
npm run lint
npm run preview
```

## Project Structure

```text
src/
├── components/
│   ├── AlpacaPreview.tsx
│   ├── AlpacaCustomizer.tsx
│   └── AlpacaActions.tsx
├── data/
│   ├── alpaca.ts
│   └── alpacaOptions.ts
├── App.tsx
├── index.css
└── main.tsx

public/
├── alpaca/
└── favicon.svg
```

## Architecture

The application uses React state and props to manage alpaca customization.

- `App.tsx` manages the shared alpaca configuration and action handlers.
- `AlpacaPreview.tsx` renders the selected image layers.
- `AlpacaCustomizer.tsx` handles category and style selection.
- `AlpacaActions.tsx` provides Randomize, Reset, and Download controls.
- `src/data/` stores configuration types, layer order, and available options.

The Download feature uses the Canvas API to combine selected image layers into a single PNG.

## Reference & Assets

Reference: [victorcodess/alpaca-image-generator](https://github.com/victorcodess/alpaca-image-generator)

The implementation was developed separately from the reference source. The PNG assets originate from the reference project. Their redistribution permissions have not yet been verified.

This repository is intended for private educational and practice use.
