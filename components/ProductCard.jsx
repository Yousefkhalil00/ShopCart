"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }) {
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault(); // prevent navigating when inside a <Link>
    addItem(product, 1);
  };

  return (
    <Link
      href={`/products/${product.id}`}
      className="flex flex-col gap-2 p-4 border border-gray-200 dark:border-gray-700 shadow-lg rounded-xl hover:shadow-2xl hover:scale-[1.02] duration-300 bg-white dark:bg-gray-800 min-h-[400px]"
    >
      <div className="w-full flex justify-center bg-gray-50 dark:bg-gray-700 rounded-lg pb-2">
        <Image
          src={product.images[0]}
          alt={product.title}
          width={200}
          height={200}
          className="object-contain h-48"
        />
      </div>
      <h2 className="font-bold text-lg text-black dark:text-white leading-tight mt-2">
        {product.title}
      </h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
        {product.description}
      </p>
      <p className="text-yellow-400 flex items-center gap-1 text-sm">
        {product.rating}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4 text-yellow-400"
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96-1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.006z"
            clipRule="evenodd"
          />
        </svg>
      </p>
      <p className="font-semibold text-blue-600 mt-auto">${product.price}</p>
      <button
        onClick={handleAddToCart}
        className="text-green-500 border border-green-500 hover:text-white hover:bg-green-500 dark:hover:bg-green-600 rounded-xl p-2 duration-300 font-semibold text-sm"
      >
        Add To Cart
      </button>
    </Link>
  );
}
