"use client";
import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";
import Cards from "../ui/card";

export function AboutMe() {
  return (
    <Cards title="About Me">
      <div className="text-neutral-500 dark:text-neutral-400 text-base text-left mb-10">
        Frontend developer based in <span className="text-white">Nepal</span>, specializing in interactive web apps with 
        {" "}<LinkPreview
          url="https://react.dev/"
          imageSrc="/reactjs.jpg"
          className="font-bold"
        >
        React.js,
        </LinkPreview>{" "}
        <LinkPreview
           url="https://react.dev/"
          imageSrc="/reactjs.jpg"
          className="font-bold"
        >
          Next.js,
        </LinkPreview>{" "}
        <LinkPreview
              url="https://react.dev/"
          imageSrc="/reactjs.jpg"
          className="font-bold"
        >
          TypeScript,
        </LinkPreview>{" "}
        and <LinkPreview
           url="https://react.dev/"
          imageSrc="/reactjs.jpg"
          className="font-bold"
        >
          TailwindCSS.
        </LinkPreview>
      </div>
    </Cards>
  );
}
