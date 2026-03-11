import { getProductById } from "@/lib/api.js";
import Image from "next/image";
import Link from "next/link";
import AddToCartSection from "@/components/AddToCartSection";

export default async function ProductPage({ params }) {
  const { id } = await params;
  const product = await getProductById(id);

  const inactive =
    "text-black/50 dark:text-gray-400 hover:text-black dark:hover:text-gray-100 font-semibold duration-200";

  return (
    <div className="container lg:w-[80%] mx-auto min-h-screen">
      <div className="flex gap-4 py-10">
        <Link className={inactive} href="/">
          Home
        </Link>
        <p className="text-gray-400 dark:text-gray-500">/</p>
        <Link className={inactive} href="/products">
          Products
        </Link>
        <p className="text-gray-400 dark:text-gray-500">/</p>
        <Link
          className="text-blue-500 hover:text-blue-700 duration-200 font-bold"
          href={`/products/${id}`}
        >
          {product.title}
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start pb-16">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 flex items-center justify-center shadow-lg">
          <Image
            src={product.thumbnail || null}
            alt={product.title}
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-bold dark:text-white">
            {product.title}
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            {product.description}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1.5">
            <p className="font-semibold dark:text-white">{product.rating}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-yellow-400"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96-1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              ({product.stock} in stock)
            </span>
          </div>

          <hr className="border-gray-200 dark:border-gray-700" />

          {/* Price */}
          <div className="flex items-baseline gap-3">
            <h2 className="text-4xl font-bold dark:text-white">
              ${product.price}
            </h2>
            <span className="text-sm text-red-500 font-semibold">
              {product.discountPercentage}% off
            </span>
          </div>

          <div className="flex flex-col gap-1 text-gray-600 dark:text-gray-300 text-sm">
            <p>
              <span className="font-semibold">Brand:</span> {product.brand}
            </p>
            <p>
              <span className="font-semibold">Category:</span>{" "}
              {product.category}
            </p>
          </div>

          <hr className="border-gray-200 dark:border-gray-700" />

          <AddToCartSection product={product} />
        </div>
      </div>
    </div>
  );
}
