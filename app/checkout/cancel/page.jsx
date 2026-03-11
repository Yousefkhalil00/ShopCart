"use client";

import Link from "next/link";

export default function CancelPage() {
  return (
    <div className="container lg:w-[80%] mx-auto py-20 flex flex-col items-center gap-8 min-h-screen text-center">
      <div className="w-24 h-24 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-red-600 dark:text-red-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-5xl font-bold dark:text-white">Payment Cancelled</h1>
        <p className="text-gray-500 dark:text-gray-400 text-lg max-w-md mx-auto">
          No worries! Your order has not been placed and you haven't been charged.
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href="/cart"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all hover:scale-105"
        >
          Return to Cart
        </Link>
        <Link
          href="/products"
          className="border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
        >
          Back to Shop
        </Link>
      </div>
    </div>
  );
}
