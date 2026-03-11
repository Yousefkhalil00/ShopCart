"use client";

import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function AddToCartSection({ product }) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <span className="font-semibold dark:text-white">Quantity:</span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center justify-center font-bold text-gray-700 dark:text-gray-200 transition-colors duration-200"
          >
            −
          </button>
          <span className="w-8 text-center font-bold text-lg dark:text-white">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity((q) => Math.min(product.stock, q + 1))}
            className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center justify-center font-bold text-gray-700 dark:text-gray-200 transition-colors duration-200"
          >
            +
          </button>
        </div>
      </div>

      <div className="flex gap-4">
        <button
          onClick={handleAdd}
          className={`flex-1 py-2.5 px-6 rounded-xl font-semibold transition-all duration-300 ${
            added
              ? "bg-green-500 text-white scale-95"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          {added ? "✓ Added!" : "Add To Cart"}
        </button>
        <button className="flex-1 py-2.5 px-6 rounded-xl font-semibold bg-green-500 hover:bg-green-600 text-white transition-all duration-300">
          Buy Now
        </button>
      </div>
    </div>
  );
}
