import { Star } from "lucide-react";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <div className="flex flex-col rounded-md bg-white p-4 shadow-sm transition hover:shadow-md">
      <div className="mb-3 flex h-48 items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <h3 className="mb-1 line-clamp-2 text-sm font-medium text-[#0F1111] hover:text-[#C7511F] cursor-pointer">
        {product.title}
      </h3>
      <div className="mb-1 flex items-center gap-1 text-sm">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < Math.round(product.rating)
                  ? "fill-[#febd69] text-[#febd69]"
                  : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <span className="text-[#007185]">{product.reviews.toLocaleString()}</span>
      </div>
      <div className="mb-3">
        <span className="text-xl font-medium text-[#0F1111]">
          ₹{product.price.toLocaleString("en-IN")}
        </span>
      </div>
      <button
        onClick={() => addToCart(product)}
        className="mt-auto rounded-full bg-[#febd69] py-1.5 text-sm font-medium text-black hover:bg-[#f3a847]"
      >
        Add to Cart
      </button>
    </div>
  );
}
