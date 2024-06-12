import { PortfolioProject } from "~/components/portfolio-project";
import loFiMirian from "~/media/mirians-website/lo-fi.png";
import hiFiMirian from "~/media/mirians-website/hi-fi.png";
import mainMirian from "~/media/mirians-website/main.png";
import mainBrochure from "~/media/atikha-brochure/main.png";
import hiFiBrochure from "~/media/atikha-brochure/hi-fi.png";
import mainWebsite from "~/media/website-main.png";

export default function Portfolio() {
  return (
    <div className="flex flex-col items-center px-8 md:px-16 my-12">
      <div className="flex justify-center py-6  mb-10">
        <h1 className="text-4xl font-medium">Portfolio</h1>
      </div>
      <PortfolioProject
        name="valeriebustos.com"
        type="Responsive"
        description="I built this site from scratch using React Aria components, TypeScript and React Remix. This website features dark mode! Feel free to try it out. It is also responsive and works on phones, tablets and desktops with various screen sizes. You can adjust the screen size in you desktop to see the design change dinamically. I worked on the design as I coded, without an existing mockup or wireframe and I keep improving it as I learn new design patterns. This site also has a strong focus on accessibility and welcomes keyboard navigation."
        featuredPicture={mainWebsite}
        skillsUsed={["Responsive Design", "TailwindCSS", "React Remix"]}
      />
      <PortfolioProject
        name="Miriannella Curls"
        type="Desktop"
        description="I designed and implemented a website for curly hair influencer Mirian Orejuela to showcase her social media, blog and online store. I consulted Mirian at every step of the process to ensure that she was satisfied with the result. I built the website in Wordpress so that Mirian could change content and add blog posts with ease."
        loFiPicture={loFiMirian}
        loFiLink="https://www.figma.com/proto/1imcZZtkvb5vwTLUptbxYC/Wireframe---Mirian's-Website?node-id=0-1&t=p4nC4djUzHoNDPiw-1"
        hiFiPicture={hiFiMirian}
        hiFiLink="https://www.figma.com/proto/1imcZZtkvb5vwTLUptbxYC/Wireframe---Mirian's-Website?node-id=27-79&t=p4nC4djUzHoNDPiw-1"
        featuredPicture={mainMirian}
        skillsUsed={["WordPress", "CSS", "Figma", "Usability Testing"]}
      />
      <PortfolioProject
        name="Atikha"
        type="Brochure"
        description="I launched Atikha, my own curly haircare line, in 2024. I designed this brochure in Figma, drawing on my knowledge of design to showcase my brand for new customers."
        featuredPicture={mainBrochure}
        hiFiLink="https://simplebooklet.com/brochureatikha"
        hiFiPicture={hiFiBrochure}
        skillsUsed={["Figma", "Graphic Design"]}
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
