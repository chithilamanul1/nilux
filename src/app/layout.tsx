import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const maname = localFont({
  src: "../../public/maname.ttf",
  variable: "--font-maname",
});

export const metadata: Metadata = {
  title: "Nilux — Business Review & Decision Support for SMEs",
  description: "Empowering Sri Lankan SMEs to Build Better Businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={maname.variable}>
      <body>{children}</body>
    </html>
  );
}
