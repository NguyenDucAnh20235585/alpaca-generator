export const translations = {
  en: {
    settings: "Settings",
    language: "Language",
    darkMode: "Dark Mode",
    customize: "Accessorise the Alpaca's",
    styles: "Styles",
    randomize: "Randomize",
    download: "Download",

    categories: {
      backgrounds: "Backgrounds",
      ears: "Ears",
      eyes: "Eyes",
      hair: "Hair",
      leg: "Leg",
      mouth: "Mouth",
      neck: "Neck",
      accessories: "Accessories",
      nose: "Nose",
    },
  },

  vi: {
    settings: "Cài đặt",
    language: "Ngôn ngữ",
    darkMode: "Chế độ tối",
    customize: "Trang trí Alpaca",
    styles: "Kiểu dáng",
    randomize: "Ngẫu nhiên",
    download: "Tải xuống",

    categories: {
      backgrounds: "Nền",
      ears: "Tai",
      eyes: "Mắt",
      hair: "Tóc",
      leg: "Chân",
      mouth: "Miệng",
      neck: "Cổ",
      accessories: "Phụ kiện",
      nose: "Mũi",
    },
  },

  ja: {
    settings: "セッティング",
    language: "ことば",
    darkMode: "ダークモード",
    customize: "アルパカをカスタマイズ",
    styles: "スタイル",
    randomize: "ランダム",
    download: "ダウンロード",

    categories: {
      backgrounds: "はいけい",
      ears: "みみ",
      eyes: "め",
      hair: "かみ",
      leg: "あし",
      mouth: "くち",
      neck: "くび",
      accessories: "アクセサリー",
      nose: "はな",
    },
  },
} as const;

export type Language = keyof typeof translations;
