import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "Abel Abera | Finance x Tech Portfolio",
  description: "Bridging Finance and Technology for smarter Insight",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}