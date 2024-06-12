import { SocialIcons } from "./social-icons";

export default function Footer() {
  return (
    <div className="flex justify-center bg-slate-900 py-6 px-16 text-xs text-slate-300">
      <div className="flex w-full items-center justify-between max-w-[80rem]">
        <p>&#169; 2024 Valerie Bustos</p>
        <SocialIcons />
      </div>
    </div>
  );
}
