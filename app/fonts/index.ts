import localFont from "next/font/local";

export const Sans = localFont({
  src: [
    {
      path: "./ZalandoSansExpanded-VariableFont_wght.ttf",
      weight: "400",
    },
  ],
  variable: "--font-zala",
});
