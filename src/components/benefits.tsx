"use client";
import * as React from "react";
import "@/styles/benefit.css";
import { BenefitCard } from "./card/benefit-card";
import useData from "@/hooks/useData";
import { IBenefit } from "@/interfaces/IBenefit";

export function Benefits() {
  const { data, loading, error } = useData("assets/json/benefits.json");

  const finData = data;

  return (
    <div>
      <div className="benefit-content">
        <h2>
          Why
          <br />
          Choosing Us
        </h2>
        <div className="benefit-list">
          {loading && (
            <div className="skeletons">
              {[...Array(3)].map((_, idx) => (
                <div key={idx} className="skeleton"></div>
              ))}
            </div>
          )}
          {error && <div>Error: {error}</div>}
          {!loading &&
            Array.isArray(finData) &&
            finData.length > 0 &&
            finData.map((item: IBenefit, idx: number) => (
              <BenefitCard key={idx} {...item} />
            ))}
          {!loading && Array.isArray(finData) && finData.length === 0 && (
            <div>No benefits found.</div>
          )}
        </div>
      </div>
    </div>
  );
}
