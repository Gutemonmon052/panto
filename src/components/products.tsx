"use client";
import Image from "next/image";
import * as React from "react";
import "@/styles/products.css";
import { ProductCard } from "./card/product-card";
import useData from "@/hooks/useData";
import { ICategory } from "@/interfaces/ICategory";
import { IProduct } from "@/interfaces/IProducts";

export function Products() {
  const {
    data: categoriesData,
  } = useData<ICategory[]>("assets/json/categories.json");

  const {
    data: productsData,
  } = useData<IProduct[]>("assets/json/products.json");

  console.log(productsData);

  const [selectedProduct, setSelectedProduct] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    setSelectedProduct(0);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 758);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [productsData]);

  const handleNext = () => {
    setSelectedProduct(
      (prev) => (prev + 1) % (productsData ? productsData.length : 1)
    );
  };

  const handlePrev = () => {
    setSelectedProduct(
      (prev) =>
        (prev - 1 + (productsData ? productsData.length : 1)) %
        (productsData ? productsData.length : 1)
    );
  };

  return (
    <div>
      <div className="products-content">
        <h2>Best Selling Product</h2>
        <div className="product-category-list">
          {categoriesData &&
            categoriesData.map((category: ICategory, idx: number) => (
              <div key={category.id}>
                <input
                  type="radio"
                  id={category.id.toString()}
                  name="product-category"
                  value={category.id}
                  checked={idx === 0}
                  disabled={idx !== 0}
                  readOnly
                />
                <label htmlFor={category.id.toString()}>{category.name}</label>
              </div>
            ))}
        </div>
        <div className="product-list">
          {(Array.isArray(productsData) ? productsData : [])
            .filter((product: IProduct) =>
              categoriesData
                ? categoriesData.some(
                    (category: ICategory) => category.id === product.category.id
                  )
                : true
            )
            .slice(
              selectedProduct,
              isMobile ? selectedProduct + 1 : productsData?.length
            )
            .map((product: IProduct) => {
              const categoryName = categoriesData?.find(
                (category: ICategory) => category.id === product.category.id
              )?.name;
              return (
                <ProductCard
                  key={product.id}
                  {...product}
                  category={{ ...product.category, name: categoryName! }}
                />
              );
            })}
          <div className="product-items-actions">
            <button
              disabled={!isMobile || productsData?.length === 1}
              onClick={handlePrev}
            >
              <Image
                src="/assets/icons/next.svg"
                width={48}
                height={24}
                alt="arrow-left"
              />
            </button>
            <button
              disabled={!isMobile || productsData?.length === 1}
              onClick={handleNext}
            >
              <Image
                src="/assets/icons/previous.svg"
                width={48}
                height={24}
                alt="arrow-right"
              />
            </button>
          </div>
        </div>
        <div className="product-list-scroll">
          <span>View All</span>
          <Image
            src="/assets/icons/arrow-right.svg"
            width={48}
            height={24}
            alt="arrow-right"
          />
        </div>
      </div>
    </div>
  );
}

