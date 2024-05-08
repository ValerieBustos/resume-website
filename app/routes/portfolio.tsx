import { PortfolioProject } from "~/components/portfolio-project";
import homepagePic from "~/media/homepage-pic.png";

export default function Portfolio() {
  return (
    <div className="px-16 space-y-10">
      <h1 className="text-3xl font-medium">Portfolio</h1>
      <PortfolioProject
        name="Pup Academy"
        type="Mobile"
        description="Pup Academy is a dog training app where users can find step-by-step tricks and information to train their dogs with. Inpired by my rescue dog Alaska, it is meant to be a guide for dog owners on how to teach their pets good manners, fun tricks and help them grow their bond."
        loFiPicture={homepagePic}
        hiFiPicture={homepagePic}
        wireframePicture={homepagePic}
        featuredPicture={homepagePic}
        skillsUsed={["Figma", "Adobe XD", "User Research", "Usability testing"]}
      />
    </div>
  );
}
