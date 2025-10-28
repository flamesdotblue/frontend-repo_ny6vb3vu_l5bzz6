export default function Footer() {
  return (
    <footer className="border-t border-orange-100 bg-peach-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="font-semibold text-zinc-900 mb-3">Shop</div>
            <ul className="space-y-2 text-zinc-600">
              <li><a href="#" className="hover:text-zinc-900">New Arrivals</a></li>
              <li><a href="#" className="hover:text-zinc-900">Best Sellers</a></li>
              <li><a href="#" className="hover:text-zinc-900">Essentials</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-zinc-900 mb-3">Collections</div>
            <ul className="space-y-2 text-zinc-600">
              <li><a href="#" className="hover:text-zinc-900">Resort</a></li>
              <li><a href="#" className="hover:text-zinc-900">Studio</a></li>
              <li><a href="#" className="hover:text-zinc-900">Fragrance</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-zinc-900 mb-3">Company</div>
            <ul className="space-y-2 text-zinc-600">
              <li><a href="#" className="hover:text-zinc-900">About</a></li>
              <li><a href="#" className="hover:text-zinc-900">Careers</a></li>
              <li><a href="#" className="hover:text-zinc-900">Sustainability</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-zinc-900 mb-3">Get updates</div>
            <p className="text-zinc-600">Be first to know about new drops and exclusive offers.</p>
            <form className="mt-3 flex gap-2">
              <input
                type="email"
                required
                placeholder="Email address"
                className="flex-1 rounded-full border border-orange-200 bg-white/80 backdrop-blur px-4 py-2 text-sm placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-orange-300"
              />
              <button className="rounded-full bg-zinc-900 text-white px-4 py-2 text-sm font-medium">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Éclat. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-zinc-700">Privacy</a>
            <a href="#" className="hover:text-zinc-700">Terms</a>
            <a href="#" className="hover:text-zinc-700">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
