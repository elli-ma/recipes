import { Hero } from "@/components/Hero";
import { RecipeCards } from "@/components/RecipeCards";
import { Newsletter } from "@/components/Newsletter";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <RecipeCards />
      <Newsletter />
    </main>
  );
}
