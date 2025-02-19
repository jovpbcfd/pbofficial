
'use client'

import Script from 'next/script'
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import '../../styles/blogsIndex.css'


import { Montserrat } from 'next/font/google';
import { GoogleTagManager } from '@next/third-parties/google'


export default function HomeLayout({ children }) {
    return (
 
        <>
            <head>
         
		<title> Panalobet | Trusted Online Casino & Sports Betting Platform</title>
		<meta
			name="description"
			content="Visit at trusted online casino in Philippines -Panalobet. Sign Up now and enjoy a wide range of casino games, live casino, Slot games, and exclusive promotion."
		/>
		<meta
			name="keywords"
			content="Panalobet, Online Casino"
		/>
            <link rel="icon" type="image/png" href="images/16x16px.png" />
            <meta name="google-site-verification" content="r-CEkLYVqgjWyBI5lJz4F8aBsbq1NdYD5YVqHtz8JEM" />
            <link rel="stylesheet" href="css/style.css" />
            <link rel="stylesheet" href="css/slick-min.css" />

            <meta name="msvalidate.01" content="75A513BE09DD1B3EBAF879C3F32F0115" />

            </head>
             <GoogleTagManager gtmId="G-DNEH0HMLKW" />
            <body>
                <Header />
                {children}
                <Footer />

                {/* Load jQuery & Slick early to avoid render delays */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0/jquery.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"
          integrity="sha512-XtmMtDEcNz2j7ekrtHvOVR4iwwaD6o/FUJe6+Zq+HgcCsk3kj4uSQQR8weQ2QVj1o0Pk6PwYLohm206ZzNfubg=="
			crossorigin="anonymous"
			referrerpolicy="no-referrer"
          strategy="beforeInteractive"
        />

        {/* Load general scripts after page loads */}
        <Script src="/js/general.js" strategy="lazyOnload" />
            </body>


        </>
 
    );
}