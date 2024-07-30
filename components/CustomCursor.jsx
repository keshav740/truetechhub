"use client"


// components/CustomCursor.js
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const lineRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const line = lineRef.current;
    const circle = circleRef.current;

    gsap.set(cursor, { xPercent: -50, yPercent: -50 });
    gsap.set(circle, { xPercent: -50, yPercent: -50 });

    const moveCursor = (e) => {
      const cursorX = e.clientX;
      const cursorY = e.clientY;

      gsap.to(cursor, { duration: 0.1, x: cursorX, y: cursorY });
      gsap.to(circle, { duration: 0.3, x: cursorX, y: cursorY });

      const circleBox = circle.getBoundingClientRect();
      const circleCenterX = circleBox.left + circleBox.width / 2;
      const circleCenterY = circleBox.top + circleBox.height / 2;

      gsap.to(line, {
        duration: 0.1,
        attr: {
          x1: cursorX,
          y1: cursorY,
          x2: circleCenterX,
          y2: circleCenterY,
        },
      });
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor"></div>
      <svg className="line">
        <line ref={lineRef} x1="0" y1="0" x2="0" y2="0" stroke="black" strokeWidth="2" />
      </svg>
      <div ref={circleRef} className="circle"></div>
      <style jsx>{`
        .cursor {
          position: fixed;
          top: 0;
          left: 0;
          width: 10px;
          height: 10px;
          background-color: red;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
        }
        .line {
          position: fixed;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 9998;
        }
        .circle {
          position: fixed;
          top: 0;
          left: 0;
          width: 40px;
          height: 40px;
          border: 2px solid pink;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9997;
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
