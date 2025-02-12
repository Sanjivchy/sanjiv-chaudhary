import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div
      className="pb-2"
      style={{ opacity: 1, filter: "blur(0px)", willChange: "transform", transform: "none" }}
    >
      <div className="flex items-start justify-between">
        {/* Logo and Name */}
        <div className="flex items-center gap-2">
          <Link className="relative" href="/">
            {/* <img
              alt="Logo"
              draggable="false"
              loading="lazy"
              width="100"
              height="100"
              className="size-12 select-none rounded-full object-cover"
            /> */}
          </Link>
          <div>
            <p className="font-bold">Sanjiv Chaudhary</p>
            <p className="text-muted-foreground">Frontend developer</p>
          </div>
        </div>

        {/* Contact and Resume */}
        <div className="flex flex-col justify-end gap-2">
          <div className="flex flex-col items-end gap-2 md:flex-row md:items-center">
            <div className="flex items-center gap-2">
              {/* Email */}
              <a
                className="text-foreground grid size-9 place-content-center rounded-full border border-black/10 bg-accent p-2 transition-all hover:bg-accent/60 dark:border-white/10"
                href="mailto:sanjivchaudhary416@gmail.com"
                aria-label="Email"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"></path>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="grid size-9 place-content-center rounded-full border border-black/10 bg-[#0b66c2] p-2 text-white transition-all hover:bg-[#0b66c2]/60 dark:border-white/10"
                href="https://www.linkedin.com/in/sanjiv-chaudhary-10866b198/"
                aria-label="LinkedIn"
              >
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="18"
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>

              {/* GitHub */}
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="grid size-9 place-content-center rounded-full border border-black/30 bg-[#24292e] p-2 text-white transition-all hover:bg-[#24292e]/60 dark:border-white/10"
                href="https://github.com/Sanjivchy"
                aria-label="GitHub"
              >
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="18"
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>

            {/* Resume Button */}
            <a target="_blank" rel="noopener noreferrer" href="/Sanjiv-Chaudhary.pdf">
              <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group relative px-4 py-2 h-fit rounded-full bg-secondary text-foreground hover:bg-secondary/70">
                Resume
                <div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 *:size-4 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-2 group-hover:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </div>
              </button>
            </a>
          </div>

          {/* Availability */}
          <div className="flex w-fit items-center gap-2 self-end rounded-full bg-green-500/20 px-2 py-1">
            <span className="block size-2 animate-pulse rounded-full bg-green-500"></span>
            <span className="text-xs font-medium">Available for work</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
