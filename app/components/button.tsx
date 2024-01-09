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
        "rounded-full py-2 px-4 text-white font-medium",
        primary ? "bg-cyan-500" : "bg-slate-400"
      )}
    >
      <div className="flex items-center">
        {icon} <div className="ml-1">{label}</div>
      </div>
    </AriaButton>
  );
}
