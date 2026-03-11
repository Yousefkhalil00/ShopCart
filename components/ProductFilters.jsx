"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";

export default function ProductFilters({ categories }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [category, setCategory] = useState(searchParams.get("category") || "");
  const [minPrice, setMinPrice] = useState(searchParams.get("minPrice") || "");
  const [maxPrice, setMaxPrice] = useState(searchParams.get("maxPrice") || "");
  const [minRating, setMinRating] = useState(
    searchParams.get("minRating") || "",
  );

  const applyFilters = useCallback(
    (key, value) => {
      const params = new URLSearchParams(searchParams.toString());

      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }

      router.push(`/products?${params.toString()}`);
    },
    [searchParams, router],
  );

  const clearFilters = () => {
    router.push("/products");
    setCategory("");
    setMinPrice("");
    setMaxPrice("");
    setMinRating("");
  };

  return (
    <div className="flex gap-4 items-end bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
      <div className="flex flex-col gap-1 flex-1 w-full md:w-auto">
        <label
          htmlFor="category"
          className="text-sm font-semibold text-gray-700 dark:text-gray-300"
        >
          Category
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => {
            const val = e.target.value;
            setCategory(val);
            applyFilters("category", val);
          }}
          className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 duration-300 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[200px] h-11"
        >
          <option value="">All Categories</option>
          {categories.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1 w-full  ">
        <label
          htmlFor="minPrice"
          className="text-sm font-semibold text-gray-700 dark:text-gray-300"
        >
          Min Price ($)
        </label>
        <input
          type="number"
          id="minPrice"
          value={minPrice}
          placeholder="0"
          min="0"
          onChange={(e) => setMinPrice(e.target.value)}
          onBlur={(e) => applyFilters("minPrice", e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              applyFilters("minPrice", e.target.value);
            }
          }}
          className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 duration-300 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full placeholder-gray-400 dark:placeholder-gray-500"
        />
      </div>

      <div className="flex flex-col gap-1 w-full ">
        <label
          htmlFor="maxPrice"
          className="text-sm font-semibold text-gray-700 dark:text-gray-300"
        >
          Max Price ($)
        </label>
        <input
          type="number"
          id="maxPrice"
          value={maxPrice}
          placeholder="Any"
          min="0"
          onChange={(e) => setMaxPrice(e.target.value)}
          onBlur={(e) => applyFilters("maxPrice", e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              applyFilters("maxPrice", e.target.value);
            }
          }}
          className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 duration-300 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full placeholder-gray-400 dark:placeholder-gray-500"
        />
      </div>

      <div className="flex flex-col gap-1 w-full ">
        <label
          htmlFor="minRating"
          className="text-sm font-semibold text-gray-700 dark:text-gray-300"
        >
          Min Rating
        </label>
        <select
          id="minRating"
          value={minRating}
          onChange={(e) => {
            const val = e.target.value;
            setMinRating(val);
            applyFilters("minRating", val);
          }}
          className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 duration-300 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full h-11"
        >
          <option value="">Any Rating</option>
          <option value="4">4+ Stars</option>
          <option value="3">3+ Stars</option>
          <option value="2">2+ Stars</option>
          <option value="1">1+ Stars</option>
        </select>
      </div>

      {(category || minPrice || maxPrice || minRating) && (
        <button
          onClick={clearFilters}
          className="px-4 py-2 mt-auto md:ml-auto w-full md:w-auto rounded-lg font-semibold text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 duration-300 transition-colors"
        >
          Clear Filters
        </button>
      )}
    </div>
  );
}
