import { Button } from "../components/button";
import { HomepagePic } from "~/media/homepage-pic";
import {
  ArrowRightIcon,
  BriefcaseIcon,
  DocumentTextIcon,
} from "@heroicons/react/16/solid";
import { TailwindLogo } from "~/media/tailwind-logo";
import { RemixLogo } from "~/media/remix-logo";
import { TypeScriptLogo } from "~/media/typescript-logo";
import { UniversalAccessIcon } from "~/media/universal-access-icon";
import MiriansSite from "~/media/mirians-website/main.png";
import BrochureAtikha from "~/media/atikha-brochure/main.png";
import ValerieSite from "~/media/website-main.png";
import { Link } from "react-aria-components";
import { v4 as uuid } from "uuid";

export default function Index() {
  return (
    <div className="flex flex-col mt-16">
      <div className="flex justify-center mb-12 space-x-12 px-8 md:px-16">
        <div className="flex lg:max-w-[80%]">
          <div className="flex flex-col space-y-6 max-w-4xl">
            <div className="space-y-4 ">
              <h1 className="text-5xl font-semibold">Valerie Bustos</h1>
              <div className="flex flex-wrap gap-2 text-2xl items-center font-semibold text-nowrap">
                <h2> Frontend Developer</h2>
                <span className="text-xl font-bold hidden sm:flex text-slate-400">
                  ·
                </span>
                <p className="text-violet-600 text-2xl dark:text-violet-400 font-medium text-nowrap">
                  3 years of work experience
                </p>
              </div>
            </div>
            <p className="text-base lg:pr-10">
              I'm a software developer with a passion for design. I discovered
              my love for frontend developent during my years as a student at
              the University of Waterloo, and I've been making great apps and
              components ever since. I'm always working to learn and improve my
              skills. My background as an Ecuadorian living in Canada has
              allowed me to empathize with a diverse range of users and has
              driven me to advocate for inclusivity in UX design.
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
                  href="/valerie-bustos-resume.pdf"
                  newPage
                />
              </div>
            </div>
          </div>
          <HomepagePic />
        </div>
      </div>
      <div className="flex flex-col flex-wrap justify-between w-full space-y-4 border-y-2 border-violet-300 dark:border-violet-900 py-8  bg-gradient dark:bg-gradientdark">
        <div className="flex justify-center sm:w-full">
          <h3 className="font-semibold text-lg text-center">
            This site was designed and built with
          </h3>
        </div>
        <div className="inline-grid sm:grid-cols-2 md:grid-cols-4 grid-cols-1 gap-y-4 justify-items-center md:px-24 px-10 text-xl">
          <div className="flex text-lg h-full justify-center items-center space-x-3 m-2">
            <TailwindLogo />
            <p>TailwindCSS</p>
          </div>
          <div className="flex text-lg h-full justify-center items-center space-x-3 m-2">
            <RemixLogo />
            <p>React Remix</p>
          </div>
          <div className="flex text-lg h-full justify-center items-center space-x-3 m-2">
            <TypeScriptLogo />
            <p>TypeScript</p>
          </div>
          <div className="flex text-lg h-full justify-center items-center space-x-3 m-2">
            <UniversalAccessIcon />
            <p>Accessibility</p>
          </div>
        </div>
      </div>

      <div className="flex p-8 md:p-16 text-sm">
        <div className="flex flex-col w-full">
          <div className="flex justify-start xl:justify-center">
            <h3 className="text-2xl font-bold mb-10">My Experience</h3>
          </div>
          <div className="flex justify-center">
            <div className="lg:max-w-[55rem]">
              <div>
                <div className="relative border-l-2 border-violet-200 dark:border-violet-900 pb-3  pl-6">
                  <div className="absolute w-3 h-3 bg-violet-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-violet-600 dark:bg-violet-700"></div>
                  <div className="space-y-1">
                    <h3 className="text-base font-semibold">
                      Software Developer
                    </h3>
                    <h4 className="text-sm italic">
                      Shinydocs &#183; 2022-2024
                    </h4>
                  </div>
                  <p className="mt-2 mb-4">
                    I redesigned the Activity page using TailwindCSS and React
                    Remix, developed cost-saving automated tooling using
                    Node.js, and created accessible UI library components. My
                    presentation on accessibility was awarded best talk at the
                    2024 Shinydocs Engineering Summit. I established design
                    sprint guidelines, trained the team in Figma, pioneered
                    usability testing, and contributed to QA and backend
                    development in a fast-paced start-up environment.
                  </p>
                  <div className="flex flex-wrap gap-4  mb-6">
                    {[
                      "TailwindCSS",
                      "React Remix",
                      "Storybook",
                      "TypeScript",
                    ].map((label: string) => (
                      <div
                        key={uuid()}
                        className="rounded-lg py-0.5 px-1 font-medium text-xs dark:bg-violet-950 dark:text-violet-200 bg-violet-100 text-violet-900"
                      >
                        {label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <div className="relative border-l-2 border-violet-200 pb-3  dark:border-violet-900   px-6">
                  <div className="absolute w-3 h-3 bg-violet-200 rounded-full mt-1.5 -start-1.5 border  dark:border-violet-600  border-white dark:border-gray-900 dark:bg-violet-700"></div>
                  <div className="space-y-1">
                    <h3 className="text-base font-semibold">
                      UI/UX Developer Intern
                    </h3>
                    <h4 className="text-sm italic">Autodesk &#183; 2021</h4>
                  </div>
                  <p className="mt-2 mb-4">
                    I collaborated with user experience designers to develop a
                    welcome page for the Maya application, enhancing the user
                    onboarding experience. I used React Hooks to load data from
                    the backend, connecting the frontend and backend using Qt
                    and C++.
                  </p>
                  <div className="flex flex-wrap gap-4  mb-6">
                    {["React Hooks", "Javascript", "CSS", "Teamwork"].map(
                      (label: string) => (
                        <div
                          key={uuid()}
                          className="rounded-lg py-0.5 px-1 font-medium dark:bg-violet-950 dark:text-violet-200 text-xs bg-violet-100 text-violet-900"
                        >
                          {label}
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
              <div>
                <div className="relative border-l-2 border-violet-200  dark:border-violet-900  px-6 pb-6">
                  <div className="absolute w-3 h-3 bg-violet-200 rounded-full mt-1.5 -start-1.5  dark:border-violet-600  border border-white dark:bg-violet-700"></div>
                  <div className="space-y-1">
                    <h3 className="text-base font-semibold">
                      Developer Intern
                    </h3>
                    <h4 className="text-sm italic">
                      Maplesoft &#183; 2019, 2020
                    </h4>
                  </div>
                  <p className="mt-2 mb-4">
                    In my first internship, I created custom demos of Maple for
                    various customer use cases, showcasing its features and
                    collecting feedback for continuous improvement. I also
                    presented strategies and solutions for marketing products in
                    Math and Marketing department meetings.
                  </p>
                  <p className="mt-2 mb-4">
                    In my second internship, I expanded Maplesoft's libraries
                    for atmospheric physics, statistics, and robotics. I also
                    created onboarding documentation for new members of the Math
                    department.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {["User experience", "Maple", "Communication"].map(
                      (label: string) => (
                        <div
                          key={uuid()}
                          className="rounded-lg py-0.5 px-1 text-xs  font-medium bg-violet-100 dark:bg-violet-950 dark:text-violet-200 text-violet-900"
                        >
                          {label}
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-8 md:px-16 space-y-4 mb-16">
        <div className="flex justify-start xl:justify-center">
          <h3 className="text-2xl font-bold mb-6">My Projects</h3>
        </div>
        <div className="px-8 flex justify-start xl:justify-center xl:text-center text-start">
          <p className="text-base sm:max-w-[80%]">
            Lots to do and lots to learn! I like to keep myself busy by working
            on projects to perfect my craft. My portfolio showcases the
            knowledge I have gained through coursework and on-the-job
            experience. I take pride in attention to detail and clean design.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-10 p-6">
          <img
            aria-label="A picture of Valerie Bustos' personal website displayed on a laptop"
            src={ValerieSite}
            className="sm:h-72 rounded-md"
          />
          <img
            aria-label="A picture of Mirian's website displayed on a desktop"
            src={MiriansSite}
            className="sm:h-72 rounded-md"
          />
          <img
            aria-label="A features picture of Atikha's virtual brochure project"
            src={BrochureAtikha}
            className="sm:h-72 rounded-md"
          />
        </div>
        <div className="flex justify-center">
          <Link
            href="/portfolio"
            className=" dark:bg-slate-700 focus:dark:ring-slate-600 dark:text-slate-100 inline-block items-center rounded-full py-2 px-4 font-medium text-sm flex rounded-full bg-slate-300 text-slate-700 hover:opacity-90 focus:outline-none focus:ring focus:ring-slate-200"
          >
            <div className="mr-1">Read more</div>
            <ArrowRightIcon height={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
