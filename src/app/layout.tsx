import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";

// Подключаем Montserrat
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat", // CSS-переменная для Tailwind
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Family Cook - Семейные рецепты для каждого дня",
  description: "Домашние рецепты нашей большой семьи: бабушек, мамы, тёти, сестры и брата. Проверенные временем и любовью семейные традиции.",
  openGraph: {
    title: "Family Cook - Семейные рецепты",
    description: "Домашние рецепты нашей большой семьи. Проверенные временем и любовью семейные традиции.",
    url: "https://family-cook.ru",
    siteName: "Family Cook",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Family Cook - Семейные рецепты",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Family Cook - Семейные рецепты",
    description: "Домашние рецепты нашей большой семьи",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <body className="font-sans antialiased bg-gray-50">
        <Header/>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </main>
        
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}