import { useTranslation } from "react-i18next";

type AlpacaActionsProps = {
  onRandom: () => void;
  onDownload: () => void;
};

export default function AlpacaActions({
  onRandom,
  onDownload,
}: AlpacaActionsProps) {
  const { t } = useTranslation();

  const actionButtonClassName =
    "min-w-0 flex-1 cursor-pointer rounded-sm bg-[#2b2c34] px-3 py-5 text-xl font-bold text-white transition-colors hover:bg-[#e45858] dark:bg-[#3b4050] dark:hover:bg-[#e45858]";

  return (
    <div className="mt-5 flex w-full gap-4">
      <button
        type="button"
        onClick={onRandom}
        className={actionButtonClassName}
      >
        {t("randomize")}
      </button>

      <button
        type="button"
        onClick={onDownload}
        className={actionButtonClassName}
      >
        {t("download")}
      </button>
    </div>
  );
}
