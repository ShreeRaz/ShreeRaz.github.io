import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-Inter-sans",
  subsets: ["latin"],
});

const jetbrainsmono = JetBrains_Mono({
  variable: "--font-JetBrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ankitraj Kadel",
  description: "A personal portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsmono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
