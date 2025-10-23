import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChefHat, Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[90vh] flex items-center justify-center px-4 py-8">
      <div className="text-center max-w-2xl mx-auto">
        <div className="flex justify-center mb-6">
        <img className="h-24" src="/logo.svg" alt="Logo" />
        </div>
        
        <h1 className="text-6xl font-bold text-green-900 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-green-900 mb-4 uppercase">
          Страница не найдена
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          К сожалению, страница, которую вы ищете, не существует или была перемещена.
          Возможно, рецепт был съеден! 🍽️
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button size="lg" className="bg-green-900 hover:bg-green-800 uppercase">

              На главную
            </Button>
          </Link>
          <Link href="/recipes">
            <Button size="lg" variant="outline" className="uppercase">
            
              Смотреть рецепты
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
