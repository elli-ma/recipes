"use client";

import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Пример данных для новых рецептов
const newRecipes = [
  {
    title: "Паста с креветками",
    description: "Сочная паста с креветками и сливочным соусом",
    href: "/recipes/shrimp-pasta",
    image: "/recipes/shrimp-pasta.jpg",
  },
  {
    title: "Овощное рагу",
    description: "Полезное рагу из сезонных овощей",
    href: "/recipes/vegetable-stew",
    image: "/recipes/vegetable-stew.jpg",
  },
  {
    title: "Шоколадный торт",
    description: "Нежный торт с шоколадной глазурью",
    href: "/recipes/chocolate-cake",
    image: "/recipes/chocolate-cake.jpg",
  },
];

export function NewRecipes() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-black mb-8 text-center uppercase text-green-900">Новые рецепты</h2>

      <div className="flex gap-6 overflow-x-auto scrollbar-hide">
        {newRecipes.map((recipe) => (
          <Card
            key={recipe.title}
            className="min-w-[250px] max-w-xs hover:shadow-lg transition-shadow flex-shrink-0"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="h-40 w-full object-cover rounded-t-md"
            />
            <CardHeader>
              <CardTitle className="uppercase">{recipe.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{recipe.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Link
                href={recipe.href}
                className="text-green-600 font-medium hover:underline"
              >
                Смотреть рецепт
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
