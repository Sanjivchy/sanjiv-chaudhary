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


 const Stacks=()=> {
  return (
    <Card title="Tech Stack">
      <ul className="flex flex-wrap gap-2 items-center w-[80%]">
        {StacksList.map((stk) => (
          <li key={stk.title}>
              <Link href={stk.link} className="flex items-center p-2 bg-neutral-950/30 rounded-xl">
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
  {
    title: "Javascript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    imagesSrc:  <IoLogoJavascript className="w-6 h-6" />,
  },
 {
    title: "Typescript",
    link: "https://www.typescriptlang.org/",
    imagesSrc:  <SiTypescript className="w-6 h-6" />,
 },
 {
    title: "React",
    link: "https://react.dev/",
    imagesSrc:  <FaReact className="w-6 h-6" />,
 },
 {
    title: "Next.js",
    link: "https://nextjs.org/",
    imagesSrc:  <SiNextdotjs className="w-6 h-6" />,
 },
 {
    title: "Vue.js",
    link: "https://vuejs.org/",
    imagesSrc:  <FaVuejs className="w-6 h-6" />,
 },
 {
    title: "Tailwind CSS",
    link: "https://tailwindcss.com/",
    imagesSrc:  <RiTailwindCssFill className="w-6 h-6" />,
 },
 {
    title: "SCSS",
    link: "https://sass-lang.com/",
    imagesSrc:  <BsFiletypeScss className="w-6 h-6" />,
 },
 {
    title: "Git",
    link: "https://git-scm.com/",
    imagesSrc:  <FaGitAlt className="w-6 h-6" />,
 },
 {
    title: "Github",
    link: "https://github.com/",
    imagesSrc:  <FaGithub className="w-6 h-6" />,
 },
 {
    title: "Docker",
    link: "https://www.docker.com/",
    imagesSrc:  <FaDocker className="w-6 h-6" />,
 },
 {
    title: "Framer Motion",
    link: "https://www.framer.com/motion/",
    imagesSrc:  <TbBrandFramerMotion className="w-6 h-6" />,
 },
 {
    title: "Greensock",
    link: "https://greensock.com/",
    imagesSrc:  <SiGreensock className="w-6 h-6" />,
 },{
    title: "OAuth",
    link: "https://oauth.net/",
    imagesSrc:  <TbBrandOauth className="w-6 h-6" />,
 },
 {
    title: "Clerk",
    link: "https://clerk.com/",
    imagesSrc:  <SiClerk className="w-6 h-6" />,
 }
];

export default Stacks;
