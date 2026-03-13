import type { Metadata } from "next";
import "./globals.css";
import Background3D from "@/components/Background3D";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Datathon 2026 CIT",
  description: "24-Hour National Hackathon Event",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className="antialiased min-h-screen relative"
      >
        <Background3D />
        <SmoothScroll>
          <main className="relative z-10">
            {children}
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}
