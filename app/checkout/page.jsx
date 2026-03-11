"use client";

import { useCart } from "@/context/CartContext";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function CheckoutPage() {
  const { cart, totalPrice, itemCount } = useCart();
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: cart,
          success_url: `${window.location.origin}/checkout/success`,
          cancel_url: `${window.location.origin}/checkout/cancel`,
        }),
      });

      const { url, error } = await response.json();
      if (error) throw new Error(error);
      if (url) window.location.href = url;
    } catch (err) {
      console.error(err);
      alert("Something went wrong with the checkout. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="container lg:w-[80%] mx-auto py-20 flex flex-col items-center gap-6 min-h-screen text-center">
        <h1 className="text-3xl font-bold dark:text-white">Your cart is empty</h1>
        <Link
          href="/products"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors duration-300"
        >
          Return to Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container lg:w-[80%] mx-auto py-10 min-h-screen">
      <h1 className="text-4xl font-bold dark:text-white mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Side: Order Items */}
        <div className="flex flex-col gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm p-6">
            <h2 className="text-xl font-bold dark:text-white mb-4">Review Items ({itemCount})</h2>
            <div className="flex flex-col gap-4">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4 items-center">
                  <div className="w-16 h-16 bg-gray-50 dark:bg-gray-700 rounded-lg shrink-0 overflow-hidden relative">
                    <Image
                      src={item.thumbnail || item.images?.[0] || ""}
                      alt={item.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm truncate">{item.title}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Qty: {item.quantity}</p>
                  </div>
                  <p className="font-bold dark:text-white text-sm">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Payment Trigger */}
        <div className="flex flex-col gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg p-6">
            <h2 className="text-xl font-bold dark:text-white mb-6">Order Total</h2>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between text-gray-600 dark:text-gray-300">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600 dark:text-gray-300">
                <span>Shipping</span>
                <span className="text-green-500">Free</span>
              </div>
              <hr className="border-gray-200 dark:border-gray-700 mt-2" />
              <div className="flex justify-between text-2xl font-bold text-gray-900 dark:text-white">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              disabled={loading}
              className={`w-full mt-8 py-4 rounded-xl font-bold text-white transition-all duration-300 flex items-center justify-center gap-2 ${
                loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                "Pay with Stripe Checkout"
              )}
            </button>
            <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-4">
              You will be redirected to secure Stripe payment page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
