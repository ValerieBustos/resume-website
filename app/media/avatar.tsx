import avatar from "./avatar.png";

export function Avatar() {
  return (
    <img
      className="bg-clip-content rounded-full h-32 w-32 self-center"
      src={avatar}
      alt="A picture of Valerie Bustos"
    />
  );
}
