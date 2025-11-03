import { recipes } from "@/lib/recipes";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, ChefHat } from "lucide-react";
import React from "react";
import RecipeActions from "./RecipeActions";
import { Metadata } from "next";

// Generate static params for all recipes
export function generateStaticParams() {
  return recipes.map((recipe) => ({
    slug: recipe.slug,
  }));
}

// Generate metadata for each recipe
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const recipe = recipes.find((r) => r.slug === slug);
  
  if (!recipe) {
    return {
      title: "Recipe Not Found",
    };
  }

  return {
    title: `${recipe.title} - Family Cook`,
    description: `${recipe.description}. Время приготовления: ${recipe.prepTime + recipe.cookTime} минут. Порций: ${recipe.servings}.`,
    openGraph: {
      title: `${recipe.title} - Family Cook`,
      description: recipe.description,
      url: `https://family-cook.ru/recipes/${recipe.slug}`,
      siteName: "Family Cook",
      images: [
        {
          url: recipe.image,
          width: 1200,
          height: 630,
          alt: recipe.title,
        },
      ],
      locale: "ru_RU",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${recipe.title} - Family Cook`,
      description: recipe.description,
      images: [recipe.image],
    },
  };
}

export default async function RecipePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const recipe = recipes.find((r) => r.slug === slug);

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  const breadcrumbItems = [
    { label: "Главная", href: "/" },
    { label: "Рецепты", href: "/recipes" },
    { label: recipe.title },
  ];

  return (
    <div className="py-6 md:py-8 px-4 md:px-0">
      <Breadcrumbs items={breadcrumbItems} />
     
        <Image
          src={recipe.image}
          alt={recipe.title}
          width={800}
          height={400}
          className="w-full h-56 md:h-96 object-cover rounded-lg"
        />
        <div className="py-4 md:py-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-gray-100 text-green-700 hover:bg-green-100 uppercase text-xs md:text-sm">
                  {recipe.category}
                </Badge>
              </div>
              <h1 className="text-2xl md:text-3xl font-black mb-2 uppercase text-green-900">{recipe.title}</h1>
              <p className="text-gray-600 text-sm md:text-base">{recipe.description}</p>
            </div>
            <RecipeActions recipe={recipe} />
          </div>

          <div className="flex flex-wrap items-center gap-3 md:gap-6 mb-4 md:mb-6 text-gray-600 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 md:h-5 md:w-5" />
              <span>Подготовка: {recipe.prepTime} мин</span>
            </div>
            <div className="flex items-center gap-2">
              <ChefHat className="h-4 w-4 md:h-5 md:w-5" />
              <span>Готовка: {recipe.cookTime} мин</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 md:h-5 md:w-5" />
              <span>{recipe.servings} порций</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6">
            <div>
              <h2 className="text-lg md:text-xl font-semibold mb-3 uppercase">Ингредиенты</h2>
              <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-semibold mb-3 uppercase">Подробности</h2>
              <div className="flex flex-col space-y-2 text-sm md:text-base">
                <p><strong>Подготовка:</strong> {recipe.prepTime} минут</p>
                <p><strong>Готовка:</strong> {recipe.cookTime} минут</p>
                <p><strong>Порций:</strong> {recipe.servings}</p>
                <p><strong>Категория:</strong> {recipe.category}</p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-lg md:text-xl font-semibold mb-3 uppercase">Техника приготовления</h2>
            <ol className="list-decimal list-inside space-y-3 text-sm md:text-base">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="leading-relaxed">{instruction}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
  
  );
}
