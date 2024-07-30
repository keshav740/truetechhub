"use client";

// components/Background3D.js
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";

gsap.registerPlugin(CSSPlugin);

const images = [
  "/logo.jpeg",
  "/about.jpg",
  "/ai.jpg",
  "/framer.png",
  "/figma.png",
  "/pitwhite.png",
  "/js.png",
  "/html.png",
  "/go.png",
  "/next.png",
  "/react.png",
  "/reactquery.png",
  "/NextWebsite.png",
];

const Background3D = () => {
  const imgRefs = useRef([]);

  useEffect(() => {
    imgRefs.current.forEach((img) => {
      const size = Math.random() * 80 + 40; // Varying size for responsiveness
      gsap.fromTo(
        img,
        {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          z: Math.random() * 500,
          rotationX: Math.random() * 360,
          rotationY: Math.random() * 360,
          rotationZ: Math.random() * 360,
          width: size,
          height: size,
        },
        {
          duration: 10,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          z: Math.random() * 500,
          rotationX: Math.random() * 360,
          rotationY: Math.random() * 360,
          rotationZ: Math.random() * 360,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        }
      );
    });
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden perspective-800 bg-gradient-to-r z-[-1]">
      {images.map((src, i) => (
        <img
          key={i}
          ref={(el) => (imgRefs.current[i] = el)}
          src={src}
          alt={`Image ${i}`}
          className="absolute object-cover rounded-lg shadow-lg"
        />
      ))}
    </div>
  );
};

export default Background3D;
