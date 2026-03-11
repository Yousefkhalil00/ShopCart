"use client";

import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="relative w-full py-12 md:py-24   dark:from-gray-900 dark:to-gray-950 overflow-hidden border-b border-gray-100 dark:border-gray-800">
      <div className="container lg:w-[80%] mx-auto px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl xl:text-7xl/none bg-linear-to-r from-blue-600 to-green-500 bg-clip-text text-transparent ">
                Experience the Future of Shopping
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 leading-relaxed">
                Discover curated collections, unbeatable prices, and
                lightning-fast delivery. Your ultimate destination for premium
                products.
              </p>
            </div>
            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <Link
                href="/products"
                className="inline-flex h-14 items-center justify-center rounded-2xl bg-blue-600 px-10 text-lg font-bold text-white shadow-xl shadow-blue-500/20 transition-all hover:bg-blue-700 hover:scale-105 active:scale-95 focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-blue-500"
              >
                Shop All Products
              </Link>
              <Link
                href="/products?category=smartphones"
                className="inline-flex h-14 items-center justify-center rounded-2xl border border-gray-200 bg-white px-10 text-lg font-bold shadow-sm transition-all hover:bg-gray-50 hover:text-blue-600 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-900 dark:hover:text-blue-400 hover:scale-105 active:scale-95"
              >
                Trending Now
              </Link>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex -space-x-3 overflow-hidden">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="flex h-10 w-10 rounded-full border-2 border-white bg-gray-100 dark:border-gray-950 dark:bg-gray-800 items-center justify-center text-[10px] font-bold"
                  >
                    USER
                  </div>
                ))}
              </div>
              <p>
                Trusted by over{" "}
                <span className="font-bold text-gray-900 dark:text-gray-100">
                  10,000+
                </span>{" "}
                happy customers
              </p>
            </div>
          </div>
          <div className="relative flex items-center justify-center mt-10 lg:mt-0">
            <div className="absolute inset-0 bg-linear-to-tr from-blue-400/20 to-green-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="relative bg-white/40 dark:bg-gray-800/40 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 rounded-[3rem] p-8 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700 max-w-[500px] w-full aspect-square flex flex-col items-center justify-center gap-6 overflow-hidden">
              <div className="text-center space-y-2">
                <p className="text-blue-500 font-black tracking-widest text-xs uppercase">
                  New Arrival
                </p>
                <h2 className="text-3xl font-bold dark:text-white">
                  Premium Quality
                </h2>
              </div>
              <div className="w-full h-1/2 bg-gray-50 dark:bg-gray-900 rounded-3xl flex items-center justify-center p-4">
                <div className="w-full h-full bg-linear-to-br from-blue-100 to-green-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl flex items-center justify-center text-4xl">
                  🛍️
                </div>
              </div>
              <button className="w-full py-4 rounded-2xl bg-gray-900 text-white dark:bg-white dark:text-gray-950 font-black tracking-tight transform transition-all hover:scale-[1.02]">
                Limited Offer - 50% OFF
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  );
}
