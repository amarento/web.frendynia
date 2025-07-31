import { type Metadata } from "next";
import localFont from "next/font/local";
import { Toaster } from "~/components/ui/toaster";
import "~/styles/globals.css";
import Providers from "./providers";
import { Inter, Cormorant_Garamond, Beau_Rivage, Bellefair, Bodoni_Moda } from "next/font/google";

export const metadata: Metadata = {
  title: "Amarento",
  description: "WhatsApp RSVP",
  icons: [{ rel: "icon", url: "/logo-white.svg" }],
};

const inter = Inter({
  variable: "--font-inter",
  weight: "400",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  weight: ["400", "500","600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const beau = Beau_Rivage({
  variable: "--font-beau",
  weight: "400",
  subsets: ["latin"],
});

const bellefair = Bellefair({
  variable: "--font-bellefair",
  weight: "400",
  subsets: ["latin"],
});

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const marjorie = localFont({
  src: "./_assets/fonts/Marjorie-Regular.woff2",
  variable: "--font-marjorie",
  weight: "400",
});

const marjorieSemiBold = localFont({
  src: "./_assets/fonts/Marjorie-SemiBold.woff2",
  variable: "--font-marjorie-semibold",
  weight: "500",
});

const lastik = localFont({
  src: "./_assets/fonts/Lastik-Regular.woff2",
  variable: "--font-lastik",
  weight: "400",
});

const melodrame = localFont({
  src: "./_assets/fonts/Melodrame.woff2",
  variable: "--font-melodrame",
  weight: "400",
});

const retrofans = localFont({
  src: "./_assets/fonts/Retrofans-Oblique.woff2",
  variable: "--font-retrofans",
  weight: "400",
});

const queensila = localFont({
  src: "./_assets/fonts/Queensila.woff2",
  variable: "--font-queensila",
  weight: "400",
});

const snell = localFont({
  src: "./_assets/fonts/Snell-BT-Regular.woff2",
  variable: "--font-snell",
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} ${beau.variable} ${bellefair.variable} ${bodoni.variable} ${marjorie.variable} ${marjorieSemiBold.variable} ${lastik.variable} ${melodrame.variable} ${retrofans.variable} ${queensila.variable} ${snell.variable}`}
    >
      <body className="overflow-hidden bg-white">
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
