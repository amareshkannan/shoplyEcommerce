import { Link } from "@tanstack/react-router";
import { Search, ShoppingCart, MapPin, Menu } from "lucide-react";
import { useCart } from "@/context/CartContext";

export function Header() {
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-[#131921] text-white">
        <div className="flex items-center gap-2 px-2 py-2 md:px-4">
          <Link to="/" className="shrink-0 rounded border border-transparent px-2 py-1 hover:border-white">
            <span className="text-xl font-bold">
              shop<span className="text-[#febd69]">ly</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1 rounded border border-transparent px-2 py-1 text-sm hover:border-white">
            <MapPin className="h-4 w-4" />
            <div className="leading-tight">
              <div className="text-xs text-gray-300">Deliver to</div>
              <div className="font-bold">Your Location</div>
            </div>
          </div>

          {/* Search */}
          <div className="flex flex-1 items-stretch overflow-hidden rounded-md">
            <input
              type="text"
              placeholder="Search shoply"
              className="w-full px-3 py-2 text-sm text-black outline-none"
            />
            <button className="bg-[#febd69] px-3 hover:bg-[#f3a847]">
              <Search className="h-5 w-5 text-black" />
            </button>
          </div>

          <div className="hidden md:block rounded border border-transparent px-2 py-1 text-sm hover:border-white">
            <div className="text-xs">Hello, sign in</div>
            <div className="font-bold">Account & Lists</div>
          </div>

          <Link
            to="/cart"
            className="flex items-end gap-1 rounded border border-transparent px-2 py-1 hover:border-white"
          >
            <div className="relative">
              <ShoppingCart className="h-7 w-7" />
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#febd69] text-xs font-bold text-black">
                {totalItems}
              </span>
            </div>
            <span className="hidden font-bold md:inline">Cart</span>
          </Link>
        </div>
      </div>

      {/* Sub nav */}
      <div className="flex items-center gap-4 overflow-x-auto bg-[#232f3e] px-2 py-1.5 text-sm text-white md:px-4">
        <button className="flex items-center gap-1 rounded border border-transparent px-2 py-1 font-bold hover:border-white">
          <Menu className="h-4 w-4" /> All
        </button>
        {["Today's Deals", "Electronics", "Fashion", "Home", "Best Sellers", "Customer Service"].map(
          (item) => (
            <a
              key={item}
              href="#"
              className="whitespace-nowrap rounded border border-transparent px-2 py-1 hover:border-white"
            >
              {item}
            </a>
          )
        )}
      </div>
    </header>
  );
}
