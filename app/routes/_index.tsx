import { Button } from "../components/button";
import { HomepagePic } from "~/media/homepage-pic";
import {
  ArrowDownIcon,
  BriefcaseIcon,
  UserGroupIcon,
} from "@heroicons/react/16/solid";
import { TailwindLogo } from "~/media/tailwind-logo";
import { RemixLogo } from "~/media/remix-logo";
import { TypeScriptLogo } from "~/media/typescript-logo";
import { UniversalAccessIcon } from "~/media/universal-access-icon";

export default function Index() {
  return (
    <>
      <div className="flex justify-between mt-8 mb-12 space-x-12 px-16">
        <div className="flex flex-col space-y-6 max-w-4xl">
          <div className="space-y-4">
            <h1 className="text-5xl font-semibold">Valerie Bustos</h1>
            <div className="flex space-x-2 text-xl font-semibold">
              <h2> Front End Developer</h2>
              <span className="text-xl font-bold text-slate-400">·</span>
              <p className="text-violet-600 dark:text-violet-400 font-medium">
                2 years coding
              </p>
            </div>
          </div>
          <p className="text-sm">
            I'm a software developer with a passion for design. I discovered my
            love for frontend developent during my years at the University of
            Waterloo. After graduating in 2023, I've been working on making
            great apps and components ever since. I'm always looking to improve
            my skills and expand my horizons by learning. If you're interested
            in learning more about me, feel free to take a look at my portfolio,
            resume or the hobbies page.
          </p>
          <div className="flex flex-wrap gap-3">
            <div>
              <Button
                primary
                label="View portfolio"
                icon={<BriefcaseIcon className="h-5 w-5" />}
                href="/portfolio"
              />
            </div>
            <div>
              <Button
                label="Download resume"
                icon={<ArrowDownIcon className="h-5 w-5" />}
              />
            </div>
          </div>
        </div>
        <HomepagePic />
      </div>
      <div className="flex flex-col flex-wrap justify-between w-full space-y-4 border-y-2 border-violet-300 dark:border-violet-400 py-8  bg-gradient dark:text-slate-800">
        <div className="flex justify-center sm:w-full">
          <h3 className="font-semibold text-lg text-center">
            This site was designed and built with
          </h3>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 grid-cols-1 gap-y-4 justify-items-center md:px-24 px-10 text-xl">
          <div className="flex text-base h-full justify-center items-center space-x-3 m-2">
            <TailwindLogo />
            <p>TailwindCSS</p>
          </div>
          <div className="flex text-base h-full justify-center items-center space-x-3 m-2">
            <RemixLogo />
            <p>React Remix</p>
          </div>
          <div className="flex text-base h-full justify-center items-center space-x-3 m-2">
            <TypeScriptLogo />
            <p>TypeScript</p>
          </div>
          <div className="flex text-base h-full justify-center items-center space-x-3 m-2">
            <UniversalAccessIcon />
            <p>Accessibility</p>
          </div>
        </div>
      </div>
    </>
  );
}
