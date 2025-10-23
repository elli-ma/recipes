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
    <div className=" py-8 ">
      <Breadcrumbs items={breadcrumbItems} />
      <h1 className="text-4xl font-bold mb-8 uppercase text-green-900">Рецепты</h1>
      
      {/* Search Bar */}
      <div className=" mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            type="text"
            placeholder="Поиск рецептов..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 py-6 text-lg"
          />
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((category) => (
          <Badge
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            className={`cursor-pointer px-4 py-2 text-sm transition-all ${
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredRecipes.map((recipe) => (
          <Link key={recipe.id} href={`/recipes/${recipe.id}`} passHref>
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
              <CardContent className="p-4 flex-grow">
                <CardTitle className="text-lg font-semibold mb-2">{recipe.title}</CardTitle>
                <p className="text-gray-600 text-sm mb-2">{recipe.description}</p>
                {recipe.note && (
                  <p className="text-xs text-green-700 italic font-medium">{recipe.note}</p>
                )}
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button variant="outline" className="w-full">Подробнее</Button>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}