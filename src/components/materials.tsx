import Image from "next/image";
import * as React from "react";
import "@/styles/materials.css";

export function Materials() {
  return (
    <div>
      <div className="materials-content">
        <div className="materials-container">
          <div className="materials-desc">
            <div className="materials-title">
              <span>MATERIALS</span>
            </div>
            <div className="materials-subtitle">
              <h2>
                Very Serious
                <br />
                Materials For Making
                <br />
                Furniture
              </h2>
            </div>
            <div className="materials-text">
              <p>
                Because panto was very serious about designing furniture for our
                environment, using a very expensive and famous capital but at a
                relatively low price
              </p>
            </div>
          </div>
          <div className="materials-action">
            <span>More Info</span>
            <Image
              src="/assets/icons/arrow-right.svg"
              width={48}
              height={24}
              alt="arrow-right"
            />
          </div>
        </div>
        <div className="materials-image">
          <Image
            src="/assets/images/materials/content.svg"
            alt="materials"
            width={728}
            height={541}
          />
        </div>
      </div>
    </div>
  );
}
