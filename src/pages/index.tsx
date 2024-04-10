import Image from "next/image";
import { Inter } from "next/font/google";
import HomePage from "@/components/home";
import Header from "@/components/common/header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="relative">
      <HomePage />
    </main>
  );
}
