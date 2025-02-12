import { AboutMe } from "@/components/modules/AboutMeDescriptions";
import Experiences from "@/components/modules/Experiences";
// import Projects from "@/components/modules/Projects";
import Stacks from "@/components/modules/Stacks";
// import { SplashCursor } from "@/components/ui/splash"
export default function Home() {
  return (
    <section className="min-h-screen">
      {/* <SplashCursor /> */}
      <div className="pt-20 space-y-14">
        <AboutMe />
        <Experiences />
        <Stacks />
      </div>
      <div className="text-center my-20">
        Still working on it, stay tuned 👀
      </div>
    </section>
  );
}



// https://rafaelamaral.dev/
// https://aymanechakar.vercel.app/
// https://alkaison.vercel.app/
// https://www.duyle.dev/