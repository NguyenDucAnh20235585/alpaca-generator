type AlpacaActionsProps = {
  onRandom: () => void;
  onReset: () => void;
  onDownload: () => void;
};

export default function AlpacaActions({
  onRandom,
  onReset,
  onDownload,
}: AlpacaActionsProps) {
  return (
    <div className="mt-6 flex flex-wrap gap-4">
      <button
        type="button"
        onClick={onRandom}
        className="cursor-pointer rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
      >
        Randomize
      </button>

      <button
        type="button"
        onClick={onReset}
        className="cursor-pointer rounded-lg border border-gray-300 px-5 py-2 hover:bg-gray-100"
      >
        Reset
      </button>

      <button
        type="button"
        onClick={onDownload}
        className="cursor-pointer rounded-lg border border-gray-300 px-5 py-2 hover:bg-gray-100"
      >
        Download
      </button>
    </div>
  );
}
