"use client";

import React, { useState } from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconTableColumn,
} from "@tabler/icons-react";
import { GlobeDemo } from "./ui/GridGlobe";
import { BackgroundGradientAnimation } from "./ui/Gradientbg";
import Lottie from "react-lottie";
import animationData from "@/Data/confetti.json"; // Correct path
import MagicButton from "./ui/MagicButton";
import { IoCopyOutline } from "react-icons/io5";

const Whychoose = () => {
  const [copied, setCopied] = useState(false); // State to trigger animation
  const [playEffect, setPlayEffect] = useState(false); // State to trigger special effects

  // Define the handleCopy function
  const handleCopy = () => {
    navigator.clipboard.writeText("bhaleraoprem198@gmail.com");
    setCopied(true); // Set copied state to true to trigger animation
    setPlayEffect(true); // Trigger special effect

    // Reset copied state and special effect after 2 seconds to stop animation
    setTimeout(() => {
      setCopied(false);
      setPlayEffect(false); // Reset special effect
    }, 2000);
  };

  // Define items array
  const items = [
    {
      title: "The Power of Communication",
      description:
        "Understand the impact of effective communication in our lives.",
      img: "/b1.svg",
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Passionate Developer",
      description: "Join the quest for understanding and enlightenment.",
      img: "/b5.svg",
      icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Joy of Creation",
      description: "Experience the thrill of bringing ideas to life.",
      header: (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Background Gradient Animation with Lottie and MagicButton inside */}
          <BackgroundGradientAnimation className="absolute inset-0 z-0 flex items-center justify-center text-white font-bold">
            <div
              className={`flex flex-col items-center justify-center z-10 mb-32 transition-transform duration-300 ${
                playEffect ? "scale-125" : "" // Add a scaling effect when button is clicked
              }`}
            >
              {/* Lottie Animation */}
              <Lottie
                options={{
                  loop: false, // Play animation only once
                  autoplay: copied, // Autoplay based on copied state
                  animationData,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice",
                  },
                }}
                height={150}
                width={150}
                isStopped={!copied} // Stop animation when not in "copied" state
              />

              {/* Magic Button */}
              <MagicButton
                title="Copy my email"
                icon={<IoCopyOutline />}
                position="left"
                otherClasses="!bg-[#161a31]"
                handleClick={handleCopy} // Attach handleClick
              />
            </div>
          </BackgroundGradientAnimation>
        </div>
      ),
      icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    },
    {
      header: <GlobeDemo />,
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
  ];

  // Render the BentoGrid component
  return (
    <BentoGrid className="max-w-6xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          img={item.img}
          className={i === 1 || i === 2 ? "md:col-span-1" : "md:col-span-2"}
        />
      ))}
    </BentoGrid>
  );
};

export default Whychoose;
