export default function ProductsLoading() {
  return (
    <div className="lg:w-[80%] container mx-auto py-10 animate-pulse">
      {/* Title skeleton */}
      <div className="h-10 w-40 bg-gray-200 rounded-lg mb-6" />

      {/* Filters skeleton */}
      <div className="flex gap-4 items-end bg-white p-4 rounded-xl shadow-sm border border-gray-200 mb-8">
        <div className="flex flex-col gap-1 flex-1">
          <div className="h-4 w-20 bg-gray-200 rounded mb-1" />
          <div className="h-11 w-full bg-gray-200 rounded-lg" />
        </div>
        <div className="flex flex-col gap-1 flex-1">
          <div className="h-4 w-20 bg-gray-200 rounded mb-1" />
          <div className="h-11 w-full bg-gray-200 rounded-lg" />
        </div>
        <div className="flex flex-col gap-1 flex-1">
          <div className="h-4 w-20 bg-gray-200 rounded mb-1" />
          <div className="h-11 w-full bg-gray-200 rounded-lg" />
        </div>
        <div className="flex flex-col gap-1 flex-1">
          <div className="h-4 w-20 bg-gray-200 rounded mb-1" />
          <div className="h-11 w-full bg-gray-200 rounded-lg" />
        </div>
      </div>

      {/* Products grid skeleton */}
      <div className="grid grid-cols-4 gap-5">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="flex flex-col gap-3 p-4 border border-gray-200 rounded-xl bg-white min-h-[400px]"
          >
            {/* Product image */}
            <div className="w-full h-48 bg-gray-200 rounded-lg" />

            {/* Title */}
            <div className="h-5 w-3/4 bg-gray-200 rounded mt-2" />
            <div className="h-4 w-1/2 bg-gray-200 rounded" />

            {/* Description */}
            <div className="h-3 w-full bg-gray-200 rounded" />
            <div className="h-3 w-5/6 bg-gray-200 rounded" />

            {/* Rating */}
            <div className="h-4 w-20 bg-gray-200 rounded" />

            {/* Price */}
            <div className="h-5 w-16 bg-gray-200 rounded mt-auto" />

            {/* Button */}
            <div className="h-10 w-full bg-gray-200 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
