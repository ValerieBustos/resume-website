import Gallery from "~/components/gallery";
import homepagePic from "~/media/homepage-pic.png";

const slides = [
  { src: homepagePic, alt: "" },
  { src: homepagePic, alt: "" },
  { src: homepagePic, alt: "" },
];

export default function Portfolio() {
  return (
    <div className="px-16 space-y-10">
      <h1 className="text-3xl font-medium">Portfolio</h1>
      <div className="space-y-4">
        <div className="flex items-center space-x-4 w-full">
          <h2 className="text-3xl font-semibold">Dog training app</h2>
          <div className="rounded-full bg-lime-200/70 text-green-900 text-sm font-semibold px-3 py-1">
            <h3>Mobile</h3>
          </div>
        </div>
        <p>
          When I adopted my dog Alaska, there were many resources online on
          tricks to practice and training information. It became overwhelming to
          find what to teach her and at what point of our journey together. I
          tried many dog training apps but none had the functionalities I was
          looking for. This inspired the Dog training app project. It is meant
          to be a companion for dog owners to teach their pets tricks and help
          them grow their relationship.
        </p>
        <Gallery slides={slides} />
      </div>
    </div>
  );
}
