"use client";

import { useRouter } from "next/navigation";

export default function CategoryFilter({ categories, currentCategory }) {
  const router = useRouter();

  return (
    <select
      value={currentCategory || ""}
      onChange={(e) => {
        const value = e.target.value;
        if (value) {
          router.push(`/products?category=${value}`);
        } else {
          router.push(`/products`);
        }
      }}
      className="px-4 py-2 rounded-lg border duration-300 bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:border-blue-600 cursor-pointer w-full md:w-64"
    >
      <option value="">All Categories</option>
      {categories.map((c) => (
        <option key={c.slug} value={c.slug}>
          {c.name}
        </option>
      ))}
    </select>
  );
}
