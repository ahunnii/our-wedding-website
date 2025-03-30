import "~/styles/globals.css";

import { Kalam, Ms_Madi } from "next/font/google";

// import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

const madi = Ms_Madi({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-madi",
  weight: ["400"],
});

const kalam = Kalam({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-kalam",
  weight: ["300", "400", "700"],
});

import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "Andrew and Jade's Wedding 2025",
  description:
    "Join us for our winter wedding celebration in Frankenmuth, Michigan on December 13, 2025",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${madi.variable} ${kalam.variable}`}>
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
