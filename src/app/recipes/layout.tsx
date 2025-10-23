import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Рецепты - How to Cook",
  description: "Просмотрите нашу коллекцию вкусных рецептов. Паста, карри, десерты, салаты и многое другое. Пошаговые инструкции для всех уровней.",
  keywords: "рецепты, готовка, кулинария, паста, десерты, салаты, how to cook",
};

export default function RecipesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
