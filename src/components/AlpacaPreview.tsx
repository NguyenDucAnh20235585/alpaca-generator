import { layerOrder, type AlpacaConfig } from "../data/alpaca";

type AlpacaPreviewProps = {
  alpacaConfig: AlpacaConfig;
};

export default function AlpacaPreview({ alpacaConfig }: AlpacaPreviewProps) {
  return (
    <div
      className="relative aspect-square w-full max-w-[720px]"
      role="img"
      aria-label="Alpaca preview"
    >
      {layerOrder.map((layer) => (
        <img
          key={layer}
          src={`/alpaca/${layer}/${alpacaConfig[layer]}.png`}
          alt=""
          className="absolute inset-0 h-full w-full object-contain"
          draggable={false}
        />
      ))}
    </div>
  );
}
