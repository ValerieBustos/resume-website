import Carousel from "~/components/carousel";
import homepagePic from "~/media/homepage-pic.png";
import puppies from "~/media/puppies.jpg";

const slides = [
  { src: puppies, alt: "" },
  { src: homepagePic, alt: "" },
];

export default function Portfolio() {
  return (
    <div className="px-16 space-y-10">
      <h1 className="text-3xl font-medium">Portfolio</h1>
      <div>
        <h2 className="text-2xl font-semibold">Dog training app</h2>
        <p>Hello</p>
        <div className="w-[60%]">
          <Carousel slides={slides} />
        </div>
      </div>
    </div>
  );
}
