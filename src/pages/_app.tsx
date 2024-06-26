import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "../i18n/i18n";
import { Exo } from "next/font/google";
import "swiper/swiper-bundle.css";
import Header from "@/components/common/header";

const exo = Exo({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={exo.className}>
      <Header />
      <Component {...pageProps} />
    </main>
  );
}
