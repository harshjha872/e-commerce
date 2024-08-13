"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { toast } from "sonner";
import Loader from "@/components/Loader";

export default function MainPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetching all the products
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("https://dummyjson.com/products");
        console.log(res.data.products);
        const productsFromApi = res.data.products.map((product: any) => (
          <ProductCard
            key={product.id}
            id={product.id}
            productName={product.title}
            productDescription={product.description}
            productImage={product.images[0]}
            productPrice={product.price}
          />
        ));

        //Set products to display on screen
        setProducts(productsFromApi);
      } catch (err) {
        console.log(err);
        toast.error("Error while fetching the products");
      }
      setLoading(false);
    })();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 mt-28">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
            Featured Products
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Explore Our Top Picks
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Browse our curated selection of high-quality products that will
            elevate your lifestyle.
          </p>
        </div>
      </div>
      <main className="mt-6">
        <h2 className="text-2xl font-bold mb-8">Featured Products</h2>
        {/* loader is displayed when products are not on the screen */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {loading ? <Loader /> : products}
        </div>
      </main>
    </>
  );
}
