"use client";

import Link from "next/link";

export default function CategorySection({ categories }) {
  const featuredCategories = categories.slice(0, 6);

  const categoryIcons = {
    beauty: "💄",
    fragrances: "✨",
    furniture: "🛋️",
    groceries: "🍎",
    "home-decoration": "🖼️",
    kitchen_accessories: "🍳",
    laptops: "💻",
    mens_shirts: "👔",
    mens_shoes: "👟",
    mens_watches: "⌚",
    mobile_accessories: "🔌",
    motorcycle: "🏍️",
    skin_care: "🧴",
    smartphones: "📱",
    sports_accessories: "🏀",
    sunglasses: "🕶️",
    tablets: "📟",
    tops: "👕",
    vehicle: "🚗",
    womens_bags: "👜",
    womens_dresses: "👗",
    womens_jewellery: "💎",
    womens_shoes: "👠",
    womens_watches: "⌚️",
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="container lg:w-[80%] mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-extrabold dark:text-white sm:text-4xl">
              Browse by Category
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Discover awesome products across our top departments
            </p>
          </div>
          <Link
            href="/products"
            className="text-blue-600 dark:text-blue-400 font-bold hover:underline flex items-center gap-1 group"
          >
            See All Categories
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {featuredCategories.map((category) => (
            <Link
              key={category.slug}
              href={`/products?category=${category.slug}`}
              className="group flex flex-col items-center gap-4 p-8 rounded-3xl bg-gray-50 dark:bg-gray-900 border border-transparent hover:border-blue-500/30 hover:bg-white dark:hover:bg-gray-800 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-white dark:bg-gray-800 flex items-center justify-center text-3xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                {categoryIcons[category.slug] || "📦"}
              </div>
              <h3 className="font-bold text-center text-gray-900 dark:text-gray-100 capitalize group-hover:text-blue-600 transition-colors">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
