import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import { Trash2 } from "lucide-react";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your Cart - Shoply" },
      { name: "description", content: "Review the items in your shopping cart." },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const { items, updateQuantity, removeFromCart, totalPrice, totalItems } = useCart();

  return (
    <div className="min-h-screen bg-[#EAEDED]">
      <Header />
      <main className="mx-auto max-w-6xl px-2 py-6 md:px-4">
        <div className="grid gap-4 md:grid-cols-[1fr_320px]">
          <div className="rounded-md bg-white p-4 shadow-sm">
            <h1 className="border-b pb-3 text-2xl font-bold">Shopping Cart</h1>

            {items.length === 0 ? (
              <div className="py-10 text-center">
                <p className="mb-4 text-gray-600">Your cart is empty.</p>
                <Link to="/" className="text-[#007185] hover:underline">
                  Continue shopping
                </Link>
              </div>
            ) : (
              <ul className="divide-y">
                {items.map((item) => (
                  <li key={item.id} className="flex gap-4 py-4">
                    <img src={item.image} alt={item.title} className="h-24 w-24 object-cover" />
                    <div className="flex-1">
                      <h3 className="font-medium hover:text-[#C7511F]">{item.title}</h3>
                      <p className="text-xs text-green-700">In Stock</p>
                      <div className="mt-2 flex items-center gap-3">
                        <div className="flex items-center rounded border">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-2 py-1 hover:bg-gray-100"
                          >
                            −
                          </button>
                          <span className="px-3 text-sm">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-2 py-1 hover:bg-gray-100"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="flex items-center gap-1 text-sm text-[#007185] hover:text-[#C7511F] hover:underline"
                        >
                          <Trash2 className="h-4 w-4" /> Delete
                        </button>
                      </div>
                    </div>
                    <div className="font-bold">₹{(item.price * item.quantity).toLocaleString("en-IN")}</div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <aside className="h-fit rounded-md bg-white p-4 shadow-sm">
            <p className="text-lg">
              Subtotal ({totalItems} items):{" "}
              <span className="font-bold">₹{totalPrice.toLocaleString("en-IN")}</span>
            </p>
            <button
              disabled={items.length === 0}
              className="mt-3 w-full rounded-full bg-[#febd69] py-2 text-sm font-medium text-black hover:bg-[#f3a847] disabled:opacity-50"
            >
              Proceed to Checkout
            </button>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}
