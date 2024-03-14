import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Porfolio",
  description: "Portafolio de Emmanuel Anguiano",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="../../public/MaterialSymbolsCode.svg" />
      </Head>
      <body className="bg-black relative">{children}</body>
    </html>
  );
}
