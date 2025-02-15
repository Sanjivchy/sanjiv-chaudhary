import Link from "next/link";
import Card from "../ui/card";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaReact, FaVuejs } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { BsFiletypeScss } from "react-icons/bs";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiGreensock } from "react-icons/si";
import { TbBrandOauth } from "react-icons/tb";
import { SiClerk } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { DiJqueryLogo } from "react-icons/di";
import { SiSwr } from "react-icons/si";
import { SiReactquery } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiPostman } from "react-icons/si";


 const Stacks=()=> {
  return (
    <Card title="Tech Stack">
      <ul className="flex flex-wrap gap-2 items-center text-xs w-[80%] mb-10">
        {StacksList.map((stk) => (
          <li key={stk.title}>
              <Link href={stk.link} className="flex items-center p-2 bg-secondary rounded-full">
                {stk.imagesSrc}
                <p className="ml-2 mr-1 text-sm text-neutral-300">{stk.title}</p>
              </Link>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export const StacksList = [
   // 🔹 Programming Languages
   {
      title: "JavaScript",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      imagesSrc: <IoLogoJavascript className="w-5 h-5" />,
   },
   {
      title: "TypeScript",
      link: "https://www.typescriptlang.org/",
      imagesSrc: <SiTypescript className="w-5 h-5" />,
   },
   {
      title: "HTML",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      imagesSrc: <FaHtml5 className="w-5 h-5" />,
   },
   // 🔹 Frontend Frameworks & Libraries
   {
     title: "React",
     link: "https://react.dev/",
     imagesSrc: <FaReact className="w-5 h-5" />,
   },
   {
     title: "Next.js",
     link: "https://nextjs.org/",
     imagesSrc: <SiNextdotjs className="w-5 h-5" />,
   },
   {
     title: "Vue.js",
     link: "https://vuejs.org/",
     imagesSrc: <FaVuejs className="w-5 h-5" />,
   },
   {
     title: "jQuery",
     link: "https://jquery.com/",
     imagesSrc: <DiJqueryLogo className="w-5 h-5" />,
   },
 
   // 🔹 State Management
   {
     title: "Redux",
     link: "https://redux.js.org/",
     imagesSrc: <SiRedux className="w-5 h-5" />,
   },
   {
     title: "React Query",
     link: "https://tanstack.com/query/latest",
     imagesSrc: <SiReactquery className="w-5 h-5" />,
   },
   {
     title: "SWR",
     link: "https://swr.vercel.app/",
     imagesSrc: <SiSwr className="w-5 h-5" />,
   },
 
   // 🔹 Styling & UI
   {
     title: "Tailwind CSS",
     link: "https://tailwindcss.com/",
     imagesSrc: <RiTailwindCssFill className="w-5 h-5" />,
   },
   {
     title: "Bootstrap",
     link: "https://getbootstrap.com/",
     imagesSrc: <FaBootstrap className="w-5 h-5" />,
   },
   {
     title: "SCSS",
     link: "https://sass-lang.com/",
     imagesSrc: <BsFiletypeScss className="w-5 h-5" />,
   },
  
   // 🔹 DevOps & Tools
   {
     title: "Git",
     link: "https://git-scm.com/",
     imagesSrc: <FaGitAlt className="w-5 h-5" />,
   },
   {
     title: "GitHub",
     link: "https://github.com/",
     imagesSrc: <FaGithub className="w-5 h-5" />,
   },
   {
     title: "Docker",
     link: "https://www.docker.com/",
     imagesSrc: <FaDocker className="w-5 h-5" />,
   },
 
   // 🔹 Animations & Motion
   {
     title: "Framer Motion",
     link: "https://www.framer.com/motion/",
     imagesSrc: <TbBrandFramerMotion className="w-5 h-5" />,
   },
   {
     title: "Greensock",
     link: "https://greensock.com/",
     imagesSrc: <SiGreensock className="w-5 h-5" />,
   },
 
   // 🔹 Authentication & Security
   {
     title: "OAuth",
     link: "https://oauth.net/",
     imagesSrc: <TbBrandOauth className="w-5 h-5" />,
   },
   {
     title: "Auth.js",
     link: "https://authjs.dev/",
     imagesSrc: <TbBrandOauth className="w-5 h-5" />,
   },
   {
     title: "Clerk",
     link: "https://clerk.com/",
     imagesSrc: <SiClerk className="w-5 h-5" />,
   },

   // 🔹 Other
   {
     title: "Postman",
     link: "https://www.postman.com/",
     imagesSrc: <SiPostman className="w-5 h-5" />,
   },
 ];
 

export default Stacks;
