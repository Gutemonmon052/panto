import { ITestimonial } from "@/interfaces/ITestimonial";
import Image from "next/image";
import * as React from "react";

export function TestimonialCard(props:ITestimonial) {
  return (
    <div className="testimonials-item">
      <div className="testimonials-bg">
        <Image
          src={`assets/images/testimonials/contents/${props.backgroundImg}.svg`}
          alt="testimonials"
          width={370}
          height={506}
        />
      </div>
      <div className="testimonials-item-content">
        <div className="testimonials-item-content-bg">
          <Image
            src="assets/images/testimonials/union.svg"
            alt="testimonials"
            width={334}
            height={239}
          />
        </div>

        <div className="testimonials-info">
          <div className="testimonials-item-pic">
            <Image
              src={`assets/images/testimonials/persons/${props.image}.svg`}
              alt="testimonials"
              width={50}
              height={55}
            />
          </div>
          <div className="testimonials-identity">
            <div className="testimonials-item-name">
              <span>{props.name}</span>
            </div>
            <div className="testimonials-item-job">
              <span>{props.jobtitle}</span>
            </div>
          </div>
          <div className="testimonials-item-text">
            <p>
              {props.description}
            </p>
          </div>
        <div className="testimonials-rating">
          {[...Array(props.rating)].map((_, i) => (
            <Image
              key={i}
              src="assets/icons/Star(Review).svg"
              width={14}
              height={14}
              alt="star"
            />
          ))}
          {props.rating < 5 && (
            <Image
              src="assets/icons/Unstar(Review).svg"
              width={14}
              height={14}
              alt="unstar"
            />
          )}
        </div>
        </div>
      </div>
    </div>
  );
}
