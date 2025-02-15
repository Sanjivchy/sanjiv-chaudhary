import React from "react";
import Card from "../ui/card";
import Link from "next/link";

const experiences = [
  {
    id: 1,
    duration: "Dec 2021 - Present",
    company: "Young Innovations Pvt. Ltd.",
    companyUrl: "https://www.linkedin.com/company/young-innovations-pvt.-ltd./posts/?feedView=all",
    role: "Software Engineer II",
    responsibilities: [
      "Designed UI architectures, block diagrams, and component structures.",
      "Built responsive web apps using React, Next.js, Vue, and Nuxt.js.",
      "Leveraged TypeScript for type-safe development and maintainability.",
      "Implemented secure authentication and authorization flows.",
      "Integrated REST APIs, third-party services, and GSAP animations.",
      "Developed scalable state management with Redux, Vuex, and Pinia.",
      "Collaborated with cross-functional teams for smooth project execution."
    ],
  },
  {
    id: 2,
    duration: "Jan 2022 - Present",
    company: "Four Walls Innovations Pvt. Ltd",
    companyUrl: "https://www.linkedin.com/company/fwipl/?originalSubdomain=np",
    role: "Lead Frontend Developer",
    responsibilities: [
      "Developed a web and mobile app for EV charging station discovery in Nepal.",
      "Integrated Google Maps & Directions API for route planning.",
      "Built a React Native app for real-time EV charger tracking.",
      "Implemented secure authentication with access & refresh tokens."
    ],
  },
  {
    id: 3,  
    duration: "June 2021 - Dec 2021",
    company: "Young Innovations Pvt. Ltd.",
    companyUrl: "https://www.linkedin.com/company/young-innovations-pvt.-ltd./posts/?feedView=all",
    role: "Frontend Developer Intern",
    responsibilities: [
      "Developed responsive web apps with React.js and Vue.js.",
      "Implemented API integrations and reusable UI components.",
      "Collaborated with designers to translate wireframes into UI.",
      "Used Git/GitHub for version control and teamwork."
    ],
  }
];


const ExperienceItem = ({ experience }: { experience: typeof experiences[0] }) => (
  <div className="flex gap-6 text-sm max-[768px]:flex-col max-[768px]:gap-2 max-[768px]:py-4">
    <div className="min-w-fit w-[18%] opacity-80 tracking-wider experience-text">{experience.duration}</div>
    <div className="w-full flex-1">
      <p className="mb-2.5 text-foreground flex items-center gap-2 text-base tracking-wide  max-[768px]:mb-3 max-[768px]:text-sm">
        <Link
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-base ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative after:absolute after:bg-primary after:h-[1px] after:w-full after:origin-bottom-left after:scale-x-100 hover:after:origin-bottom-right hover:after:scale-x-0 after:transition-transform after:ease-in-out after:duration-300 h-fit px-0 py-0 font-medium after:bottom-[-0.1rem] mb-1 max-[768px]:text-sm"
          target="_blank"
          href={experience.companyUrl}
        >
          {experience.company}
        </Link>
        <span className="w-0.5 h-[18px] bg-white max-[768px]:h-4 opacity-80"></span>
        <span className="text-base max-[768px]:text-sm tracking-wide opacity-80">{experience.role}</span>
      </p>
      <ul className="w-full list-['-__'] text-pretty font-normal tracking-wider flex flex-col gap-2 max-[768px]:ml-4 max-[768px]:pr-4">
        {experience.responsibilities.map((task) => (
          <li key={task}>
            <strong>{task}</strong>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Experiences = () => {
  return (
    <Card title="Experiences">
      <div className="space-y-8">
        {experiences.map((exp) => (
          <ExperienceItem key={exp.id} experience={exp} />
        ))}
      </div>
    </Card>
  );
};

export default Experiences;
