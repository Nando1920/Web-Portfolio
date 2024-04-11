"use client";
import { useRef } from "react";
import Navbar from "./navbar";
import { ScrollWrapper } from "./scrollWrapper";
import WelcomeSection from "./welcome";

export default function Home() {
  return (
    <main>
      <Navbar />
      <ScrollWrapper>
        <div className="p-4 sm:px-10 lg:px-16 xl:p-48 flex flex-col">
          <WelcomeSection />
        </div>
      </ScrollWrapper>
    </main>
  );
}
