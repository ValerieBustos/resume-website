import { Figma } from "~/media/figma";
import { GitHub } from "~/media/github";
import { LinkedIn } from "~/media/linkedin";

export function SocialIcons({ className }: { className?: string }) {
  return (
    <>
      <LinkedIn />
      <GitHub />
      <Figma />
    </>
  );
}
