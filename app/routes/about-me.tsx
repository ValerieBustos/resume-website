import Graduation from "~/media/about/valerie-class-2023.jpg";
import Curly from "~/media/about/valerie-curly.jpg";
import Macaw from "~/media/about/valerie-macaw.png";

export default function AboutMe() {
  return (
    <div className="px-16 pt-10 pb-16 space-y-6">
      <h1 className="text-2xl font-semibold">A little bit about me!</h1>
      <div className="text-sm space-y-6 flex bg-violet-50 border-2 border-violet-100 shadow-lg rounded-md">
        <img src={Graduation} className="w-[30%] rounded-l-md" />
        <div className="text-sm space-y-4 p-10">
          <h2 className="text-lg font-bold mb-4">Education</h2>
          <p>
            I graduated with Honours from the University of Waterloo in Spring
            of 2023. I have a degree in Pure Mathematics and a Computing minor.
            Even though I did not end up working in mathematics, it has been a
            great tool for helping me with problem solving and optimization when
            I code.
          </p>
          <p>
            I love learning, which is why I chose to explore my passion for
            design while working on my previous role. I am currently working on
            completing the Google UX Design Certificate. Taking these courses
            taught me different design practices. I proposed to follow these
            practices my previous company and I led the team during the first
            design sprint.
          </p>
          <p>
            I am also passionate about sharing knowledge, I use every
            opportunnity to mentor and knowledge at work. I presented a talk
            about what I've learned about Accessibility in the 2024 Shinydocs
            Engineering Summit, which was voted best talk of the event.
          </p>
        </div>
      </div>
      <div className="text-sm flex bg-violet-50 items-center  border-2 border-violet-100 shadow-lg rounded-md">
        <div className="text-sm space-y-4 p-10 rounded-l-md">
          <h2 className="text-lg font-bold mb-4">Hobbies</h2>
          <p>
            Whenever I'm not coding I'm working on helping other fellow curly
            girls out! I am an Instagram content creator who focuses on teaching
            others how to take care of their curls. I work every day to change
            the narrative around curly hair in my home country. This labor has
            helped me connect with lots of curly enthusiasts around Latin
            America and change the lives of many curly girls looking for support
            and resources.
          </p>
          <p>
            I just launched my own haircare line in Ecuador this year and I
            couldn't be more excited! We're Leaping Bunny certified and Curly
            Girl Method approved.
          </p>
        </div>
        <img src={Curly} className="w-1/3" />
      </div>
    </div>
  );
}
