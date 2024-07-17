import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "i ❤️ buildspace",
  description: "Buildspace Internship 2024",
  icons: {
    icon:['/favicon.ico?v=4'],
    apple:['apple-touch-icon.png?v=4'],
    shortcut:['apple-touch-icon.png']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  );
}