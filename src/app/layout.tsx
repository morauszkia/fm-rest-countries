import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header/Header";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Where in the world?",
  description:
    "Everything you want to know about the countries of the world in one place",
};

const nunitoSans = Nunito_Sans({
  subsets: ["latin", "latin-ext", "cyrillic"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={nunitoSans.className} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
