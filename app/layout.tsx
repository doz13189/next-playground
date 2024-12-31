import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import { MainLayout } from "@/app/_components/main-layout";
import { Menu } from "@/app/_components/menu";
import { css } from "@/styled-system/css";
import { Container } from "@/styled-system/jsx";

const font = localFont({
  src: "./_fonts/RocknRollOne-Regular.ttf",
})

const serviceTitle = "Search the hero";
const serviceDescription =
  "僕のヒーローアカデミア ULTRA IMPACT(ヒロトラ)のプレイキャラ/メモリーを検索することができる非公式サービスです。また、リーク情報は扱いません。";
const serviceImageUrl =
  "https://search-the-hero.vercel.app/_next/image?url=%2Fmemory-image%2Fmemory_l_2400152.webp&w=1920&q=75";
const serviceUrl = "https://search-the-hero.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(serviceUrl),
  title: serviceTitle,
  description: serviceDescription,
  openGraph: {
    type: "website",
    url: serviceUrl,
    title: serviceTitle,
    description: serviceDescription,
    images: [
      {
        url: serviceImageUrl,
        width: 800,
        height: 600,
        alt: "Og Image Alt",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: serviceTitle,
    description: serviceDescription,
    images: [
      {
        url: serviceImageUrl,
        alt: "Twitter Image Alt",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${font.className} ${css({ backgroundColor: "grey.100" })}`}
      >
        <Menu />
        <Container>

          {children}
          <GoogleAnalytics gaId="G-KC2FT82FBP" />
        </Container>

        <Container>
          <MainLayout backgroundColor={"black.100"}>
            <footer className={css({ textAlign: "center", color: "white.100", paddingY: "5" })}>
              <p>{"Copyright © 2024-2025 HS All Rights Reserved."}</p>
            </footer>
          </MainLayout>
        </Container>

      </body>
    </html>
  );
}
