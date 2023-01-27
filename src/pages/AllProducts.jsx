import React, { useState } from 'react';
import Products from './Products';

export default function AllProducts() {
  const [category, setCategory] = useState('all');

  return (
    <section className="bg-white pt-16">
      <div className="container mx-auto flex items-center flex-wrap py-4">
        <nav className="w-full z-30 top-0 px-6 mb-12">
          <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2">
            <a
              className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl"
              href="#"
            >
              Categories
            </a>
          </div>
          <ul className="px-2 text-xl mt-6 flex"></ul>
        </nav>
        {/*<Products />*/}
      </div>
    </section>
  );
}
