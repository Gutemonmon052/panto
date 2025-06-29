import { IProduct } from "@/interfaces/IProducts";
import Image from "next/image";
import * as React from "react";

export function ProductCard(props: IProduct) {
  return (
    <div className="product-item">
      <div className="product-item-image">
        <Image
          src={`assets/images/products/${props.image}.svg`}
          width={217.9}
          height={255.9}
          alt="product"
        />
      </div>
      <div className="product-item-details">
        <div className="product-item-info">
          <p>
            {props.category && typeof props.category === "object"
              ? props.category.name
              : ""}
          </p>
          <h3>{props.title}</h3>
          <div className="product-item-rating">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i}>
                <Image
                  src="assets/icons/star.svg"
                  width={18.28}
                  height={18.28}
                  alt="star"
                />
              </span>
            ))}
          </div>
        </div>
        <div className="product-item-price">
          <div className="price-info">
            <div className="price-icon">
              <span>$</span>
            </div>
            <div className="prive-value">
              <span>{props.price}</span>
            </div>
          </div>
          <div className="product-action">
            <button>
              <Image
                src="assets/icons/plus.svg"
                width={24.37}
                height={24.37}
                alt="btn-action"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
