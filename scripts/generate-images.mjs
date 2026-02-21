import { fal } from "@fal-ai/client";
import { writeFile, readFile } from "fs/promises";

// Load .env.local
const envFile = await readFile(new URL("../.env.local", import.meta.url), "utf-8");
for (const line of envFile.split("\n")) {
  const [key, ...val] = line.split("=");
  if (key && val.length) process.env[key.trim()] = val.join("=").trim();
}

const recipes = [
  {
    slug: "peremyachi",
    dish: "several round baked buns with pinched crimped edges around the top, each bun has a small round hole in the center of the top revealing brown meat and potato filling inside, the dough is golden and puffy, traditional Tatar peremyachi pastries",
  },
  {
    slug: "syrniki-ot-zheni",
    dish: "four thick round pan-fried cottage cheese patties (syrniki), smooth rounded soft edges, golden brown on top and bottom, creamy white inside, puffy cylinder shape, served with sour cream and jam on the side",
  },
];

const basePrompt = `Vector flat illustration of food on a white round plate. Pure white background. No text, no words, no labels, no letters. The plate is centered horizontally and vertically in the frame. Camera angle: 30 degree view from front, showing both the front side and partial top of the dish, like a product photo. The plate with food occupies 55% of the image height. Minimalist clean style, soft drop shadow under plate.`;

async function generateImage(recipe) {
  const prompt = `${basePrompt}\n\nFood on the plate: ${recipe.dish}`;

  console.log(`Generating: ${recipe.slug}...`);

  const result = await fal.subscribe("xai/grok-imagine-image", {
    input: {
      prompt,
      aspect_ratio: "16:9",
      output_format: "webp",
    },
  });

  const imageUrl = result.data.images[0].url;
  const response = await fetch(imageUrl);
  const buffer = await response.arrayBuffer();
  const outputPath = `public/recipes/${recipe.slug}.webp`;
  await writeFile(outputPath, Buffer.from(buffer));
  console.log(`  Done: ${outputPath}`);
}

for (const recipe of recipes) {
  try {
    await generateImage(recipe);
  } catch (error) {
    console.error(`  ERROR ${recipe.slug}:`, error.message || error);
  }
}

console.log("\nDone!");
