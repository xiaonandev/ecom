import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="border-b border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-4 px-4 py-4 text-sm sm:px-6">
        <Link href="/" className="font-medium">My Ecommerce</Link>
        <div className="ml-auto flex items-center gap-5 md:mx-auto">
          <Link href="/" className="hover:text-zinc-500">Home</Link>
          <Link href="/products" className="hover:text-zinc-500">Products</Link>
          <Link href="/checkout" className="hover:text-zinc-500">Checkout</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
