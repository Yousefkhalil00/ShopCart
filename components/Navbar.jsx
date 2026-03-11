"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.svg";
import { useCallback, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";
import { useCart } from "@/context/CartContext";

export default function Navbar({ categories }) {
  const router = useRouter();
  const { itemCount } = useCart();
  const searchParams = useSearchParams();
  const [category, setCategory] = useState(searchParams.get("category") || "");
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("search") || "",
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
  return (
    <div className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 font-semibold shadow-lg shadow-gray-200 dark:shadow-gray-900">
      <nav className="flex justify-between container lg:w-[80%] mx-auto px-4 py-5 sticky top-0 z-50 transition-all duration-300">
        {/* Desktop Brand */}
        <Link
          className="hidden lg:flex text-4xl items-center font-bold bg-linear-to-br from-green-700/90 to-green-400/90 bg-clip-text text-transparent "
          href="/"
        >
          <Image src={logo} alt="Logo" width={64} height={32} />
          ShopCart
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-10 items-center text-lg [&_a]:transition-all [&_a]:duration-300 [&_a:hover]:text-blue-500/80">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              applyFilters("search", searchQuery);
            }}
            className="flex items-center gap-2"
          >
            <div className="relative flex items-center h-10 w-[310px]">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-3 h-full rounded-l-lg border border-gray-300 dark:border-gray-600 border-r-0 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:z-10 relative text-sm w-48 text-gray-700 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 bg-white dark:bg-gray-800"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none z-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>

              <select
                id="category"
                value={category}
                onChange={(e) => {
                  const val = e.target.value;
                  setCategory(val);
                  applyFilters("category", val);
                }}
                className="px-2 h-full rounded-r-lg border border-gray-300 dark:border-gray-600 duration-300 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:z-10 relative text-sm w-[130px]"
              >
                <option value="">All Categories</option>
                {categories.map((c) => (
                  <option key={c.slug} value={c.slug}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
          </form>
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>

          <Link href="/cart" className="relative">
            Cart
            {itemCount > 0 && (
              <span className="absolute -top-2.5 -right-4 bg-blue-600 text-white text-xs font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1">
                {itemCount}
              </span>
            )}
          </Link>
          <ThemeToggle />
        </div>

        <div className="lg:hidden flex flex-col w-full gap-5">
          <div className="flex items-center justify-between w-full">
            <Link
              className="text-2xl flex items-center font-bold bg-linear-to-br from-green-700/90 to-green-400/90 bg-clip-text text-transparent "
              href="/"
            >
              <Image src={logo} alt="Logo" width={64} height={32} />
              ShopCart
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 -mr-2 text-gray-800 dark:text-gray-200"
              aria-label="Open Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              applyFilters("search", searchQuery);
              setIsMobileMenuOpen(false);
            }}
            className="flex items-center w-full"
          >
            <div className="flex items-center w-full h-11 ">
              <div className="relative grow h-full">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 h-full rounded-l-xl border border-gray-300 dark:border-gray-600 border-r-0 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:z-10 relative text-sm w-full text-gray-700 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 bg-gray-50 dark:bg-gray-800 shadow-xs"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none z-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              <select
                id="category-mobile"
                value={category}
                onChange={(e) => {
                  const val = e.target.value;
                  setCategory(val);
                  applyFilters("category", val);
                  setIsMobileMenuOpen(false);
                }}
                className="px-2 sm:px-4 h-full border border-gray-300 dark:border-gray-600 duration-300 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:z-10 relative text-sm w-[110px] sm:w-[150px]"
              >
                <option value="">All</option>
                {categories.map((c) => (
                  <option key={c.slug} value={c.slug}>
                    {c.name}
                  </option>
                ))}
              </select>

              <button
                type="submit"
                className="h-full px-5 bg-blue-600 text-white rounded-r-xl font-bold hover:bg-blue-700 transition-colors duration-300 shadow-md flex items-center justify-center shrink-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-100 bg-black/60 flex items-center justify-between backdrop-blur-sm overflow-y-hidden">
          <div className="bg-white dark:bg-gray-900 p-6 w-full flex flex-col gap-6 relative shadow-2xl items-center justify-center h-screen">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-10 right-5 text-gray-400 dark:text-gray-500 hover:text-black dark:hover:text-white transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
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
            </button>

            <div className="flex flex-col gap-4 mt-6 items-center justify-around">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-bold text-gray-800 dark:text-gray-100 hover:text-blue-500 transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                href="/products"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-bold text-gray-800 dark:text-gray-100 hover:text-blue-500 transition-colors duration-300"
              >
                Products
              </Link>
              <Link
                href="/cart"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-bold text-gray-800 dark:text-gray-100 hover:text-blue-500 transition-colors duration-300 relative"
              >
                Cart
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-5 bg-blue-600 text-white text-xs font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1">
                    {itemCount}
                  </span>
                )}
              </Link>
              <div className="mt-4">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
