import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {/* soft peach background wash */}
        <div className="absolute inset-0 bg-gradient-to-b from-orange-50 via-rose-50 to-peach-50 opacity-80 pointer-events-none" />
        {/* shimmer */}
        <div className="absolute -top-24 -left-24 h-72 w-72 bg-rose-200/50 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 bg-amber-200/60 blur-3xl rounded-full pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center pt-10 lg:pt-20 pb-16">
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-white/70 backdrop-blur border border-orange-100 text-orange-700">
            New Season • SS25
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900">
            Effortless style, timeless allure.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 max-w-xl">
            Discover curated pieces and sensorial beauty essentials. Crafted silhouettes, airy textures, and warm hues inspired by golden hours.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#shop" className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-zinc-900 text-white hover:bg-zinc-800 transition">
              Shop Collection
            </a>
            <a href="#beauty" className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-white/80 backdrop-blur border border-orange-200 text-zinc-900 hover:bg-white">
              Beauty & Fragrance
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-zinc-700">
            <div>
              <div className="font-semibold">Free shipping</div>
              <div className="text-zinc-500">On orders over $100</div>
            </div>
            <div>
              <div className="font-semibold">Easy returns</div>
              <div className="text-zinc-500">30-day guarantee</div>
            </div>
          </div>
        </div>

        <div className="relative h-[460px] sm:h-[520px] md:h-[560px] lg:h-[600px] xl:h-[640px]">
          <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-[0_20px_60px_-20px_rgba(0,0,0,0.2)] bg-peach-50">
            <Spline scene="https://prod.spline.design/c1w2QYixcPkptHWE/scene.splinecode" style={{ width: "100%", height: "100%" }} />
            {/* gradient highlights that don't block interaction */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-peach-50/0 via-peach-50/0 to-white/0" />
          </div>
        </div>
      </div>
    </section>
  );
}
