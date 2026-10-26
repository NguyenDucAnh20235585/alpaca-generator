export const layerOrder = [
  "backgrounds",
  "ears",
  "hair",
  "leg",
  "neck",
  "nose",
  "mouth",
  "eyes",
  "accessories",
] as const;

export type AlpacaCategory = (typeof layerOrder)[number];

export type AlpacaConfig = Record<AlpacaCategory, string>;

export const defaultAlpaca: AlpacaConfig = {
  backgrounds: "blue50",
  ears: "default",
  hair: "default",
  leg: "default",
  neck: "default",
  nose: "nose",
  mouth: "default",
  eyes: "default",
  accessories: "headphone",
};

export const categoryOrder: AlpacaCategory[] = [
  "backgrounds",
  "ears",
  "eyes",
  "hair",
  "leg",
  "mouth",
  "neck",
  "accessories",
  "nose",
];
