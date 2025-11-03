"use client";

import Link from "next/link";

const categories = [
  { title: "Мясные", href: "/categories/meat" },
  { title: "Вегетарианские", href: "/categories/vegetarian" },
  { title: "Супы", href: "/categories/soups" },
  { title: "Салаты", href: "/categories/salads" },
  { title: "Десерты", href: "/categories/desserts" },
];

export function Categories() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-black mb-6 uppercase text-green-900">Категории</h2>
      <div className="flex gap-4 overflow-x-auto py-2">
        {categories.map((cat) => (
          <Link
            key={cat.title}
            href={cat.href}
            className="px-4 py-2 rounded-lg bg-green-100 text-green-800 font-medium hover:bg-green-200 transition"
          >
            {cat.title}
          </Link>
        ))}
      </div>
    </section>
  );
}
