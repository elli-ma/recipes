"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const reviews = [
  {
    name: "Анна",
    text: "Очень понравились рецепты! Всё просто и вкусно.",
  },
  {
    name: "Игорь",
    text: "Лучший сайт с рецептами, который я встречал. Рекомендую!",
  },
  {
    name: "Мария",
    text: "Карточки рецептов удобные, легко найти нужный рецепт.",
  },
];

export function Reviews() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Отзывы пользователей</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review, idx) => (
          <Card key={idx} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{review.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{review.text}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}