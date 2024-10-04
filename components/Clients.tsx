import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, testimonials } from "@/Data";
import Image from "next/image"; // Import Next.js Image component

const Clients = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        Kind words from <span className="text-purple">Recommendations</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10 mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10 mt-10">
          {companies.map(({ id, img, name }) => (
            <div
              key={id}
              className="flex flex-row items-center md:max-w-60 max-w-32 gap-2"
            >
              {/* Ensure img path starts with "/" */}
              <Image
                src={img} // Path already starts with "/" in the array
                alt={name}
                width={40} // Adjust size accordingly
                height={40} // Adjust size accordingly
                className="md:w-10 w-5"
              />
              <span className="text-center text-xl font-semibold">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
