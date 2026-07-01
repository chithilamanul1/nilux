import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
