"use client";

import Link from "next/link";
import Image from "next/image";
import { recipes } from "@/lib/recipes";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState, useMemo } from "react";

const breadcrumbItems = [
  { label: "Главная", href: "/" },
  { label: "Рецепты" },
];

export default function RecipesPage() {
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [searchQuery, setSearchQuery] = useState("");

  // Get unique categories from recipes
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(recipes.map(recipe => recipe.category)));
    return ["Все", ...uniqueCategories];
  }, []);

  const filteredRecipes = recipes.filter(recipe => {
    const matchesCategory = selectedCategory === "Все" || recipe.category === selectedCategory;
    const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         recipe.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-6 md:py-8 px-4 md:px-0">
      <Breadcrumbs items={breadcrumbItems} />
      <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 uppercase text-green-900">Рецепты</h1>
      
      {/* Search Bar */}
      <div className="mb-6 md:mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 md:h-5 md:w-5" />
          <Input
            type="text"
            placeholder="Поиск рецептов..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 md:pl-10 py-4 md:py-6 text-sm md:text-lg"
          />
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-8">
        {categories.map((category) => (
          <Badge
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            className={`cursor-pointer px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm transition-all ${
              selectedCategory === category 
                ? "bg-green-900 hover:bg-green-800 text-white" 
                : "hover:bg-gray-100"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Badge>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {filteredRecipes.map((recipe) => (
          <Link key={recipe.id} href={`/recipes/${recipe.slug}`} passHref>
            <Card className="overflow-hidden  duration-300 h-full flex flex-col">
              <CardHeader className="p-0">
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
              </CardHeader>
              <CardContent className="p-3 md:p-4 flex-grow">
                <CardTitle className="text-base md:text-lg font-semibold mb-2">{recipe.title}</CardTitle>
                <p className="text-gray-600 text-xs md:text-sm mb-2 line-clamp-2">{recipe.description}</p>
                {recipe.note && (
                  <p className="text-xs text-green-700 italic font-medium line-clamp-1">{recipe.note}</p>
                )}
              </CardContent>
              <CardFooter className="p-3 md:p-4 pt-0">
                <Button variant="outline" className="w-full text-sm">Подробнее</Button>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}