import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Hasyim Asy'ari — Backend Developer",
  description:
    "Backend Developer experienced in Laravel, Node.js, and Go. Building scalable, clean, and maintainable backend systems.",
  keywords: [
    "Backend Developer",
    "Laravel",
    "Node.js",
    "Go",
    "REST API",
    "Full Stack",
    "Surabaya",
    "Indonesia",
  ],
  authors: [{ name: "Muhammad Hasyim Asy'ari" }],
  openGraph: {
    title: "Muhammad Hasyim Asy'ari — Backend Developer",
    description:
      "Backend Developer experienced in Laravel, Node.js, and Go. Building scalable, clean, and maintainable backend systems.",
    type: "website",
  },
};

import { ThemeProvider } from "./providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
