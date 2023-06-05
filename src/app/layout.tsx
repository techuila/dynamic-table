import '@styles/globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Dynamic Tables',
	description:
		'A web application that brings the flexibility of Microsoft Excel online. Users can create custom tables, dynamically add or adjust columns and rows, input values on-the-fly, and even add new sheets. This tool is designed to streamline data management and improve productivity.'
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<head>
				<link rel='icon' href='/assets/icons/icon.png' sizes='any' />
			</head>

			<body className={inter.className}>
				{children}

				<div className='main'>
					<div className='gradient'></div>
				</div>
			</body>
		</html>
	);
}
