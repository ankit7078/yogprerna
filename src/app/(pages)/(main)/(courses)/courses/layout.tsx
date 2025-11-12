import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "Yogprerna - Find Your Course",
  description: "Discover top-rated yoga retreats, meditation courses, and wellness trainings.",
};

// Load Google fonts with CSS variables
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Apply both fonts as CSS variables */}
      <body className={`${montserrat.variable} ${poppins.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
