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
    imgRefs.current.forEach((img, index) => {
      gsap.fromTo(
        img,
        {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          z: Math.random() * 500,
          rotationX: Math.random() * 360,
          rotationY: Math.random() * 360,
          rotationZ: Math.random() * 360,
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
    <div className="background-container">
      {images.map((src, i) => (
        <img
          key={i}
          ref={(el) => (imgRefs.current[i] = el)}
          src={src}
          className="image-item"
          alt={`Image ${i}`}
        />
      ))}
      <style jsx>{`
        .background-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          perspective: 800px;
        }
        .image-item {
          position: absolute;
          width: 100px;
          height: 100px;
          object-fit: cover;
        }
      `}</style>
    </div>
  );
};

export default Background3D;
