"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChefHat, Clock, BookOpen, Sparkles } from "lucide-react";

export function Hero() {
  return (

    <section className="">
      <section className="relative  rounded-xl overflow-hidden  mb-12 ">

        <div className="relative min-h-[60vh] md:h-[100vh] py-12 px-4 md:py-20 md:px-6 text-center flex flex-col justify-center">

          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-green-900 font-black mb-4 md:mb-6 leading-tight uppercase">
            Семейные рецепты
          </h1>

          <p className="mt-4 md:mt-6 text-sm sm:text-base font-medium text-gray-900 max-w-3xl mx-auto leading-relaxed uppercase px-4">
            Домашние рецепты нашей большой семьи.
          </p>

          {/* Feature badges */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-6 mt-6 md:mt-8 text-gray-700">
            <div className="flex items-center gap-2 bg-green-50 border border-green-200 px-3 py-2 md:px-4 md:py-2 rounded-full">
              <BookOpen className="h-4 w-4 md:h-5 md:w-5 text-green-900" />
              <span className="text-xs md:text-sm font-medium">Семейное наследие</span>
            </div>
            <div className="flex items-center gap-2 bg-green-50 border border-green-200 px-3 py-2 md:px-4 md:py-2 rounded-full">
              <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-green-900" />
              <span className="text-xs md:text-sm font-medium">Проверенные годами</span>
            </div>
            <div className="flex items-center gap-2 bg-green-50 border border-green-200 px-3 py-2 md:px-4 md:py-2 rounded-full">
              <ChefHat className="h-4 w-4 md:h-5 md:w-5 text-green-900" />
              <span className="text-xs md:text-sm font-medium">Домашние рецепты</span>
            </div>
          </div>
        </div>
      </section>
    </section>

  );
}