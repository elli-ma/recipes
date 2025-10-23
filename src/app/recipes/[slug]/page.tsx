"use client";

import { recipes } from "@/lib/recipes";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Printer, Share2, Clock, Users, ChefHat } from "lucide-react";
import React, { useEffect, use } from "react";

export default function RecipePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const recipe = recipes.find((r) => r.id === parseInt(slug));

  useEffect(() => {
    if (recipe) {
      document.title = `${recipe.title} - How to Cook`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', `${recipe.description}. Время приготовления: ${recipe.prepTime + recipe.cookTime} минут. Порций: ${recipe.servings}.`);
      }
    }
  }, [recipe]);

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  const breadcrumbItems = [
    { label: "Главная", href: "/" },
    { label: "Рецепты", href: "/recipes" },
    { label: recipe.title },
  ];

  const handlePrint = () => {
    window.print();
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: recipe.title,
          text: recipe.description,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert("Ссылка скопирована в буфер обмена!");
    }
  };

  return (
    <div className="py-8">
      <Breadcrumbs items={breadcrumbItems} />
     
        <Image
          src={recipe.image}
          alt={recipe.title}
          width={800}
          height={400}
          className="w-full h-64 object-cover rounded-lg"
        />
        <div className="py-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-gray-100 text-green-700 hover:bg-green-100 uppercase">
                  {recipe.category}
                </Badge>
              </div>
              <h1 className="text-3xl font-bold mb-2 uppercase text-green-900">{recipe.title}</h1>
              <p className="text-gray-600">{recipe.description}</p>
            </div>
            <div className="flex gap-2 print:hidden">
              <Button variant="outline" size="icon" onClick={handlePrint}>
                <Printer className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={handleShare}>
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-6 mb-6 text-gray-600">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>Подготовка: {recipe.prepTime} мин</span>
            </div>
            <div className="flex items-center gap-2">
              <ChefHat className="h-5 w-5" />
              <span>Готовка: {recipe.cookTime} мин</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span>{recipe.servings} порций</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <div>
              <h2 className="text-xl font-semibold mb-3 uppercase">Ингредиенты</h2>
              <ul className="list-disc list-inside space-y-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-3 uppercase">Подробности</h2>
              <div className="flex flex-col space-y-2">
                <p><strong>Подготовка:</strong> {recipe.prepTime} минут</p>
                <p><strong>Готовка:</strong> {recipe.cookTime} минут</p>
                <p><strong>Порций:</strong> {recipe.servings}</p>
                <p><strong>Категория:</strong> {recipe.category}</p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-3 uppercase">Техника приготовления</h2>
            <ol className="list-decimal list-inside space-y-3">
              {recipe.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
  
  );
}
