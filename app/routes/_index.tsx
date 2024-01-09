import { Button } from "../components/button";
import { HomepagePic } from "~/media/homepage-pic";
import { ArrowDownIcon, BriefcaseIcon } from "@heroicons/react/16/solid";
import { TailwindLogo } from "~/media/tailwind-logo";
import { RemixLogo } from "~/media/remix-logo";

export default function Index() {
  return (
    <>
      <div className="flex justify-between mt-8 mb-12 space-x-12 px-16">
        <div className="flex flex-col justify-center space-y-6 max-w-4xl">
          <div className="space-y-4">
            <h1 className="text-5xl font-semibold">Valerie Bustos</h1>
            <div className="flex space-x-2 text-xl font-semibold">
              <h2> Front End Developer</h2>
              <span className="text-xl font-bold text-slate-400">·</span>
              <p className="text-violet-500 font-medium">1 year coding</p>
            </div>
          </div>
          <p className="text-lg">
            I'm a software developer with a passion for design. I discovered my
            love for frontend developent during my years at the University of
            Waterloo. After graduating in 2023, I've been working on making
            great apps and components ever since. I'm always looking to improve
            my skills and expand my horizons by learning. If you're interested
            in learning more about me, feel free to take a look at my portfolio,
            resume or the hobbies page.
          </p>
          <div className="flex space-x-4 pt-4">
            <Button
              primary
              label="Download resume"
              icon={<ArrowDownIcon className="h-5 w-5" />}
            />
            <Button
              label="View portfolio"
              icon={<BriefcaseIcon className="h-5 w-5" />}
            />
          </div>
        </div>
        <HomepagePic />
      </div>
      <div className="flex justify-between items-center w-full bg-violet-400 opacity-80 py-4 px-16">
        <h3 className="font-semibold text-xl text-white">
          This website was made using
        </h3>
        <div className="flex justify-center text-lg space-x-10">
          <div className="flex flex-col items-center text-white space-y-1">
            <TailwindLogo />
            <p>Tailwindcss</p>
          </div>
          <div className="flex flex-col items-center text-white space-y-1">
            <RemixLogo />
            <p>React Remix</p>
          </div>
        </div>
      </div>
    </>
  );
}
