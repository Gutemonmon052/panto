import Image from "next/image";
import * as React from "react";
import '@/styles/experiences.css';

export function Experiences() {
  return (
    <div>
      <div className="experiences-content">
        <div className="experiences-image">
          <Image
            src="/assets/images/experiences/content.svg"
            alt="experiences"
            width={728}
            height={541}
          />
        </div>
        <div className="experiences-container">
          <div className="experiences-desc">
            <div className="experiences-title">
              <span>EXPERIENCES</span>
            </div>
            <div className="experiences-subtitle">
              <h2>
                We Provide You The
                <br />
                Best Experience
              </h2>
            </div>
            <div className="experiences-text">
              <p>
                You don’t have to worry about the result because all of these
                interiors are made by people who are professionals in their
                fields with an elegant and lucurious style and with premium
                quality materials
              </p>
            </div>
          </div>
          <div className="experiences-action">
            <span>More Info</span>
            <Image
              src="/assets/icons/arrow-right.svg"
              width={48}
              height={24}
              alt="arrow-right"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
