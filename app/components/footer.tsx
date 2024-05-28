import { SocialIcons } from "./social-icons";

export default function Footer() {
  return (
    <div className="flex items-center justify-between bg-slate-900 py-6 px-16 text-xs text-slate-300">
      <p>&#169; 2024 Valerie Bustos</p>
      <SocialIcons />
    </div>
  );
}
