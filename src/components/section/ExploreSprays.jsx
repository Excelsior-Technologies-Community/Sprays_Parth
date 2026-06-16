import { useState } from "react";
import { ProductSwiper } from "../shoppingcard";
import { exploreProducts } from "../../data/products";

export default function ExploreSprays() {

  const [activeCategory, setActiveCategory] =
    useState("fragrances");

  const filteredProducts =
    exploreProducts.filter(
      (product) =>
        product.category === activeCategory
    );

  return (
    <section className="py-20">

      <div className="flex justify-between items-center mb-10">

        <div>
          <h2 className="text-5xl font-bold">
            Exploring the
          </h2>

          <h2 className="text-5xl font-light">
            Versatility of Sprays
          </h2>
        </div>

        <div className="flex gap-3">

          <button
            onClick={() =>
              setActiveCategory("fragrances")
            }
          >
            Fragrances
          </button>

          <button
            onClick={() =>
              setActiveCategory("unisex")
            }
          >
            Unisex Perfume
          </button>

          <button
            onClick={() =>
              setActiveCategory("solid")
            }
          >
            Solid Perfume
          </button>

        </div>

      </div>

      <ProductSwiper
        products={filteredProducts}
      />

    </section>
  );
}