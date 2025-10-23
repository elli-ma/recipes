"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Анна Петрова",
    role: "Домохозяйка",
    content: "Благодаря этому сайту я научилась готовить множество новых блюд! Инструкции очень понятные, а результат всегда превосходный.",
    rating: 5,
  },
  {
    name: "Дмитрий Иванов",
    role: "Студент",
    content: "Отличный сайт для начинающих! Рецепты простые и не требуют много времени. Теперь готовлю сам вместо заказа еды.",
    rating: 5,
  },
  {
    name: "Мария Сидорова",
    role: "Мама двоих детей",
    content: "Дети в восторге от блюд, которые я готовлю по этим рецептам. Спасибо за вдохновение!",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-green-900">Отзывы наших пользователей</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Узнайте, что говорят о нас те, кто уже готовит по нашим рецептам
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
