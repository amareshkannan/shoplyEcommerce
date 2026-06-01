export function Footer() {
  return (
    <footer className="mt-12">
      <div className="bg-[#232f3e] py-10 text-gray-200">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 md:grid-cols-4">
          {[
            { title: "Get to Know Us", items: ["About", "Careers", "Press"] },
            { title: "Make Money", items: ["Sell products", "Affiliate", "Advertise"] },
            { title: "Payment", items: ["Business Card", "Shop with Points", "Reload Balance"] },
            { title: "Let Us Help", items: ["Your Account", "Shipping", "Returns"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="mb-2 font-bold text-white">{col.title}</h4>
              <ul className="space-y-1 text-sm">
                {col.items.map((i) => (
                  <li key={i} className="hover:underline cursor-pointer">{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#131a22] py-4 text-center text-xs text-gray-300">
        © 2026 Shoply Clone. Built for demo purposes.
      </div>
    </footer>
  );
}
