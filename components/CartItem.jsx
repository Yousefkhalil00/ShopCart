"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function CartItem({ item }) {
  const { removeItem, updateQty } = useCart();

  return (
    <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="w-20 h-20 shrink-0 bg-gray-50 dark:bg-gray-700 rounded-lg flex items-center justify-center overflow-hidden">
        <Image
          src={item.thumbnail || item.images?.[0] || ""}
          alt={item.title}
          width={80}
          height={80}
          className="object-contain w-full h-full"
        />
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-gray-900 dark:text-white truncate">
          {item.title}
        </h3>
        <p className="text-blue-600 font-bold mt-1">${item.price}</p>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => updateQty(item.id, item.quantity - 1)}
          className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center justify-center text-gray-700 dark:text-gray-200 font-bold transition-colors duration-200"
        >
          −
        </button>
        <span className="w-8 text-center font-semibold dark:text-white">
          {item.quantity}
        </span>
        <button
          onClick={() => updateQty(item.id, item.quantity + 1)}
          className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center justify-center text-gray-700 dark:text-gray-200 font-bold transition-colors duration-200"
        >
          +
        </button>
      </div>

      <div className="w-20 text-right">
        <p className="font-bold text-gray-900 dark:text-white">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
      </div>

      <button
        onClick={() => removeItem(item.id)}
        className="text-red-400 hover:text-red-600 transition-colors duration-200 ml-2"
        title="Remove item"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </button>
    </div>
  );
}
