import type { Metadata } from "next";

const serviceTitle = "test";
const serviceDescription =
  "テスト用の説明文です。";
const serviceImageUrl =
  "https://placehold.jp/150x150.png";
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

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
