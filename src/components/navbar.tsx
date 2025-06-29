import Image from "next/image";
import * as React from "react";
import '@/styles/navbar.css';

export function Navbar() {
  return (
    <div>
      <div className="navbar-content">
        <div className="navbar-logo">
          <Image
            src="/assets/icons/panto.svg"
            width={78}
            height={35}
            alt="menu-icon"
          />
        </div>
        <nav>
          <div className="link-group">
            <a href="">Furniture</a>
            <Image
              src="/assets/icons/down-arrow.svg"
              width={18}
              height={18}
              alt="down-arrow"
            />
          </div>
          <div className="link-group">
            <a href="">Shop</a>
          </div>
          <div className="link-group">
            <a href="">About Us</a>
          </div>
          <div className="link-group">
            <a href="">Contact</a>
          </div>
        </nav>
        <div className="cart">
          <div className="cart-icon">
            <Image
              src="/assets/icons/bag.svg"
              width={34}
              height={34}
              alt="cart-icon"
            />
          </div>
          <div className="cart-badge">
            <span>0</span>
          </div>
        </div>
      </div>
    </div>
  );
}
