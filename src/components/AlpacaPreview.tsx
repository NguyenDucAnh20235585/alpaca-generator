import { defaultAlpaca, layerOrder } from "../data/alpaca";

export default function AlpacaPreview() {
  return (
    <div
      role="img"
      aria-label="Alpaca preview"
      className="relative aspect-square w-full max-w-[450px] overflow-hidden"
    >
      {layerOrder.map((part) => (
        <img
          key={part}
          src={`/alpaca/${part}/${defaultAlpaca[part]}.png`}
          alt=""
          className="absolute inset-0 h-full w-full"
        />
      ))}
    </div>
  );
}
