import type { Metadata } from 'next';
import '@/styles/globals.scss';

export const metadata: Metadata = {
	title: 'gymbag',
	description: 'helps you get set for gym',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/favicon.ico" />
			</head>
			<body>{children}</body>
		</html>
	);
}
