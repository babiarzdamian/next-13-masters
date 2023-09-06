import "./globals.css";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";

import { Header } from "@organisms/Header";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "SHOPSEL",
	description: "The best shop for your daily needs",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${rubik.className} min-h-screen py-12`}>
				<Header />
				{children}
			</body>
		</html>
	);
}
