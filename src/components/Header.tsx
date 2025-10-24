"use client";

import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MenuIcon, ChefHat } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

const navLinks = [
  { href: "/", label: "Главная" },
  { href: "/recipes", label: "Рецепты" },
  { href: "/about", label: "О сайте" },
  { href: "/contacts", label: "Контакты" },
];

export function Header() {
  return (
    <header className="bg-white sticky top-0 z-50 border-b border-gray-200">
  
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full items-center justify-between flex">

        <Link href="/" prefetch={false} className="flex-shrink-0">
          <img className="h-12 md:h-16" src="/logo.svg" alt="Logo" />
        </Link>
 
      <div className="hidden md:flex uppercase">
        <NavigationMenu>
          <NavigationMenuList>
            {navLinks.map(({ href, label }) => (
              <NavigationMenuItem key={href}>
                <NavigationMenuLink asChild>
                  <Link
                    href={href}
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50"
                    prefetch={false}
                  >
                    {label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[280px] sm:w-[350px]">
          <div className="flex flex-col gap-6 mt-8">
            <div className="text-xl font-bold text-green-900 uppercase mb-4">Меню</div>
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-2 text-lg font-medium hover:text-green-900 transition-colors uppercase border-b border-gray-100 pb-3"
                prefetch={false}
              >
                {label}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
      </div>
    </header>
  );
}

