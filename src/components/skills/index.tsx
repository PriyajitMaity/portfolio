import { FaCss3, FaHtml5, FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { BiLogoTypescript } from "react-icons/bi";
import {
  SiExpress,
  SiRedux,
  SiReduxsaga,
  SiTailwindcss,
  SiNetlify,
  SiVercel,
  SiPostman,
  SiMongodb,
} from "react-icons/si";
import { BsFiletypeScss } from "react-icons/bs";

const Skills = () => {
  return (
    <section className="lg:mx-20 mx-4 ">
      <h1 className="mt-10 text-center text-4xl font-bold">Technology I use</h1>
      <div className="flex flex-wrap gap-6 bg justify-center mt-8">
        <span className="detail duration-200 transition-translate hover:-translate-y-1.5">
          <FaHtml5 className="text-2xl" />
          HTML
        </span>
        <span className="detail duration-200 transition-translate hover:-translate-y-1.5">
          <FaCss3 className="text-2xl" />
          CSS
        </span>
        <span className="detail duration-200 transition-translate hover:-translate-y-1.5">
          <IoLogoJavascript className="text-2xl" />
          JavaScript
        </span>
        <span className="detail duration-200 transition-translate hover:-translate-y-1.5">
          <BiLogoTypescript className="text-2xl" />
          TypeScript
        </span>
        <span className="detail duration-200 transition-translate hover:-translate-y-1.5">
          <FaReact className="text-2xl" />
          React
        </span>
        <span className="detail duration-200 transition-translate hover:-translate-y-1.5">
          <SiExpress className="text-2xl" />
          Express
        </span>
        <span className="detail duration-200 transition-translate hover:-translate-y-1.5">
          <FaNodeJs className="text-2xl" />
          NodeJs
        </span>
        <span className="detail duration-200 transition-translate hover:-translate-y-1.5">
          <SiRedux className="text-2xl" />
          Redux
        </span>
        <span className="detail duration-200 transition-translate hover:-translate-y-1.5">
          <SiReduxsaga className="text-2xl" />
          Redux-rtk
        </span>
        <span className="detail duration-200 transition-translate hover:-translate-y-1.5">
          <SiTailwindcss className="text-2xl" />
          Tailwind
        </span>
        <span className="detail duration-200 transition-translate hover:-translate-y-1.5">
          <BsFiletypeScss className="text-2xl" />
          Scss
        </span>
        <span className="detail duration-200 transition-translate hover:-translate-y-1.5">
          <FaGitAlt className="text-2xl" />
          Git
        </span>
        <span className="detail duration-200 transition-translate hover:-translate-y-1.5">
          <FaGithub className="text-2xl" />
          Github
        </span>
        <span className="detail duration-200 transition-translate hover:-translate-y-1.5">
          <SiNetlify className="text-2xl" />
          Netlify
        </span>
        <span className="detail duration-200 transition-translate hover:-translate-y-1.5">
          <SiVercel className="text-2xl" />
          Vercel
        </span>
        <span className="detail duration-200 transition-translate hover:-translate-y-1.5">
          <SiPostman className="text-2xl" />
          Postman
        </span>
        <span className="detail duration-200 transition-translate hover:-translate-y-1.5">
          <SiMongodb className="text-2xl" />
          MongoDB
        </span>
      </div>
    </section>
  );
};

export default Skills;
