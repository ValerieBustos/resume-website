import { GitHub } from "~/media/github";
import { LinkedIn } from "~/media/linkedin";

export function SocialIcons() {
  return (
    <div className="flex space-x-3">
      <LinkedIn />
      <GitHub />
    </div>
  );
}
