import Graduation from "~/media/about/valerie-class-2023.jpg";
import Curly from "~/media/about/valerie-curly.jpg";

export default function AboutMe() {
  return (
    <div className="px-8 md:px-16 pt-10 pb-16 space-y-6">
      <h1 className="text-2xl font-semibold">A little bit about me!</h1>
      <div className="text-sm flex flex-wrap md:flex-nowrap bg-violet-50 border-2 dark:bg-slate-800 dark:border-slate-700 border-violet-100 shadow-lg rounded-md">
        <div className="flex flex-col justify-center text-sm space-y-4 p-6 md:p-10">
          <h2 className="text-xl font-bold md:mb-4">Education</h2>
          <p>
            I graduated with Honours from the University of Waterloo in Spring
            of 2023. I have a degree in Pure Mathematics with a Computing minor.
            I completed six full-time internships in software development and
            also worked part-time as an undergraduate research assistant in
            fractal geometry. Even though I no longer work in pure math, my
            background helps me with problem solving and optimization when I
            code.
          </p>
          <p>
            I love learning! I explored my interest in design by taking online
            courses during my most recent job. I am currently completing the
            Google UX Design Certificate.
          </p>
          <p>
            I am also passionate about sharing knowledge. I introduced the
            design practices that I learned from my coursework to my team and
            led them through the inaugural design sprint. At the 2024 Shinydocs
            Engineering Summit, I presented a talk on accessibility which was
            chosen by my peers as the best talk of the event.
          </p>
        </div>
        <div className="flex w-full flex-0">
          <img
            aria-label="A graduation picture of Valerie Bustos"
            src={Graduation}
            className="object-cover rounded-b-md md:rounded-l-none md:rounded-e-md "
          />
        </div>
      </div>
      <div className="text-sm flex flex-wrap md:flex-nowrap bg-violet-50 justify-center border-2 dark:bg-slate-800 dark:border-slate-700  border-violet-100 shadow-lg rounded-md">
        <div className="flex flex-col justify-center text-sm space-y-4 p-6 md:p-10 rounded-l-md">
          <h2 className="text-xl font-bold md:mb-4">Hobbies</h2>
          <p>
            Whenever I'm not coding, I'm working on helping out my fellow curly
            girls! I am an Instagram content creator who focuses on teaching
            others to take care of their curls. I work every day to change the
            narrative around curly hair in my home country. This labour has
            connected me with curly enthusiasts around Latin America and allowed
            me to change the lives of many curly girls looking for support and
            resources.
          </p>
          <p>
            I launched my own haircare line in Ecuador in 2024, and I couldn't
            be more excited! We are Leaping Bunny cruelty-free certified and
            Curly Girl Method approved.
          </p>
          <p>
            I also volunteer with Olimpiada Mathematica Ecuatoriana, the
            non-profit organization responsible for running school math contests
            in Ecuador. I represented Ecuador in international math olympiads as
            a high school student, and it is important to me to give back to the
            community so that others have the same opportunities.
          </p>
        </div>
        <div className="flex w-full flex-0">
          <img
            aria-label="A picture of Valerie Bustos smiling next to another curly influencer"
            src={Curly}
            className="object-cover rounded-b-md lg:rounded-r-md lg:rounded-b-none"
          />
        </div>
      </div>
    </div>
  );
}
