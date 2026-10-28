import { layerOrder, type AlpacaConfig } from "../data/alpaca";

export default function useDownload(alpacaConfig: AlpacaConfig) {
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

  return { handleDownload };
}
