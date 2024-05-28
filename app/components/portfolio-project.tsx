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
    <div className="flex lg:space-x-16 flex-wrap-reverse lg:flex-nowrap items-center border-y-2 border-slate-100">
      <div className="flex flex-col space-y-4 w-3/4">
        <div className="flex items-center space-x-4 mt-4">
          <h2 className="text-2xl font-semibold">{name}</h2>
          <div className="rounded-full bg-lime-200/70 text-green-900 text-sm font-semibold px-3 py-1">
            <h3>{type}</h3>
          </div>
        </div>
        <div className="text-xs">
          <p>{description}</p>
        </div>
        <div className="flex pt-3 pb-4 flex-wrap text-sm font-semibold text-cyan-700">
          {loFiPicture ? (
            <div className="transition ease-in-out delay-150 flex flex-col shadow-md rounded-md lg:w-40 w-36 overflow-hidden mr-6 hover:-translate-y-1">
              <Link target="_blank" href={loFiLink} className="outline-none">
                <img src={loFiPicture} className="object-cover" />
                <div className="flex items-center p-2 justify-between">
                  <h4 className="text-center">Lo-fi Prototype</h4>
                  <ChevronRightIcon className="h-4" />
                </div>
              </Link>
            </div>
          ) : null}
          {hiFiPicture ? (
            <div className="transition ease-in-out delay-150 flex flex-col shadow-md rounded-md lg:w-40 w-36 overflow-hidden mr-6 hover:-translate-y-1">
              <Link target="_blank" href={hiFiLink} className="outline-none">
                <img src={hiFiPicture} className="object-cover" />
                <div className="flex items-center p-2 justify-between">
                  <h4 className="text-center">Hi-fi Prototype</h4>
                  <ChevronRightIcon className="h-4" />
                </div>
              </Link>
            </div>
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
      <div className="w-1/2 mb-6 lg:mb-0">
        <img src={featuredPicture} />
      </div>
    </div>
  );
}
