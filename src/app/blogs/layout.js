import { Header } from "../components/Header";
import '../../styles/blogsIndex.css'
import { Footer } from "../components/Footer";

import { Montserrat } from 'next/font/google';
import { BackToTopButton } from "../components/BackToTopButton";

import { GoogleTagManager } from '@next/third-parties/google'

const montserrat = Montserrat({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	display: 'swap', // To avoid FOIT
});



export default function RootLayout({ children }) {
	return (
		<>
		
			 <GoogleTagManager gtmId="G-DNEH0HMLKW" />
			<body id="top" 	className={montserrat.className}>
				<Header />
				{children}
				<Footer />

				<BackToTopButton/>
			</body>
		</>
	);
}