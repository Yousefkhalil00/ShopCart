"use client";

import { useCart } from "@/context/CartContext";
import CartItem from "@/components/CartItem";
import Link from "next/link";

export default function CartPage() {
  const { cart, clearCart, totalPrice, itemCount } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container lg:w-[80%] mx-auto py-20 flex flex-col items-center gap-6 min-h-screen">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-24 h-24 text-gray-300 dark:text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.4 5.6a1 1 0 00.97 1.4H17m-10 0a1 1 0 100 2 1 1 0 000-2zm10 0a1 1 0 100 2 1 1 0 000-2z"
          />
        </svg>
        <h1 className="text-3xl font-bold dark:text-white">
          Your cart is empty
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Browse our products and add something you like!
        </p>
        <Link
          href="/products"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors duration-300"
        >
          Shop Now
        </Link>
      </div>
    );
  }

  return (
    <div className="container lg:w-[80%] mx-auto py-10 min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold dark:text-white">
          Shopping Cart{" "}
          <span className="text-lg font-normal text-gray-500 dark:text-gray-400">
            ({itemCount} {itemCount === 1 ? "item" : "items"})
          </span>
        </h1>
        <button
          onClick={clearCart}
          className="text-red-500 hover:text-red-700 border border-red-400 hover:border-red-600 px-4 py-1.5 rounded-lg text-sm font-semibold transition-colors duration-200"
        >
          Clear Cart
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 flex flex-col gap-4">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg p-6 sticky top-24">
            <h2 className="text-xl font-bold dark:text-white mb-5">
              Order Summary
            </h2>
            <div className="flex flex-col gap-3 text-sm text-gray-600 dark:text-gray-300">
              <div className="flex justify-between">
                <span>Subtotal ({itemCount} items)</span>
                <span className="font-semibold">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-green-500 font-semibold">Free</span>
              </div>
              <hr className="border-gray-200 dark:border-gray-700 my-2" />
              <div className="flex justify-between text-lg font-bold text-gray-900 dark:text-white">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </div>
            <Link
              href="/checkout"
              className="mt-6 block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold transition-colors duration-300"
            >
              Proceed to Checkout
            </Link>
            <Link
              href="/products"
              className="mt-3 block w-full text-center border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 py-3 rounded-xl font-semibold transition-colors duration-300"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
