import data from "@/assets/data/data";
import { TextLoop } from "@/components/ui/text-loop";
import pic from "@/assets/pic.jpeg";
import { TextEffect } from "../ui/text-effect";
import { GlowEffect } from "../ui/glow-effect";
import { ArrowRight } from "lucide-react";

const Info = () => {
  return (
    <section id="info" className="pb-28 pt-24 sm:pt-28 md:pt-44 flex px-6 lg:px-24">
      <div className="self-center">
        <div className=" w-28">
          <img src={pic} className="rounded-full mb-6 lg:hidden" alt="Daniel Shan Balico Graduation Picture" />
        </div>
        <div className="flex gap-2 align-center flex-wrap md:flex-nowrap ">
          <div className="lg:w-[80%] text-zinc-900 dark:text-zinc-100 self-center">
            <div>
              <div className="mb-2">
                <TextLoop>
                  <span className="font-normal sm:text-3xl ">Hi 👋</span>
                  <span className="font-semibold sm:text-3xl bg-gradient-to-r from-[#FF5F6D] via-[#ffc371] to-[#ffaf7b] inline-block text-transparent bg-clip-text">
                    I'm {data.info.name}
                  </span>
                </TextLoop>
              </div>
              <div className="mt-8  dark:text-zinc-300 text-base sm:font-medium lg:w-[87%] leading-7">
                <p className="text-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">
                  {data.info.role}
                </p>
                <TextEffect per="char" preset="fade" className="mt-4">
                  {data.info.description}
                </TextEffect>
              </div>
            </div>
            <div className="flex justify-start gap-6 mt-6">
              <div className="relative ">
                <GlowEffect
                  colors={["#FF5733", "#33FF57", "#3357FF", "#F1C40F"]}
                  mode="colorShift"
                  blur="soft"
                  duration={3}
                  scale={1}
                />
                <a
                  href="#projects"
                  className="relative inline-flex items-center gap-1 rounded-md bg-zinc-200 text-zinc-900 dark:bg-zinc-950 px-4 py-3 text-sm dark:text-zinc-50 outline outline-1 outline-red-500 dark:outline-[#fff2f21f]"
                >
                  projects <ArrowRight className="h-4 w-4 ml-2" />
                </a>
              </div>
              <div className="relative">
                <GlowEffect
                  colors={["#FF5733", "#33FF57", "#3357FF", "#F1C40F"]}
                  mode="colorShift"
                  blur="soft"
                  duration={3}
                  scale={1}
                />
                <a
                  href="#contact"
                  className="relative inline-flex items-center gap-1 rounded-md bg-zinc-200 text-zinc-900 dark:bg-zinc-950 px-4 py-3 text-sm dark:text-zinc-50 outline-red-500 outline outline-1 dark:outline-[#fff2f21f]"
                >
                  contact <ArrowRight className="h-4 w-4 ml-2" />
                </a>
              </div>
            </div>
          </div>
          <div className="hidden lg:block w-1/2 self-center">
            <img className="rounded-[10%] w-[380px] transform rotate-3 bg-transparent" src={pic} alt="profile pic" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
