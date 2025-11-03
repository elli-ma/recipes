"use client";

import { Link } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative rounded-xl overflow-hidden mb-12">
      <div className="relative min-h-[60vh] md:h-[100vh] flex items-center justify-center bg-gray-50">
        <div className="w-full h-full flex items-center justify-center p-10 md:p-16 flex-col">
          <Image
            src="/hero.svg"
            alt="Семейные рецепты"
            width={1200}
            height={800}
            priority
            className="w-full h-auto max-w-2xl object-contain"
          />
                {/* <h1  className="text-3xl md:text-4xl pt-10 flex-shrink-0 uppercase font-black text-green-900 leading-none py-2">
          
          семейные рецепты
        </h1> */}
        </div>
      </div>
    </section>
  );
}