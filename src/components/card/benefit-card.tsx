import { IBenefit } from "@/interfaces/IBenefit";
import Image from "next/image";
import * as React from "react";

export function BenefitCard(props: IBenefit) {
  return (
    <div className="benefit-item">
      <div className="benefit-item-text">
        <h3>{props.title}</h3>
        <p>
          {props.description}
        </p>
      </div>
      <div className="benefit-item-action">
        <span>More Info</span>
        <Image
          src="/assets/icons/arrow-right.svg"
          width={48}
          height={24}
          alt="arrow-right"
        />
      </div>
    </div>
  );
}
