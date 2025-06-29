import Image from "next/image";
import * as React from "react";
import "@/styles/jumbotron.css";

export function Jumbotron() {
  return (
    <div>
      <div className="jumbotron-content">
        <div className="jumbotron-image">
          <Image
            src="/assets/images/jumbotron/Rectangle 1441.svg"
            alt="jumbotron background"
            width={1440}
            height={1048}
          />
        </div>
        <div className="jumbotron-container">
          <div className="jumbotron-text">
            <h1>
              Make Your Interior More
              <br />
              Minimalistic & Modern
            </h1>
            <p>
              Turn your room with panto into a lot more minimalist
              <br />
              and modern with ease and speed
            </p>
          </div>
          <div className="jumbotron-search">
            <input type="text" placeholder="Search furniture" />
            <button disabled>
              <Image
                src="/assets/icons/search.svg"
                alt="search"
                width={18}
                height={18}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
