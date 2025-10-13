import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";

import { Toaster } from "react-hot-toast";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/counter.css";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { GoogleOAuthProvider } from "@react-oauth/google";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
  display: "swap",
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "https://www.yogprerna.com";

export const metadata: Metadata = {
  title: {
    default: "Yogprerna ",
    template: "%s - Yogprerna",
  },
  description:
    "Discover yoga properties, instructors, and facilities. Yogprerna is your all-in-one platform for finding everything related to yoga.",
  keywords: [
    "Yoga",
    "Yoga classes",
    "Yoga studios",
    "Yoga retreats",
    "Yoga near me",
  ],
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      {
        url: "/img/logo/favicon.png",
        type: "img/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${poppins.variable}`}>
      <head>
        <Script
          id="gtm-head"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
           (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5JCNQ8FT');
            `,
          }}
        />
      </head>
      <body className="antialiased font-sans">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5JCNQ8FT"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            className="hidden"
          ></iframe>
        </noscript>

        <Toaster position="top-right" />
        <GoogleOAuthProvider
          clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ""}
        >
          {children}
        </GoogleOAuthProvider>

        <Script
          src="https://kit.fontawesome.com/87f0afa689.js"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
