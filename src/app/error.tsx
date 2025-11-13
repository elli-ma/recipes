"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertCircle, Home, RefreshCw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[90vh] flex items-center justify-center px-4 py-8">
      <div className="text-center max-w-2xl mx-auto">
        <div className="flex justify-center mb-6">
         
          <img className="h-24" src="/logo.svg" alt="Logo" />
        
        </div>
        
        <h1 className="text-2xl md:text-4xl font-black text-green-900 mb-4 uppercase">
          Что-то пошло не так
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Произошла непредвиденная ошибка. Пожалуйста, попробуйте обновить страницу 
          или вернитесь на главную.
        </p>
        
        {error.message && (
          <div className="bg-gray-100 rounded-lg p-4 mb-8 text-left">
            <p className="text-sm text-gray-700 font-mono">{error.message}</p>
          </div>
        )}
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            onClick={reset}
            className="bg-green-900 hover:bg-green-800 uppercase font-semibold"
          >
            Попробовать снова
          </Button>
          <Link href="/">
            <Button size="lg" variant="outline" className="uppercase font-semibold border-green-900 text-green-900 hover:bg-green-50">
              На главную
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
