"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative bg-white rounded-xl border overflow-hidden my-4 md:my-8">
      <div className=" flex items-center justify-center py-8 px-4 md:py-12 md:px-8 lg:py-16 lg:px-12">
        <div className="w-full flex items-center justify-center flex-col gap-4 md:gap-6 lg:gap-8  mx-auto">
          <Image
            src="/hero.svg"
            alt="Семейные рецепты"
            width={1200}
            height={500}
            priority
            className="w-full h-auto max-w-xl object-contain"
          />
          
          <div className="text-center max-w-3xl w-full px-2">
            <p className="text-sm md:text-lg lg:text-xl text-gray-700 mb-4 md:mb-6 lg:mb-8 leading-relaxed">
              Домашние рецепты нашей большой семьи. Проверенные временем блюда, которые объединяют за одним столом.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center w-full sm:w-auto">
              <Link href="/recipes" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-green-900 hover:bg-green-800 uppercase font-semibold text-xs md:text-sm">
                  Смотреть рецепты
                </Button>
              </Link>
              <Link href="/about" className="w-full sm:w-auto">
               
                <Button size="lg" variant="outline" className="w-full shadow-none text-sm uppercase font-semibold">  О нас
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}