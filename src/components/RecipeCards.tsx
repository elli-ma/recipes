"use client";

import Link from "next/link";
import Image from "next/image";
import { recipes } from "@/lib/recipes";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users } from "lucide-react";

export function RecipeCards() {
  const popularRecipes = recipes.filter((recipe) => recipe.popular);

  return (
    <section className="px-4 md:px-0">
      <h2 className="text-2xl md:text-3xl font-black mb-6 md:mb-8 text-green-900 uppercase">Популярные рецепты</h2>

      <div className="grid gap-4 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {popularRecipes.map((recipe) => (
          <Card key={recipe.id} className="overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src={recipe.image}
                alt={recipe.title}
                fill
                className="object-cover"
              />
            </div>
            <CardHeader className="p-4">
              <CardTitle className="text-base md:text-lg uppercase">{recipe.title}</CardTitle>
              <CardDescription className="text-sm line-clamp-2">{recipe.description}</CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xs md:text-sm text-gray-600 mb-2">
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3 md:h-4 md:w-4" />
                  <span>{recipe.prepTime + recipe.cookTime} мин</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-3 w-3 md:h-4 md:w-4" />
                  <span>{recipe.servings} порций</span>
                </div>
              </div>
              {recipe.note && (
                <p className="text-xs text-green-700 italic font-medium line-clamp-1">{recipe.note}</p>
              )}
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Link href={`/recipes/${recipe.slug}`} className="w-full">
                <Button variant="outline" className="w-full shadow-none text-sm uppercase font-semibold">
                  Смотреть рецепт
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
