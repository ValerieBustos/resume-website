import clsx from "clsx";
import { Figma } from "~/media/figma";
import { GitHub } from "~/media/github";
import { LinkedIn } from "~/media/linkedin";

export function SocialIcons({ className }: { className?: string }) {
  return (
    <div
      className={clsx(
        "flex p-4 space-x-6 align-middle justify-center",
        className
      )}
    >
      <LinkedIn />
      <GitHub />
      <Figma />
    </div>
  );
}
