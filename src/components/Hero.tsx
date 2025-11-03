"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChefHat, Heart } from "lucide-react";

export function Hero() {
  return (
    <section className="relative rounded-xl overflow-hidden mb-12">
      <div className="relative min-h-[60vh] md:h-[100vh] flex items-center justify-center bg-gray-50">
        <div className="w-full h-full flex items-center justify-center p-10 md:p-16 flex-col gap-6 md:gap-8">
          <Image
            src="/hero.svg"
            alt="Семейные рецепты"
            width={1200}
            height={800}
            priority
            className="w-full h-auto max-w-2xl object-contain"
          />
          
          <div className="text-center max-w-3xl">
            <p className="text-base md:text-xl text-gray-700 mb-6 md:mb-8 leading-relaxed">
              Домашние рецепты нашей большой семьи. Проверенные временем блюда, которые объединяют за одним столом.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
              <Link href="/recipes" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-green-900 hover:bg-green-800 uppercase font-semibold text-sm md:text-base">
                  Смотреть рецепты
                </Button>
              </Link>
              <Link href="/about" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto uppercase font-semibold text-sm md:text-base border-green-900 text-green-900 hover:bg-green-50">
                  О нас
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}