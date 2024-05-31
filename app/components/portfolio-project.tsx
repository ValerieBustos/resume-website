import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { Link } from "react-aria-components";
import { v4 as uuid } from "uuid";

interface PortfolioProjectProps {
  name: string;
  type: string;
  description: string;
  loFiPicture?: string;
  loFiLink?: string;
  hiFiPicture?: string;
  hiFiLink?: string;
  featuredPicture: string;
  skillsUsed: string[];
}

export function PortfolioProject(props: PortfolioProjectProps) {
  const {
    name,
    type,
    description,
    loFiPicture,
    loFiLink,
    hiFiPicture,
    hiFiLink,
    featuredPicture,
    skillsUsed,
  } = props;

  return (
    <div className="flex flex-wrap-reverse md:flex-nowrap justify-center border-2 dark:border-slate-700 rounded-md border-slate-100 mb-10">
      <div className="flex flex-col space-y-4 md:w-[60%] items-center justify-center  md:items-start  p-8">
        <div className="flex text-center md:text-start items-center space-x-4">
          <h2 className="text-2xl font-semibold">{name}</h2>
          <div className="rounded-full bg-lime-200/70 text-green-900 text-xs font-semibold px-2 py-0.5 hidden md:flex">
            <h3>{type}</h3>
          </div>
        </div>
        <div className=" text-justify md:text-start text-sm">
          <p>{description}</p>
        </div>
        {loFiPicture || hiFiPicture ? (
          <div className="flex pt-3 pb-4 flex-wrap text-sm font-semibold text-cyan-700 gap-6 justify-center md:justify-start">
            {loFiPicture ? (
              <Link
                target="_blank"
                href={loFiLink}
                className="rounded-md focus:outline-none focus:ring focus:ring-cyan-200 dark:bg-slate-700 dark:text-cyan-400"
              >
                <div className="transition ease-in-out delay-150 flex flex-col shadow-md rounded-md lg:w-40 w-36 overflow-hidden hover:-translate-y-1">
                  <img
                    aria-label="A picture of the project's low fidelity protoype"
                    src={loFiPicture}
                    className="object-cover"
                  />
                  <div className="flex items-center p-2 justify-between">
                    <h4 className="text-center">Lo-fi Prototype</h4>
                    <ChevronRightIcon className="h-4" />
                  </div>
                </div>
              </Link>
            ) : null}
            {hiFiPicture ? (
              <Link
                target="_blank"
                href={hiFiLink}
                className="rounded-md focus:outline-none focus:ring focus:ring-cyan-200 dark:bg-slate-700 dark:text-cyan-400"
              >
                <div className="transition ease-in-out delay-150 flex flex-col shadow-md rounded-md lg:w-40 w-36 overflow-hidden hover:-translate-y-1">
                  <img
                    aria-label="A picture of the project's high fidelity protoype"
                    src={hiFiPicture}
                    className="object-cover"
                  />
                  <div className="flex items-center p-2 justify-between">
                    <h4 className="text-center">Hi-fi Prototype</h4>
                    <ChevronRightIcon className="h-4" />
                  </div>
                </div>
              </Link>
            ) : null}
          </div>
        ) : null}
        <div>
          <h4 className="font-semibold mb-2 text-xs">Tools and skills used</h4>
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {skillsUsed.map((skill) => (
              <div
                key={uuid()}
                className="rounded-sm text-xs px-2 text-nowrap font-semibold bg-slate-100 text-slate-700 dark:bg-slate-600 dark:text-slate-100"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex-1 w-full hidden md:flex">
        <img
          aria-label="A features picture of the project"
          className="object-cover rounded-r-md"
          src={featuredPicture}
        />
      </div>
    </div>
  );
}
