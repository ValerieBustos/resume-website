import clsx from "clsx";
import { Button as AriaButton } from "react-aria-components";

export interface ButtonProps {
  label: string;
  primary?: boolean;
  icon?: React.ReactNode;
}

export function Button({ label, primary, icon }: ButtonProps) {
  return (
    <AriaButton
      className={clsx(
        "rounded-full py-2 px-4 font-medium",
        primary
          ? "bg-cyan-600 text-white hover:opacity-90"
          : "bg-slate-300 text-slate-700 hover:opacity-90"
      )}
    >
      <div className="flex items-center">
        {icon} <div className="ml-1">{label}</div>
      </div>
    </AriaButton>
  );
}
