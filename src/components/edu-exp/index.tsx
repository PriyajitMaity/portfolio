import { FaLandmark } from "react-icons/fa";
import { FaBuildingUser } from "react-icons/fa6";
import pic2 from "../../assets/pic2.jpg";
import resume from "../..//assets/resume.pdf";
import { GlowEffect } from "../ui/glow-effect";
import { ArrowDown } from "lucide-react";

const Details = () => {
  return (
    <section id="details" className="mt-20 mx-4 lg:mx-20 flex flex-col md:flex-row md:gap-4 gap-2">
      <div id="education" className="w-full md:w-[80%]">
        <h4 className="flex text-xl mb-4 font-bold gap-2 items-center">
          <FaLandmark className="dark:text-red-800 text-red-500" />
          Education
        </h4>
        <p className="text-xs font-medium uppercase dark:text-zinc-400 text-zinc-500">2017-2021</p>

        <div className="flex gap-x-3 relative group rounded-lg mt-2">
          <div className="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-zinc-200 dark:after:bg-zinc-700 dark:group-hover:after:bg-zinc-600">
            <div className="relative z-10 size-7 flex justify-center items-center">
              <div className="size-2 rounded-full bg-white border-2 border-zinc-300 group-hover:border-zinc-600 dark:bg-zinc-800 dark:border-zinc-600 dark:group-hover:border-zinc-600"></div>
            </div>
          </div>
          <div className="grow p-2 pb-8">
            <h3 className="flex items-center gap-x-2 font-semibold">
              <img className="w-9 h-9 rounded-full" src={pic2} alt="college logo" />
              <div className="flex flex-col leading-5 mt-2">
                Saroj Mohan Institute of Technology
                <p className="text-xs font-normal">Bachelor of Technology</p>
              </div>
            </h3>
          </div>
        </div>
        <div className="flex mt-6">
          <div className="relative">
            <GlowEffect
              className=""
              colors={["#0894FF", "#C959DD", "#FF2E54", "#FF9004"]}
              mode="colorShift"
              blur="soft"
              duration={3}
              scale={1}
            />
            <a
              href={resume}
              className="relative inline-flex items-center gap-1 rounded-md bg-zinc-200 text-zinc-900 dark:bg-zinc-950 px-4 py-3 text-sm dark:text-zinc-50 outline outline-1 outline-red-500 dark:outline-[#fff2f21f] overflow-x-hidden"
            >
              download resume <ArrowDown className="h-4 w-4 ml-2" />
            </a>
          </div>
          <div></div>
        </div>
      </div>

      <div id="experience" className="w-full mt-6 md:mt-0">
        <h4 className="flex text-xl mb-4 font-bold gap-2 items-center">
          <FaBuildingUser className="dark:text-red-800 text-red-500" /> Experince
        </h4>
        <p className="text-xs font-medium uppercase dark:text-zinc-400 text-zinc-500">apr,22-mar,23</p>

        <div className="flex gap-x-3 relative group rounded-lg mt-2">
          <div className="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-zinc-200 dark:after:bg-zinc-700 dark:group-hover:after:bg-zinc-600">
            <div className="relative z-10 size-7 flex justify-center items-center">
              <div className="size-2 rounded-full bg-white border-2 border-zinc-300 group-hover:border-zinc-600 dark:bg-zinc-800 dark:border-zinc-600 dark:group-hover:border-zinc-600"></div>
            </div>
          </div>
          <div className="grow p-2 ">
            <h3 className="flex items-center gap-x-2 font-semibold">
              <img className="w-9 h-9 rounded-full" src="" alt="office_logo" />
              <div className="flex flex-col leading-5 mt-2">
                High-Technext Engineering and Telecom Pvt. Ltd.
                <p className="text-xs font-normal">Site Engineer</p>
              </div>
            </h3>
            <ul className=" list-disc list-inside mt-4 pl-2 text-sm text-zinc-500 flex flex-col">
              <li className=" space-x-3">
                Managed the installation,maintenance, and troubleshooting of telecom equipment.
              </li>
              <li>Coordinated with cross-functional teams to oversee site inspections.</li>
              <li>Optimize signal coverage, and resolve technical issues efficiently.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
