"use client";

import { Button } from "@/components/ui/button";
import { Printer, Share2 } from "lucide-react";

interface RecipeActionsProps {
  recipe: {
    title: string;
    description: string;
  };
}

export default function RecipeActions({ recipe }: RecipeActionsProps) {
  const handlePrint = () => {
    window.print();
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: recipe.title,
          text: recipe.description,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert("Ссылка скопирована в буфер обмена!");
    }
  };

  return (
    <div className="flex gap-2 print:hidden">
      <Button variant="outline" size="icon" onClick={handlePrint} className="h-9 w-9 md:h-10 md:w-10">
        <Printer className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon" onClick={handleShare} className="h-9 w-9 md:h-10 md:w-10">
        <Share2 className="h-4 w-4" />
      </Button>
    </div>
  );
}
