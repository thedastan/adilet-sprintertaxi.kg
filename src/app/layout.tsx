import type { Metadata } from "next";
import localFont from "next/font/local";
import '@/styles/globals.scss';

import { ChakraProvider } from "@chakra-ui/react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
export const metadata: Metadata = {
  title: "Портер такси Бишкек — Грузоперевозки по Кыргызстану",
  description: "Портер такси Бишкек. Надежные и недорогие грузоперевозки по Кыргызстану. Переезды домов и офисов, любые услуги по перевозке.",
  openGraph: {
    title: "Портер такси Бишкек — Грузоперевозки по Кыргызстану",
    description: "Надежные и недорогие грузоперевозки по Кыргызстану. Переезды домов и офисов, любые услуги по перевозке.",
    type: 'website',
  },
  authors: [{ name: 'gemzzi.com' }],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ChakraProvider>
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          {children}
        </body>
      </ChakraProvider>
    </html>
  );
}
