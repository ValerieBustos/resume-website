import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { Link } from "react-aria-components";

interface PortfolioProjectProps {
  name: string;
  type: "Desktop" | "Mobile" | "Brochure";
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
    <div className="flex lg:space-x-16 flex-wrap-reverse md:flex-nowrap items-center justify-center border-2 py-2 px-2 lg:py-6 lg:px-8 rounded-md border-slate-100 mb-10">
      <div className="flex flex-col space-y-4 w-3/4 items-center md:items-start text-center md:text-start">
        <div className="flex items-center space-x-4">
          <h2 className="text-2xl font-semibold">{name}</h2>
          <div className="rounded-full bg-lime-200/70 text-green-900 text-sm font-semibold px-3 py-1 hidden md:flex">
            <h3>{type}</h3>
          </div>
        </div>
        <div className="text-xs">
          <p>{description}</p>
        </div>
        <div className="flex pt-3 pb-4 flex-wrap text-sm font-semibold text-cyan-700 space-x-6">
          {loFiPicture ? (
            <Link
              target="_blank"
              href={loFiLink}
              className="rounded-md focus:outline-none focus:ring focus:ring-cyan-200"
            >
              <div className="transition ease-in-out delay-150 flex flex-col shadow-md rounded-md lg:w-40 w-36 overflow-hidden hover:-translate-y-1">
                <img src={loFiPicture} className="object-cover" />
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
              className="rounded-md focus:outline-none focus:ring focus:ring-cyan-200"
            >
              <div className="transition ease-in-out delay-150 flex flex-col shadow-md rounded-md lg:w-40 w-36 overflow-hidden hover:-translate-y-1">
                <img src={hiFiPicture} className="object-cover" />
                <div className="flex items-center p-2 justify-between">
                  <h4 className="text-center">Hi-fi Prototype</h4>
                  <ChevronRightIcon className="h-4" />
                </div>
              </div>
            </Link>
          ) : null}
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-xs">Tools and skills used</h4>
          <div className="flex space-x-2 mb-4">
            {skillsUsed.map((skill) => (
              <div className="rounded-sm text-xs px-2 font-semibold bg-slate-100 text-slate-700">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
      <img
        className="w-[40%] rounded-md mb-4 lg:mb-0 hidden md:inline-block"
        src={featuredPicture}
      />
    </div>
  );
}
