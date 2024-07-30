"use client";

import React from "react";
import {
  FaWhatsapp,
  FaCode,
  FaAppStoreIos,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaPhone,
} from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";
import { FaClock } from "react-icons/fa6";
import { AiFillAccountBook } from "react-icons/ai";
import { MdOutlineSocialDistance } from "react-icons/md";
import { PiChartPolarLight } from "react-icons/pi";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const handleIconClick = () => {
    window.location.href = "mailto:truetechhub@gmail.com";
  };

  const phoneNumber = "7505189143";
  const message = "Hello! I would like to chat with you.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="w-full bg-transparent text-gray-200 shadow-lg p-[15px] py-10">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-around flex-wrap">
          {/* Your logo section */}
          <div className="min-w-[200px] h-auto flex flex-col items-start justify-start text-left">
            <Link href="/">
              <Image
                src="/logo.jpeg"
                alt="logo"
                width={150}
                height={150}
                className="cursor-pointer hover:animate-slowspin rounded-full"
              />
            </Link>
            {/* <p className="flex flex-row items-center my-[15px] cursor-pointer text-yellow-500">
              <FaLocationDot />
              <span className="text-[15px] ml-[6px] text-white">
              Nehru Place, Delhi India
              </span>
            </p> */}
            <p className="flex flex-row items-center my-[15px] cursor-pointer text-yellow-500">
              <FaLocationDot />
              <span className="text-[15px] ml-[6px] text-white">
              Moradabad, India
              </span>
            </p>
            
           
          </div>
          {/* Your services section */}
          <div className="min-w-[200px] h-auto flex flex-col items-start justify-start text-left">
            <div className="font-bold text-[26px]">Services</div>
            <Link href="/services/web-development">
              <p className="flex flex-row items-center my-[15px] cursor-pointer text-pink-500">
                <FaCode />
                <span className="text-[15px] ml-[6px] text-white">
                  Web Design & Development
                </span>
              </p>
            </Link>
            <Link href="/services/app-development">
              <p className="flex flex-row items-center my-[15px] cursor-pointer text-purple-600">
                <FaAppStoreIos />
                <span className="text-[15px] ml-[6px] text-white">
                  App Development
                </span>
              </p>
            </Link>
            <Link href="/services/aiml">
              <p className="flex flex-row items-center my-[15px] cursor-pointer text-yellow-600">
                <AiFillAccountBook />
                <span className="text-[15px] ml-[6px] text-white">AI / ML</span>
              </p>
            </Link>
            <Link href="/services/social-media">
              <p className="flex flex-row items-center my-[15px] cursor-pointer text-red-500">
                <MdOutlineSocialDistance />
                <span className="text-[15px] ml-[6px] text-white">
                  Social Media Marketing
                </span>
              </p>
            </Link>
            <Link href="/projects">
              <p className="flex flex-row items-center my-[15px] cursor-pointer text-yellow-500">
                <MdOutlineMiscellaneousServices />
                <span className="text-[15px] ml-[6px] text-white">
                  Projects
                </span>
              </p>
            </Link>
            <Link href="/our-personal-ai">
              <p className="flex flex-row items-center my-[15px] cursor-pointer text-yellow-500">
                <PiChartPolarLight />
                <span className="text-[15px] ml-[6px] text-white">
                  Use Ai
                </span>
              </p>
            </Link>
          </div>
          {/* Your contact section */}
          <div className="min-w-[200px] h-auto flex flex-col items-start justify-start text-left">
            <div className="font-bold text-[26px]">Contact Us</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer text-purple-500">
              <FaClock />
              <span className="text-[15px] ml-[6px] text-white">
                Mon – Sat 10:00am - 8:00pm
              </span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer text-purple-500">
              <FaPhone />
              <span className="text-[15px] ml-[6px] text-white">
                +91 7505189143
              </span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer text-red-600">
              <CgMail />
              <span className="text-[15px] ml-[6px] text-white">
                truetechhub@gmail.com
              </span>
            </p>
            <Link
              href="https://www.instagram.com/true_techhub?igsh=MXBuNmZ3aHdsMXQ4bw=="
              target="_blank"
            >
              <p className="flex flex-row items-center my-[15px] cursor-pointer text-pink-700">
                <FaInstagram />
                <span className="text-[15px] ml-[6px] text-white">
                  Instagram
                </span>
              </p>
            </Link>
            <Link
              href="https://www.linkedin.com/in/true-tech-hub-959742319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
            >
              <p className="flex flex-row items-center my-[15px] cursor-pointer text-blue-700">
                <FaLinkedin />
                <span className="text-[15px] ml-[6px] text-white">
                  LinkedIn
                </span>
              </p>
            </Link>
            <p className="flex flex-row items-center my-[15px] cursor-pointer text-yellow-500">
              <CiLocationOn />
              <span className="text-[15px] ml-[6px] text-white">
                Moradabad, India
              </span>
            </p>
          </div>
          {/* Your social media section */}
          <div className="min-w-[200px] h-auto flex flex-row justify-between items-start  text-left">
            <p
              className="flex flex-row items-center my-[15px] cursor-pointer text-red-600"
              onClick={handleIconClick}
            >
              <CgMail style={{ pointerEvents: "none" }} />
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer text-blue-600">
              <Link
                href="https://www.facebook.com/profile.php?id=100090959557942"
                target="_blank"
              >
                <FaFacebook />
              </Link>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer text-pink-700">
              <Link
                href="https://www.instagram.com/stories/ysyworldwidetechnology/3189397138998492317/"
                target="_blank"
              >
                <FaInstagram />
              </Link>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer text-blue-700">
              <Link
                href="https://www.linkedin.com/feed/?trk=homepage-basic_sign-in-submit"
                target="_blank"
              >
                <FaLinkedin />
              </Link>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer text-green-600">
              <a href={whatsappUrl}>
                <FaWhatsapp />
              </a>
            </p>
          </div>
        </div>
        {/* Copyright text */}
        <div className="mb-[20px] mt-4 py-5 text-[15px] text-center">
         <span className="text-red-500 px-2">&copy;</span>True Tech Hub. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
