import homepagePic from "./homepage-pic.png";

export function HomepagePic() {
  return (
    <img
      className="bg-clip-content rounded-full h-96 w-96 self-center"
      src={homepagePic}
      alt="A picture of Valerie Bustos"
    />
  );
}
