import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Roboto } from "next/font/google";
import { getCategories } from "@/lib/api";
import ThemeProvider from "@/components/ThemeProvider";
import { CartProvider } from "@/context/CartContext";
import Footer from "@/components/Footer";


const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

import { Suspense } from "react";

export const metadata: Metadata = {
  title: "ShopCart",
  description: "A modern e-commerce store",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const categories = await getCategories();

  return (
    <html suppressHydrationWarning>
      <body className={`${roboto.className} bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300`}>
        <CartProvider>
          <ThemeProvider>
            <Suspense
              fallback={<nav className="py-5 sticky top-0 z-50">Loading...</nav>}
            >
              <Navbar categories={categories} />
            </Suspense>
            {children}
            <Footer />
          </ThemeProvider>

        </CartProvider>
      </body>
    </html>
  );
}
