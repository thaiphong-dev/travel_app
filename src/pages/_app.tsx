import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "../i18n/i18n";
import { Spectral } from "next/font/google";

const spectral = Spectral({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={spectral.className}>
      <Component {...pageProps} />
    </main>
  );
}
