"use client";

import Link from "next/link";
import { ChefHat } from "lucide-react";

const footerLinks = [
  { href: "/about", label: "О нас" },
  { href: "/contacts", label: "Контакты" },
  { href: "/privacy", label: "Политика конфиденциальности" },
];

export function Footer() {
  return (
    <footer className="bg-green-900 dark:bg-gray-800 text-white dark:text-white py-6 md:py-8">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">

        <Link href="/" prefetch={false} className="flex-shrink-0">
          <img className="h-12 md:h-16" src="/logo-white.svg" alt="Logo" />
        </Link>
        <p className="text-xs md:text-sm text-center md:text-left order-3 md:order-2">&copy; 2025 Family Cook. Все права защищены.</p>
        <nav className="flex flex-wrap justify-center gap-3 md:gap-4 lg:gap-6 uppercase order-2 md:order-3">
          {footerLinks.map(({ href, label }) => (
            <Link key={href} href={href} className="text-xs md:text-sm hover:underline underline-offset-4" prefetch={false}>
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}

