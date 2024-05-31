import clsx from "clsx";
import { Button as AriaButton, Link } from "react-aria-components";

export interface ButtonProps {
  label: string;
  primary?: boolean;
  icon?: React.ReactNode;
  href?: string;
  newPage?: boolean;
}

export function Button({ label, primary, icon, href, newPage }: ButtonProps) {
  return (
    <>
      {!href ? (
        <AriaButton
          className={clsx(
            "inline-block rounded-full py-2 px-4 font-medium text-sm",
            primary
              ? "bg-cyan-600 text-white focus:dark:ring-cyan-700 hover:opacity-90 focus:outline-none focus:ring focus:ring-cyan-200"
              : "bg-slate-300 focus:dark:ring-slate-600 dark:bg-slate-700 dark:text-slate-100 text-slate-700 hover:opacity-90 focus:outline-none focus:ring focus:ring-slate-200"
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
              ? "bg-cyan-600 focus:dark:ring-cyan-500 text-white hover:opacity-90 focus:outline-none focus:ring focus:ring-cyan-200"
              : "bg-slate-300 focus:dark:ring-slate-600 dark:bg-slate-700 dark:text-slate-100 text-slate-700 hover:opacity-90 focus:outline-none focus:ring focus:ring-slate-200"
          )}
          href={href}
          target={newPage ? "_blank" : undefined}
        >
          <div className="flex items-center">
            {icon} <div className="ml-1">{label}</div>
          </div>
        </Link>
      )}
    </>
  );
}
