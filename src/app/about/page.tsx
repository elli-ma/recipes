import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChefHat, Heart, Users } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "О нас - How to Cook",
  description: "Узнайте больше о How to Cook - платформе для всех, кто хочет научиться готовить вкусные блюда. Проверенные рецепты и пошаговые инструкции.",
  keywords: "о сайте, how to cook, рецепты, кулинария, готовка",
};

const breadcrumbItems = [
  { label: "Главная", href: "/" },
  { label: "О сайте" },
];

export default function About() {
  return (
    <div className="py-8">
      <Breadcrumbs items={breadcrumbItems} />
      
      <div>
        <h1 className="text-4xl font-bold mb-6 text-green-900 uppercase">О нас</h1>
        
        <div className="mb-12">
          <p className="text-gray-600 mb-8">
            How to Cook - это место, где кулинарное искусство встречается с простотой. 
            Мы создали платформу для всех, кто хочет научиться готовить вкусные блюда.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="bg-green-900 p-4 rounded-full">
                  <ChefHat className="h-8 w-8 text-white" />
                </div>
              </div>
              <CardTitle className="uppercase">Проверенные рецепты</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Все наши рецепты тщательно проверены и протестированы, чтобы гарантировать отличный результат.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="bg-green-900 p-4 rounded-full">
                  <Heart className="h-8 w-8 text-white" />
                </div>
              </div>
              <CardTitle className="uppercase">С любовью к еде</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Мы верим, что готовка - это не просто процесс, а способ выразить любовь и заботу.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="bg-green-900 p-4 rounded-full">
                  <Users className="h-8 w-8 text-white" />
                </div>
              </div>
              <CardTitle className="uppercase">Сообщество</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Присоединяйтесь к нашему растущему сообществу любителей кулинарии со всего мира.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gray-100 rounded-lg p-8 border-l-4 border-green-900">
          <h2 className="text-2xl font-bold mb-4 text-green-900 uppercase">Наша миссия</h2>
          <p className="text-gray-700 mb-4">
            Мы стремимся сделать кулинарию доступной для всех. Независимо от того, 
            являетесь ли вы опытным шеф-поваром или только начинаете свой кулинарный путь, 
            у нас есть рецепты для вас.
          </p>
          <p className="text-gray-700">
            Наша цель - вдохновлять людей готовить дома, экспериментировать с новыми вкусами 
            и создавать незабываемые моменты за обеденным столом с семьей и друзьями.
          </p>
        </div>
      </div>
    </div>
  );
}