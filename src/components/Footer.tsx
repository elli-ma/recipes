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
    <footer className=" bg-green-900 dark:bg-gray-800 text-white dark:text-white py-8">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">

        <Link href="/" prefetch={false} className="">
          <img className="h-16" src="/logo-white.svg" alt="Logo" />
        </Link>
        <p className="text-sm text-center md:text-left">&copy; 2025 How to Cook. Все права защищены.</p>
        <nav className="flex gap-4 sm:gap-6 mt-4 md:mt-0 uppercase">
          {footerLinks.map(({ href, label }) => (
            <Link key={href} href={href} className="text-sm hover:underline underline-offset-4" prefetch={false}>
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}

