import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shoply - Online Shopping for Electronics, Fashion & More" },
      { name: "description", content: "Shop millions of products with fast delivery on Shoply." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-[#EAEDED]">
      <Header />

      {/* Hero banner */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-b from-[#232f3e] to-[#EAEDED] md:h-72">
        <img
          src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1600"
          alt="Shop the latest deals"
          className="h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white drop-shadow-lg">
            <h1 className="text-3xl font-bold md:text-5xl">Big Deals, Every Day</h1>
            <p className="mt-2 text-sm md:text-lg">Save up to 50% on top brands</p>
          </div>
        </div>
      </div>

      <main className="mx-auto -mt-16 max-w-7xl px-2 md:px-4">
        {/* Category tiles */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { title: "Electronics", img: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400" },
            { title: "Fashion", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400" },
            { title: "Home & Kitchen", img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400" },
            { title: "Beauty", img: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=400" },
          ].map((c) => (
            <div key={c.title} className="bg-white p-4 shadow-sm">
              <h3 className="mb-2 text-lg font-bold">{c.title}</h3>
              <div className="h-32 overflow-hidden">
                <img src={c.img} alt={c.title} className="h-full w-full object-cover" />
              </div>
              <a href="#" className="mt-2 inline-block text-sm text-[#007185] hover:text-[#C7511F] hover:underline">
                Shop now
              </a>
            </div>
          ))}
        </div>

        {/* Products */}
        <section className="mt-6 rounded-md bg-white p-4 shadow-sm">
          <h2 className="mb-4 text-xl font-bold">Featured Products</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
