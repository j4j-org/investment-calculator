import { AppWrapper } from '@/features';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Investment Calculator',
	description:
		'This is a simple investment calculator that allows you to calculate the future value of an investment based on the initial investment amount, the annual interest rate, and the number of years you plan to invest',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<AppWrapper>{children}</AppWrapper>
			</body>
		</html>
	);
}
