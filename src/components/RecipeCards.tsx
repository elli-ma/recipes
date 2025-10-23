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
  return (
    <section className="">
      <h2 className="text-3xl font-bold mb-8 text-green-900 uppercase">Популярные рецепты</h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <Card key={recipe.id} className="overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src={recipe.image}
                alt={recipe.title}
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>{recipe.title}</CardTitle>
              <CardDescription>{recipe.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{recipe.prepTime + recipe.cookTime} мин</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>{recipe.servings} порций</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link href={`/recipes/${recipe.id}`} className="w-full">
                <Button variant="outline" className="w-full shadow-none">
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
