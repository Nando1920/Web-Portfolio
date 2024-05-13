import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ScrollProvider } from "./scroll/scrollProvider";
import { ScrollWrapper } from "./scroll/scrollWrapper";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fernando's Portfolio",
  description: "developer personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ScrollProvider>
        <ScrollWrapper>
          <SpeedInsights />
          <body className={inter.className}>{children}</body>
        </ScrollWrapper>
      </ScrollProvider>
    </html>
  );
}
