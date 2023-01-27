import React, { useCallback, useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import useProducts from '../hooks/useProducts';
import Category from '../components/Category';
import Categories from '../components/Categories';

export default function Products() {
  const [menus, setMenus] = useState('all');
  const onSelect = useCallback((category) => setMenus(category), []);

  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts();

  const [data, setData] = useState(products);
  useEffect(() => {
    try {
      // console.log(products);
      let selected = products;
      if (data === null || data === 'undefined' || menus === 'all') {
        selected = products;
      } else {
        selected = products.filter((product) => product.category === menus);
      }
      setData(selected);
    } catch (e) {
      console.error(e);
    }
  }, [products, menus]);

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
          <div>
            <Categories menus={menus} onSelect={onSelect} setMenus={setMenus} />
          </div>
        </nav>
        <div>
          {isLoading && <p>Loading...</p>}
          {error && <p>{error}</p>}
          <ul className="w-full grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
            {/*{products &&*/}
            {/*  products.map((product) => (*/}
            {/*    <ProductCard key={product.id} product={product} menus={menus} />*/}
            {/*  ))}*/}
            {data &&
              data.map((d) => (
                <ProductCard key={d.id} product={d} menus={menus} />
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
