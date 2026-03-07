import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BottomNav from "@/components/navigation/BottomNav";

import ThemeWrapper from "@/components/theme/ThemeWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BondSpace 💖",
  description: "A private digital universe for two people.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-[#080808] text-white selection:bg-rose-500/30 overflow-x-hidden`}>
        <ThemeWrapper>
          <div className="flex flex-col h-[100dvh] max-w-md mx-auto relative shadow-[0_0_100px_rgba(0,0,0,0.5)] bg-[#080808] overflow-hidden">
            {/* Background ambient glow effect restricted to container */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-[-1]">
              <div className="absolute top-[-25%] left-[-20%] w-[140%] h-[60%] rounded-full blur-[140px] transition-colors duration-1000" style={{ backgroundColor: 'var(--bg-glow-1)' }} />
              <div className="absolute bottom-[-25%] right-[-20%] w-[140%] h-[60%] rounded-full blur-[140px] transition-colors duration-1000" style={{ backgroundColor: 'var(--bg-glow-2)' }} />
            </div>

            <main className="flex-1 flex flex-col relative z-10 overflow-hidden">
              {children}
            </main>

            <BottomNav />
          </div>
        </ThemeWrapper>
      </body>
    </html>
  );
}
