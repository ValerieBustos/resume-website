import { Button } from "../components/button";
import { HomepagePic } from "~/media/homepage-pic";
import {
  ArrowDownIcon,
  ArrowRightIcon,
  BriefcaseIcon,
  DocumentTextIcon,
  PuzzlePieceIcon,
} from "@heroicons/react/16/solid";
import { TailwindLogo } from "~/media/tailwind-logo";
import { RemixLogo } from "~/media/remix-logo";
import { TypeScriptLogo } from "~/media/typescript-logo";
import { UniversalAccessIcon } from "~/media/universal-access-icon";
import MiriansSite from "~/media/mirians-website/main.png";
import BrochureAtikha from "~/media/atikha-brochure/main.png";
import { Button as AriaButton, Link } from "react-aria-components";
import { ThemeToggle } from "~/components/theme-toggle";

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
            my skills and expand my horizons by learning.
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
                label="View resume"
                icon={<DocumentTextIcon className="h-5 w-5" />}
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

      <div className="flex p-16 text-sm">
        <div>
          <h3 className="text-2xl font-bold mb-6">My Experience</h3>
          <p className="mb-3">
            Even though I have a cumulative 2 years of experience, I've been
            coding for 4 years. During university I had the opportunity to
            intern at Autodesk, Maplesoft and Shinydocs. I started a full-time
            role at Shinydocs after graduating last year.
          </p>
          <div className="pl-6">
            <p className="mb-3 italic">Some of my skill highlights are:</p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <PuzzlePieceIcon
                  aria-hidden
                  height={16}
                  className="text-violet-400"
                />
                <p>
                  Developing features using{" "}
                  <span className="font-semibold">TailwindCSS</span> and{" "}
                  <span className="font-semibold">React Remix</span>
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <PuzzlePieceIcon
                  aria-hidden
                  height={16}
                  className="text-violet-400"
                />
                <p>
                  Developing and documenting UI components using{" "}
                  <span className="font-semibold">Storybook</span>
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <PuzzlePieceIcon
                  aria-hidden
                  height={16}
                  className="text-violet-400"
                />
                <p>
                  Designing mockups and prototypes using{" "}
                  <span className="font-semibold">Figma</span>
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <PuzzlePieceIcon
                  aria-hidden
                  height={16}
                  className="text-violet-400"
                />
                <p>
                  Establishing guidelines for design sprints and leading{" "}
                  <span className="font-semibold">Usability Testing</span>
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <PuzzlePieceIcon
                  aria-hidden
                  height={16}
                  className="text-violet-400"
                />
                <p>
                  Reviewing pull requests and using{" "}
                  <span className="font-semibold">Git</span> as source control
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-16 space-y-4 mb-16">
        <h3 className="text-2xl font-bold mb-6 ">My Projects</h3>
        <p className="text-sm">
          Lots to do and lots to learn! I like to keep myself busy by practicing
          skills I learn on the job and applying course knowledge on personal
          projects to perfect my craft. I am very proud of trying to get every
          detail right and making designs as clean as possible.
        </p>
        <div className="flex flex-wrap gap-10 p-6">
          <img src={MiriansSite} className="h-72 rounded-md" />
          <img src={BrochureAtikha} className="h-72 rounded-md" />
          <div className="flex items-center">
            <Link
              href="/portfolio"
              className=" dark:bg-slate-700 dark:text-slate-100 inline-block items-center rounded-full py-2 px-4 font-medium text-sm flex rounded-full bg-slate-300 text-slate-700 hover:opacity-90 focus:outline-none focus:ring focus:ring-slate-200"
            >
              <div className="mr-1">Read more</div>
              <ArrowRightIcon height={16} />
            </Link>
          </div>
        </div>
        <div>
          <p className="text-sm">
            And... This website! Feel free to try out{" "}
            <span className="font-semibold">Dark mode</span> and play with the
            size to see the responsiveness.
          </p>
          <div className="flex justify-center mt-8">
            <ThemeToggle size="lg" showLabel />
          </div>
        </div>
      </div>
    </>
  );
}
