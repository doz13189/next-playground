import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from "next";
import { RocknRoll_One } from "next/font/google";
import "./globals.css";
import { Menu } from "./search/_components/menu";
import Head from 'next/head';

const font = RocknRoll_One({
	weight: ["400"],
	subsets: ["cyrillic"],
});

const serviceTitle = "Search the hero";
const serviceDescription = "僕のヒーローアカデミア ULTRA IMPACT(ヒロトラ)のプレイキャラ/メモリーを検索することができる非公式サービスです。また、リーク情報は扱いません。";
const serviceImageUrl = "https://search-the-hero.vercel.app/_next/image?url=%2Fmemory-image%2Fmemory_l_2400152.webp&w=1920&q=75";
const serviceUrl = "https://search-the-hero.vercel.app";

export const metadata: Metadata = {
	metadataBase: new URL(serviceUrl),
	title: serviceTitle,
	description: serviceDescription,
	openGraph: {
		type: 'website',
		url: serviceUrl,
		title: serviceTitle,
		description: serviceDescription,
		images: [
			{
				url: serviceImageUrl,
				width: 800,
				height: 600,
				alt: 'Og Image Alt',
			},
		],
	},
	twitter: {
		card: 'summary',
		title: serviceTitle,
		description: serviceDescription,
		images: [
			{
				url: serviceImageUrl,
				alt: 'Twitter Image Alt',
			},
		],
	},
}


export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {


	return (
		<html lang="ja">
			<body className={font.className}>
				<div className="container mx-auto">
					{/*
					<div
						className="
						my-1
						py-2
						flex
						justify-center
						text-orange
						bg-very-light-gray
						border-t-2
						border-b-2
						border-grey
						"
					>
						<Link href="/search">Search the hero</Link>
					</div>
					*/}

					<Menu />

					{children}
					<Analytics />
				</div>
			</body>
		</html>
	);
}
