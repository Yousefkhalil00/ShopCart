"use client";

import { useEffect } from "react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function SuccessPage() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <div className="container lg:w-[80%] mx-auto py-20 flex flex-col items-center gap-8 min-h-screen text-center">
      <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-green-600 dark:text-green-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-5xl font-bold dark:text-white">Payment Successful!</h1>
        <p className="text-gray-500 dark:text-gray-400 text-lg max-w-md mx-auto">
          Thank you for your purchase. We have received your order and are processing it now.
        </p>
      </div>
      <Link
        href="/products"
        className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-transform hover:scale-105 duration-300"
      >
        Continue Shopping
      </Link>
    </div>
  );
}
