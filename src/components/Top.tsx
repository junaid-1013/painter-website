"use client"
// Top.js
import Link from "next/link";
import Image from "next/image";
import mail from "../../public/mail.png";
import phone from "../../public/phone.png";
import { useEffect, useState } from 'react';

const Top = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`w-full fixed z-10 transition duration-300 bg-black ${isScrolled ? 'bg-opacity-80' : 'bg-opacity-100'}`}>
      <div className="px-2 mx-auto lg:max-w-7xl md:flex md:items-center justify-between md:px-8 flex flex-row py-2">
          {/* Mail Icon and Link */}
          <div className="flex flex-row items-center">
            <Image
              src={mail}
              alt="Mail Icon"
              width={20}
              height={20}
              className="object-contain mr-2"
            />
            <Link
              href="mailto:arif.tech79@gmail.com"
              className="font-sans text-white"
            >
              arif.tech79@gmail.com
            </Link>
          </div>
          {/* Phone Icon and Link */}
          <div className="flex flex-row items-center">
            <Image
              src={phone}
              alt="Phone Icon"
              width={18}
              height={18}
              className="object-contain mr-2"
            />
            <Link
              href="https://wa.me/971554079685"
              className="font-sans text-white"
            target="_blank"
            >
              +971554079685
            </Link>
          </div>
      </div>
    </div>
  );
};

export default Top;
