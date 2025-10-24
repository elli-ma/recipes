"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Newsletter() {
  return (
    <section className="py-8 md:py-16 rounded-2xl mb-8 md:mb-16 px-4 md:px-0">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-green-900">Сохраните семейные рецепты</h2>
        <p className="text-gray-700 mb-4 md:mb-6 text-sm md:text-base">
          Подпишитесь, чтобы получать новые семейные рецепты из нашей кулинарной книги.
        </p>
        <form className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
          <Input
            type="email"
            placeholder="Введите ваш email"
            className="flex-1 h-10 md:h-11 text-sm md:text-base"
          />
          <Button type="submit" className="bg-green-900 hover:bg-green-800 text-white font-semibold h-10 md:h-11 text-sm md:text-base">
            Подписаться
          </Button>
        </form>
      </div>
    </section>
  );
}