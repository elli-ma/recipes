import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Рецепты - Family Cook",
  description: "Просмотрите нашу коллекцию семейных рецептов. Домашняя выпечка, десерты, закуски и многое другое. Пошаговые инструкции от нашей семьи.",
  keywords: "рецепты, семейные рецепты, домашняя кухня, выпечка, десерты, family cook",
};

export default function RecipesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
