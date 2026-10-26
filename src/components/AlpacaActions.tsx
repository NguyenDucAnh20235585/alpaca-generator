type AlpacaActionsProps = {
  onRandom: () => void;
  onDownload: () => void;
};

export default function AlpacaActions({
  onRandom,
  onDownload,
}: AlpacaActionsProps) {
  const actionButtonClassName =
    "min-w-0 flex-1 cursor-pointer rounded-sm bg-zinc-800 px-3 py-4 text-lg font-bold text-white transition-colors hover:bg-red-500";

  return (
    <div className="mt-5 flex w-full gap-4">
      <button
        type="button"
        onClick={onRandom}
        className={actionButtonClassName}
      >
        Randomize
      </button>

      <button
        type="button"
        onClick={onDownload}
        className={actionButtonClassName}
      >
        Download
      </button>
    </div>
  );
}
