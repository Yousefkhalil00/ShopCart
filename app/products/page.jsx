import {
  getAllProducts,
  getCategories,
  getProductsByCategory,
} from "@/lib/api";
import ProductFilters from "@/components/ProductFilters";
import ProductCard from "@/components/ProductCard";

export default async function ProductPage({ searchParams }) {
  const params = await searchParams;
  const category = params?.category;
  const minPrice = params?.minPrice ? parseFloat(params.minPrice) : null;
  const maxPrice = params?.maxPrice ? parseFloat(params.maxPrice) : null;
  const minRating = params?.minRating ? parseFloat(params.minRating) : null;
  const searchQuery = params?.search ? params.search.toLowerCase() : null;

  const [data, categories] = await Promise.all([
    category ? getProductsByCategory(category) : getAllProducts(),
    getCategories(),
  ]);

  let products = data.products;

  if (
    minPrice !== null ||
    maxPrice !== null ||
    minRating !== null ||
    searchQuery !== null
  ) {
    products = products.filter((p) => {
      let matches = true;
      if (minPrice !== null && p.price < minPrice) matches = false;
      if (maxPrice !== null && p.price > maxPrice) matches = false;
      if (minRating !== null && p.rating < minRating) matches = false;
      if (
        searchQuery !== null &&
        !p.title.toLowerCase().includes(searchQuery) &&
        !p.description.toLowerCase().includes(searchQuery)
      )
        matches = false;
      return matches;
    });
  }

  return (
    <div className="lg:w-[80%] container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6 dark:text-white">Products</h1>

      <ProductFilters categories={categories} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
