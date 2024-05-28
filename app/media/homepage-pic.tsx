import homepagePic from "./homepage-pic.png";

export function HomepagePic() {
  return (
    <img
      className="hidden lg:block bg-clip-content rounded-full h-72 w-72 self-center"
      src={homepagePic}
      alt="A picture of Valerie Bustos"
    />
  );
}
