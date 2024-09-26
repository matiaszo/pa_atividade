import localFont from "next/font/local";
import { Roboto } from "next/font/google" // titles 
import { Open_Sans } from "next/font/google" // secondary texts
import "./globals.css";
import { Header } from "@/components/header";
import { Body } from "@/components/body";
import { ShoppingOverflow } from "@/components/shoppingOverflow";
import { InformationOverflow } from "@/components/informationOverflow"

const roboto = Roboto({
  weight: ["100", "400", "900"],
  style:"normal",
  variable: "--roboto",
  subsets: ["latin"]
})

const open_sans = Open_Sans({
  weight: ["300", "600", "800"],
  style:"normal",
  variable: "--sans",
  subsets: ["latin"]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      className={`${roboto.variable}`}
      >
        <Header/>
        {children}
        <Body/>
        <ShoppingOverflow/>
        <InformationOverflow/>
      </body>
    </html>
  );
}
