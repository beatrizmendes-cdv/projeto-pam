import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { JetBrains_Mono, Outfit } from "next/font/google";
import { SiderBar } from "./components/SiderBar";
import { Header } from "./components/Header";
import { ReactQueryProvider } from "./components/providers/react-query-provider";
import { MuiProvider } from "./components/providers/mui-provider";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PAM",
  description: "Mini PAM",
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="pt-BR" className={`${outfit.variable} ${jetbrainsMono.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex h-screen flex-col overflow-hidden bg-[#F8FAFC]">
        <MuiProvider>
          <Header />
          <div className="flex flex-1 overflow-hidden">
            <SiderBar />
            <main className="flex-1 overflow-y-auto p-8">
              <ReactQueryProvider>
                {children}

              </ReactQueryProvider>
            </main>
          </div>
        </MuiProvider>
      </body>
    </html>
  );
}
