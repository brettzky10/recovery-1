'use client'
//import { styles } from "@/utils/styles";
import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="mt-8 hidden md:visible">
      <div className="w-full mb-5 mx-5 flex justify-between items-center">
        <div>
          <Link href={"/"}>
            <h1 className="font-Inter text-xl cursor-pointer">
              <span className="text-gray-400 font-semibold">Kine</span>teck
            </h1>
          </Link>
        </div>
        <div>
          <ul className="flex items-center flex-wrap">
            <li>
              <Link
                href="/"
                className=" hover:text-pink-400 duration-200 transition px-4">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/marketplace"
                className=" hover:text-pink-400 duration-200 transition px-4"
              >
                MarketPlace
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className=" hover:text-pink-400 duration-200 transition px-4"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center text-gray-200  text-xs font-thin">
        Copyright © 2023 Kine<span className="text-gray-400">teck</span> . All Rights Reserved
      </p>
      <br />
      <br />
    </div>
  );
};

export default Footer;