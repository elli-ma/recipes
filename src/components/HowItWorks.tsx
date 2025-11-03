"use client";

import { BookOpen, ChefHat, Heart, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    icon: BookOpen,
    title: "Выберите рецепт",
    description: "Просмотрите нашу коллекцию проверенных рецептов и выберите то, что вам по душе.",
  },
  {
    icon: ChefHat,
    title: "Следуйте инструкциям",
    description: "Пошаговые инструкции помогут вам приготовить блюдо без лишних сложностей.",
  },
  {
    icon: Sparkles,
    title: "Готовьте с удовольствием",
    description: "Наслаждайтесь процессом приготовления и создавайте кулинарные шедевры.",
  },
  {
    icon: Heart,
    title: "Делитесь результатами",
    description: "Угощайте близких и делитесь своими успехами с нашим сообществом.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 bg-gray-50 rounded-3xl mb-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-black text-center mb-4 text-green-900 uppercase">Как это работает</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Всего четыре простых шага отделяют вас от вкусного домашнего блюда
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 text-center">
                  <div className="absolute top-4 right-4 text-6xl font-black text-gray-200">
                    {index + 1}
                  </div>
                  <div className="flex justify-center mb-4">
                    <div className="bg-green-900 p-4 rounded-full">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2 uppercase">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
