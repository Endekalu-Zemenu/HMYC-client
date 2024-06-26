"use client";

import React from "react";
import { Link } from "react-router-dom";

import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import Login from "../buttons/LoginButton";
import RegisterButton from "../buttons/RegisterButton"
export function TypewriterEffectSmoothDemo() {

  // ነፍሱን ስለ ወዳጆቹ ከመስጠት ይልቅ ከዚህ የሚበልጥ ፍቅር ለማንም የለውም።
  const words = [
    {
      text: "ነፍሱን",
    },
    {
      text: "ስለ",
    },
    {
      text: "ወዳጆቹ",
    },
    {
      text: "ከመስጠት",
    },
    {
      text: "ይልቅ",
    },  
    {
      text: "ከዚህ",
    }, 
    {
      text: "የሚበልጥ",
    },
    {
      text: "ፍቅር",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "ለማንም",
    },
    {
      text: "የለውም።",
    }, 
  ];
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-neutral-400 dark:text-neutral-200 text-xl">
        የዮሐንስ ወንጌል 15:13
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <Login data-className="w-40 h-12 font-semibold"/>
        <RegisterButton data-className="w-40 h-12 font-semibold"/>
      </div>
    </div>
  );
}
