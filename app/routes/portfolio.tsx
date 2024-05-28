import { PortfolioProject } from "~/components/portfolio-project";
import homepagePic from "~/media/homepage-pic.png";
import loFiMirian from "~/media/mirians-website/lo-fi.png";
import hiFiMirian from "~/media/mirians-website/hi-fi.png";
import mainMirian from "~/media/mirians-website/main.png";
import mainBrochure from "~/media/atikha-brochure/main.png";
import hiFiBrochure from "~/media/atikha-brochure/hi-fi.png";

export default function Portfolio() {
  return (
    <div className="px-16 space-y-10">
      <h1 className="text-3xl font-medium">Portfolio</h1>
      <PortfolioProject
        name="Miriannella Curls"
        type="Desktop"
        description="Curly hair influencer Mirian Orejuela asked me to create a website that would showcase her social media, blog and online store catalogue. I carefully designed and implemented this website communicating with Mirian in every step of the process while making sure to include market needs such as easy WhatsApp communication and keep it in tune with Mirian's branding. This website was made in Wordpress, allowing Mirian to change the content herself and add blog posts with ease."
        loFiPicture={loFiMirian}
        loFiLink="https://www.figma.com/proto/1imcZZtkvb5vwTLUptbxYC/Wireframe---Mirian's-Website?node-id=0-1&t=p4nC4djUzHoNDPiw-1"
        hiFiPicture={hiFiMirian}
        hiFiLink="https://www.figma.com/proto/1imcZZtkvb5vwTLUptbxYC/Wireframe---Mirian's-Website?node-id=27-79&t=p4nC4djUzHoNDPiw-1"
        featuredPicture={mainMirian}
        skillsUsed={["Wordpress", "CSS", "Figma", "Usability Testing"]}
      />
      <PortfolioProject
        name="Atikha"
        type="Brochure"
        description="I launched my curly haircare line Atikha in early May. I designed a brochure using Figma to share the brand's concept, products and basic information to new customers."
        featuredPicture={mainBrochure}
        hiFiLink="https://simplebooklet.com/brochureatikha"
        hiFiPicture={hiFiBrochure}
        skillsUsed={["Figma", "Graphic design"]}
      />
      {/* <PortfolioProject
        name="Pup Academy"
        type="Mobile"
        description="Pup Academy is a dog training app where users can find step-by-step tricks and information to train their dogs with. Inpired by my rescue dog Alaska, it is meant to be a guide for dog owners on how to teach their pets good manners, fun tricks and help them grow their bond."
        loFiPicture={homepagePic}
        hiFiPicture={homepagePic}
        featuredPicture={homepagePic}
        skillsUsed={["Figma", "Adobe XD", "User Research", "Usability testing"]}
      /> */}
    </div>
  );
}
