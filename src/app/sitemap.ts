import { recipes } from "@/lib/recipes";

export const dynamic = "force-static"; 

export default async function sitemap() {
  const baseUrl = "https://family-cook.ru"; // замени на свой домен

  // общие страницы
  const staticPages = ["", "about/", "contacts/"].map((page) => ({
    url: `${baseUrl}/${page}`,
    lastModified: new Date().toISOString(),
  }));

  // страницы рецептов
  const recipePages = recipes.map((recipe) => ({
    url: `${baseUrl}/recipes/${recipe.slug}/`,
    lastModified: new Date().toISOString(),
  }));

  return [...staticPages, ...recipePages];
}