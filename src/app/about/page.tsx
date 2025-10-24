import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChefHat, Heart, Users } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "О нас - Семейные рецепты",
  description: "Домашние рецепты нашей большой семьи: бабушек, мамы, тёти, сестры и брата. Семейное кулинарное наследие, передаваемое из поколения в поколение.",
  keywords: "семейные рецепты, домашняя кухня, бабушкины рецепты, традиционная кулинария",
};

const breadcrumbItems = [
  { label: "Главная", href: "/" },
  { label: "О сайте" },
];

export default function About() {
  return (
    <div className="py-6 md:py-8 px-4 md:px-0">
      <Breadcrumbs items={breadcrumbItems} />
      
      <div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-green-900 uppercase">О нас</h1>
        
        <div className="mb-8 md:mb-12">
          <p className="text-gray-700 mb-4 text-base md:text-lg">
            Добро пожаловать в нашу семейную кулинарную книгу! Здесь собраны драгоценные рецепты 
            нашей большой семьи, которые передавались из поколения в поколение.
          </p>
          <p className="text-gray-600 mb-4 text-sm md:text-base">
            Каждый член семьи вносит свой вклад: кто-то сохраняет старинные рецепты, кто-то добавляет новые находки. 
            Каждый рецепт хранит в себе не только вкус домашней еды, но и тепло семейных традиций, 
            воспоминания о праздниках и уютных вечерах за общим столом.
          </p>
          <p className="text-gray-600 text-sm md:text-base">
            Мы создали этот сайт, чтобы сохранить эти рецепты и поделиться ими с вами. 
            Надеюсь, они принесут в ваш дом столько же радости и вкуса, сколько приносят в наш.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          <Card className="text-center">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="bg-green-900 p-4 rounded-full">
                  <ChefHat className="h-8 w-8 text-white" />
                </div>
              </div>
              <CardTitle className="uppercase text-base md:text-lg">Проверенные временем</CardTitle>
            </CardHeader>
            <CardContent className="px-4 pb-4">
              <p className="text-gray-600 text-sm md:text-base">
                Каждый рецепт проверен годами и многочисленными семейными застольями. 
                Это не просто инструкции — это живая история нашей семьи.
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
              <CardTitle className="uppercase text-base md:text-lg">Семейные традиции</CardTitle>
            </CardHeader>
            <CardContent className="px-4 pb-4">
              <p className="text-gray-600 text-sm md:text-base">
                Эти рецепты — часть нашей семейной истории.
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
              <CardTitle className="uppercase text-base md:text-lg">Домашний уют</CardTitle>
            </CardHeader>
            <CardContent className="px-4 pb-4">
              <p className="text-gray-600 text-sm md:text-base">
                Простые, понятные рецепты домашней кухни. Никаких сложных техник — 
                только проверенные способы приготовления вкусной еды.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gray-100 rounded-lg p-4 md:p-8 border-l-4 border-green-900">
          <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-green-900 uppercase">Наша история</h2>
          <p className="text-gray-700 mb-3 md:mb-4 text-sm md:text-base">
            Наша большая семья всегда любила готовить. 
          </p>
          <p className="text-gray-700 text-sm md:text-base">
            Эти рецепты — это не просто список ингредиентов, это частичка души каждого члена семьи. 
            Теперь они доступны всем, кто ценит домашнюю кухню и хочет приготовить 
            что-то по-настоящему вкусное и душевное. Готовьте с любовью, как это делает наша семья!
          </p>
        </div>
      </div>
    </div>
  );
}