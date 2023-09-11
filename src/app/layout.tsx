import "./globals.css";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";

import { Header } from "@organisms/Header";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "ShopSel Web Storefront",
	description: "The best shop for your daily needs",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${rubik.className} min-h-screen pt-4 sm:pt-6`}>
				<Header />
				{children}
			</body>
		</html>
	);
}
