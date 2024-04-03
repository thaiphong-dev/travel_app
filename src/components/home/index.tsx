import React from "react";
import Banner from "./banner";
import CourtInformation from "./infro";

export default function HomePage() {
  return (
    <div className="w-screen">
      <Banner />
      <CourtInformation />
    </div>
  );
}
