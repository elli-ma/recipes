"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChefHat, Clock, BookOpen, Sparkles } from "lucide-react";

export function Hero() {
  return (

    <section className="">
      <section className="relative  rounded-xl overflow-hidden  mb-12 ">

        <div className="relative py-16 px-6 md:py-20 text-center">


          <h1 className="text-4xl sm:text-7xl text-green-900 md:text-8xl lg:text-8xl font-black mb-6 leading-tight uppercase">
       как приготовить
            <br />
            
          </h1>

          <p className="mt-6 text-base font-medium text-gray-900 max-w-3xl mx-auto leading-relaxed uppercase">
            Простые пошаговые рецепты для начинающих и опытных кулинаров.
            Готовьте вкусно каждый день!
          </p>


          {/* Feature badges */}
          <div className="flex flex-wrap justify-center gap-6 text-white/90">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Clock className="h-5 w-5" />
              <span className="text-sm font-medium">Быстрые рецепты</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Sparkles className="h-5 w-5" />
              <span className="text-sm font-medium">Пошаговые инструкции</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <ChefHat className="h-5 w-5" />
              <span className="text-sm font-medium">Проверенные рецепты</span>
            </div>
          </div>
        </div>
      </section>
    </section>

  );
}