import { ShoppingBag, Search, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-20 bg-peach-50/70 backdrop-blur supports-[backdrop-filter]:bg-peach-50/60 border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="inline-flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-orange-300 via-amber-300 to-rose-300" />
          <span className="font-semibold tracking-tight text-zinc-900">Éclat</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-700">
          <a href="#" className="hover:text-zinc-900">New</a>
          <a href="#" className="hover:text-zinc-900">Women</a>
          <a href="#" className="hover:text-zinc-900">Men</a>
          <a href="#" className="hover:text-zinc-900">Beauty</a>
          <a href="#" className="hover:text-zinc-900">Sale</a>
        </nav>

        <div className="flex items-center gap-4">
          <button aria-label="Search" className="p-2 rounded-full hover:bg-orange-100 text-zinc-700">
            <Search size={20} />
          </button>
          <button aria-label="Account" className="p-2 rounded-full hover:bg-orange-100 text-zinc-700">
            <User size={20} />
          </button>
          <button className="inline-flex items-center gap-2 bg-zinc-900 text-white px-3 py-2 rounded-full text-sm">
            <ShoppingBag size={18} />
            <span>Cart</span>
          </button>
        </div>
      </div>
    </header>
  );
}
