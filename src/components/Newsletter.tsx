"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Newsletter() {
  return (
    <section className=" py-16 rounded-2xl mb-16">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-green-900">Подпишитесь на рассылку</h2>
        <p className="text-gray-700 mb-6">
          Получайте новые рецепты прямо на ваш email каждую неделю.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 justify-center">
          <Input
            type="email"
            placeholder="Введите ваш email"
            className="flex-1"
          />
          <Button type="submit" className="bg-green-900 hover:bg-green-800 text-white font-semibold">
            Подписаться
          </Button>
        </form>
      </div>
    </section>
  );
}