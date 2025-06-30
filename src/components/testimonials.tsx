"use client";
import Image from "next/image";
import * as React from "react";
import "@/styles/testimonials.css";
import { TestimonialCard } from "./card/testimonial-card";
import useData from "@/hooks/useData";
import { ITestimonial } from "@/interfaces/ITestimonial";

export function Testimonials() {
  const { data } = useData<ITestimonial[]>("assets/json/testimonials.json");

  const [slideIndex, setSlideIndex] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    setSlideIndex(0);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1280);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [data]);

  const handleNext = () => {
    setSlideIndex((prev) => (prev + 1) % data!.length);
  };

  const handlePrev = () => {
    setSlideIndex((prev) => (prev - 1 + data!.length) % data!.length);
  };

  return (
    <div>
      <div className="testimonials-content">
        <div className="testimonials-desc">
          <span>TESTIMONIALS</span>
          <h2>Our Client Reviews</h2>
        </div>
        <div className="testimonials-items">
          {!isMobile
            ? data?.map((item, index) => (
                <TestimonialCard key={index} {...item} />
              ))
            : data?.map((item, index) => (
                <div key={index}>
                  {slideIndex === index && <TestimonialCard {...item} />}
                </div>
              ))}
          <div className="testimonials-items-actions">
            <button disabled={!isMobile} onClick={handlePrev}>
              <Image
                src="/assets/icons/next.svg"
                width={48}
                height={24}
                alt="arrow-left"
              />
            </button>
            <button disabled={!isMobile} onClick={handleNext}>
              <Image
                src="/assets/icons/previous.svg"
                width={48}
                height={24}
                alt="arrow-right"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
