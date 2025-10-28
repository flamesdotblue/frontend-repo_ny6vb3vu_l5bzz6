const products = [
  {
    id: 1,
    name: "Linen Wrap Dress",
    color: "Sand",
    price: "$168",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Crochet Knit Top",
    color: "Ivory",
    price: "$98",
    image:
      "https://images.unsplash.com/photo-1520975922284-5f5738d1d2c1?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Wide-Leg Trousers",
    color: "Clay",
    price: "$142",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Slingback Heels",
    color: "Peach",
    price: "$120",
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Woven Straw Bag",
    color: "Natural",
    price: "$86",
    image:
      "https://images.unsplash.com/photo-1503342452485-86ff0a91058f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Silk Scarf",
    color: "Apricot",
    price: "$58",
    image:
      "https://images.unsplash.com/photo-1521575107034-e0fa0b594529?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function ProductGrid() {
  return (
    <section id="shop" className="py-14 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">
              Featured pieces
            </h2>
            <p className="mt-1 text-zinc-600">Light layers and sun-washed hues for warmer days.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex text-sm font-medium text-zinc-900 hover:underline">
            View all
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((p) => (
            <article key={p.id} className="group">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-orange-50">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="mt-3 flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-sm font-medium text-zinc-900">{p.name}</h3>
                  <p className="text-xs text-zinc-500">{p.color}</p>
                </div>
                <div className="text-sm font-semibold text-zinc-900">{p.price}</div>
              </div>
              <button className="mt-3 w-full inline-flex items-center justify-center rounded-full border border-zinc-200 px-3 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-50">
                Add to bag
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
