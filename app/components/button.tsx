import clsx from "clsx";
import { Button as AriaButton, Link } from "react-aria-components";

export interface ButtonProps {
  label: string;
  primary?: boolean;
  icon?: React.ReactNode;
  href?: string;
}

export function Button({ label, primary, icon, href }: ButtonProps) {
  return (
    <>
      {!href ? (
        <AriaButton
          className={clsx(
            "inline-block rounded-full py-2 px-4 font-medium text-sm",
            primary
              ? "bg-cyan-600 text-white hover:opacity-90 focus:outline-none focus:ring focus:ring-cyan-200"
              : "bg-slate-300 text-slate-700 hover:opacity-90 focus:outline-none focus:ring focus:ring-slate-200"
          )}
        >
          <div className="flex items-center">
            {icon} <div className="ml-1">{label}</div>
          </div>
        </AriaButton>
      ) : (
        <Link
          className={clsx(
            "inline-block rounded-full py-2 px-4 font-medium text-sm",
            primary
              ? "bg-cyan-600 text-white hover:opacity-90 focus:outline-none focus:ring focus:ring-cyan-200"
              : "bg-slate-300 text-slate-700 hover:opacity-90 focus:outline-none focus:ring focus:ring-slate-200"
          )}
          href={href}
        >
          <div className="flex items-center">
            {icon} <div className="ml-1">{label}</div>
          </div>
        </Link>
      )}
    </>
  );
}
