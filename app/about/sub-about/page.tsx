"use client";

import Image from "next/image";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const SubService = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const element = imageRef.current;

    if (element) {
      // GSAP animation for hover effect
      gsap.to(element, {
        duration: 1,
        scale: 1.1,
        rotation: 10, // Rotate by 10 degrees
        ease: "power2.inOut",
        paused: true,
        yoyo: true,
      });

      const handleMouseEnter = () => {
        gsap.to(element, { scale: 1.2, rotation: 30 }); // Increase scale and rotate by 20 degrees
      };

      const handleMouseLeave = () => {
        gsap.to(element, { scale: 1, rotation: 0 }); // Reset scale and rotation
      };

      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);

      // Clean up event listeners on component unmount
      return () => {
        if (element) {
          element.removeEventListener("mouseenter", handleMouseEnter);
          element.removeEventListener("mouseleave", handleMouseLeave);
        }
      };
    }
  }, []);

  useEffect(() => {
    const element = imageRef.current;

    if (element) {
      // GSAP ScrollTrigger animation
      gsap.to(element, {
        rotation: 360, // Full rotation
        scrollTrigger: {
          trigger: element,
          start: "top center", // Animation starts when the top of the trigger hits the center of the viewport
          end: "bottom top", // Animation ends when the bottom of the trigger hits the top of the viewport
          scrub: true, // Link the animation to the scroll position
        },
      });
    }
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center pt-20">
        <h1 className="text-[40px] font-semibold text-transparent pb-0 bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
          About Us
        </h1>
        <div className="px-4 sm:px-8 md:px-20">
          <p className="mt-8 text-gray-300">
            True Tech Hub is a versatile, multi-faceted hub where technology, marketing, and creative ingenuity converge seamlessly.
          </p>
          <p className="mt-8 text-gray-300">
            At True Tech Hub, we specialize in creating bespoke solutions that cater to the unique needs of established corporations, SMEs, and innovative startups. Our clientele spans a wide spectrum, from global giants to small enterprises, ensuring diverse expertise. With in-depth knowledge of the GCC market and a global outlook, we provide multilingual content and services tailored to your specific local business demands. Elevate your business with our tailored strategies, where precision meets diversity, and innovation knows no bounds. Join us in the journey to redefine success!
          </p>
          <p className="mt-8 text-gray-300">
            At True Tech Hub, we don&apos;t just build websites; we craft digital masterpieces. Our journey began with an unwavering passion for digital innovation and a profound commitment to enhancing lives through cutting-edge technology and boundless creativity.
          </p>
        </div>
        <div className="min-h-screen flex flex-col md:flex-row items-center justify-center md:space-x-8 pt-0">
          <div className="md:w-1/2 p-8">
            <h2 className="text-xl md:text-2xl text-transparent pb-0 bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
              Global Presence, Local Expertise !
            </h2>
            <p className="mt-4 text-gray-300">
              With offices strategically scattered across the globe, we&apos;re not just your run-of-the-mill agency. We&apos;re your global Web Weavers. From the vibrant cities of Sydney and Melbourne in Australia to the bustling metropolises of Los Angeles and Chicago in the USA, from the dynamic hubs of Singapore, Wellington, and Auckland in New Zealand to the thriving tech scenes of India and the opulence of Dubai in the United Arab Emirates, we are your full-service partner, 24/7.
            </p>
          </div>
          <div 
            className="md:w-1/2 bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-lg max-w-md w-full" 
            ref={imageRef}
          >
            <Image 
              src="/about.jpg"
              alt="About Image"
              width={450}
              height={600}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SubService;
