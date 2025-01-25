import React from 'react'
import Card from '../ui/card'
import Link from 'next/link'

const Experiences = () => {
  return (
    <Card title="Experiences">
      <div>
        <div className="flex gap-6 text-sm max-[768px]:flex-col max-[768px]:gap-2 max-[768px]:py-4">
          <div className="min-w-fit opacity-80 tracking-wider experience-text">Oct, 2023 - Aug, 2024</div>
          <div className="w-full flex-1">
            <p className="mb-2.5 text-foreground flex items-center gap-2 text-base tracking-wide max-[768px]:mb-3 max-[768px]:text-sm">
              <Link className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-base ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative after:absolute after:bg-primary after:h-[1px] after:w-full after:origin-bottom-left after:scale-x-100 hover:after:origin-bottom-right hover:after:scale-x-0 after:transition-transform after:ease-in-out after:duration-300 h-fit px-0 py-0 font-medium after:bottom-[-0.1rem] mb-1 max-[768px]:text-sm" target="_blank" href="https://www.linkedin.com/company/rinventix">Rinventix Technologies</Link>
              <span className="w-0.5 h-[18px] bg-white max-[768px]:h-4 opacity-80"></span><span className="text-base max-[768px]:text-sm tracking-wide opacity-80">Frontend Developer Intern</span>
            </p>
            <ul className="w-full list-['-__'] text-pretty font-normal  tracking-wider flex flex-col gap-2 max-[768px]:ml-4 max-[768px]:pr-4">
              <li>
                <strong>Developed and led frontend projects</strong> using <strong>React.js, Next.js, and Tailwind CSS.</strong>
              </li>
                <li>Conducted code reviews and mentored interns, boosting team productivity.</li>
              <li><strong>Implemented CI/CD pipelines with GitHub Actions</strong>, reducing deployment times.</li>
                <li>Collaborated with backend developers to deliver <strong>full-stack solutions.</strong></li>
              </ul>
            </div>
        </div>
        <div className="flex pt-10 gap-6 text-sm max-[768px]:flex-col max-[768px]:gap-2 max-[768px]:py-4">
          <div className="min-w-fit opacity-80 tracking-wider experience-text">Oct, 2023 - Aug, 2024</div>
          <div className="w-full flex-1">
            <p className="mb-2.5 text-foreground flex items-center gap-2 text-base tracking-wide max-[768px]:mb-3 max-[768px]:text-sm">
              <Link className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-base ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative after:absolute after:bg-primary after:h-[1px] after:w-full after:origin-bottom-left after:scale-x-100 hover:after:origin-bottom-right hover:after:scale-x-0 after:transition-transform after:ease-in-out after:duration-300 h-fit px-0 py-0 font-medium after:bottom-[-0.1rem] mb-1 max-[768px]:text-sm" target="_blank" href="https://www.linkedin.com/company/rinventix">Rinventix Technologies</Link>
              <span className="w-0.5 h-[18px] bg-white max-[768px]:h-4 opacity-80"></span><span className="text-base max-[768px]:text-sm tracking-wide opacity-80">Frontend Developer Intern</span>
            </p>
            <ul className="w-full list-['-__'] text-pretty font-normal  tracking-wider flex flex-col gap-2 max-[768px]:ml-4 max-[768px]:pr-4">
              <li>
                <strong>Developed and led frontend projects</strong> using <strong>React.js, Next.js, and Tailwind CSS.</strong>
              </li>
                <li>Conducted code reviews and mentored interns, boosting team productivity.</li>
              <li><strong>Implemented CI/CD pipelines with GitHub Actions</strong>, reducing deployment times.</li>
                <li>Collaborated with backend developers to deliver <strong>full-stack solutions.</strong></li>
              </ul>
            </div>
        </div>
      </div>
    </Card>
  )
}

export default Experiences