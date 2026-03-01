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
    slug: "chaynyy-keks",
    dish: "a whole round dark brown tea cake (loaf cake) with a cracked top, baked golden-brown crust, dense moist texture visible on the sides, with small dark berry jam pieces inside, simple homemade look",
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
