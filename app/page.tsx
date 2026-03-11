import { getAllProducts, getCategories } from "@/lib/api";
import ProductCard from "@/components/ProductCard";
import HomeHero from "@/components/HomeHero";
import CategorySection from "@/components/CategorySection";
import Benefits from "@/components/Benefits";
import ProductFeatures from "@/components/ProductFeatures";
import Link from "next/link";

export default async function HomePage() {
  const [productsData, categories] = await Promise.all([
    getAllProducts(),
    getCategories(),
  ]);

  const featuredProducts = productsData.products.slice(0, 8);

  return (
    <main className="min-h-screen">
      <HomeHero />

      <Benefits />

      <CategorySection categories={categories} />

      <section className="py-20 bg-gray-50/30 dark:bg-gray-900/10">
        <div className="container lg:w-[80%] mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <div className="space-y-4">
              <span className="text-blue-600 font-black tracking-widest text-xs uppercase">
                Curated Selection
              </span>
              <h2 className="text-4xl font-extrabold dark:text-white sm:text-5xl">
                Featured Products
              </h2>
              <p className="text-gray-500 dark:text-gray-400 max-w-xl">
                Our hand-picked selection of top-quality products that our
                customers love most.
              </p>
            </div>
            <Link
              href="/products"
              className="px-8 py-4 rounded-2xl bg-gray-900 dark:bg-white text-white dark:text-gray-950 font-bold shadow-xl transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              View Shop
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
                  strokeWidth={2.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product: any) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <ProductFeatures />
    </main>
  );
}
