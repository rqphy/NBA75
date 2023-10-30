import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./css/reset.css"
import "./css/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "NBA75",
	description: "NBA 75th Anniversary Team",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	)
}
