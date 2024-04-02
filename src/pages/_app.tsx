import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Courgette } from "next/font/google";

const great_Vibes = Courgette({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={great_Vibes.className}>
      <Component {...pageProps} />
    </main>
  );
}
