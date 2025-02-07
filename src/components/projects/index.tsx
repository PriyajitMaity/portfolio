import data from "@/assets/data/data";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { TextShimmer } from "../ui/text-shimmer";
import { CiLink } from "react-icons/ci";

const Projects = () => {
  return (
    <section
      id="projects"
      className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 lg:px-16 justify-self-center mt-8"
    >
      {data.projects.map(({ title, description, deployLink, githubLink, stack }) => (
        <Card className="sm:w-[350px] w-full grid dark:bg-[#0a0a0a] bg-zinc-100">
          <CardHeader>
            <CardTitle>
              <h3>{title}</h3>
            </CardTitle>
          </CardHeader>
          <CardContent className="grid">
            <p>{description}</p>
            <div className="flex mt-2 flex-wrap">
              {stack.split(",").map((ele) => (
                <TextShimmer className="p-2">{ele}</TextShimmer>
              ))}
            </div>
          </CardContent>
          <CardFooter className="self-end">
            <div className="flex w-full justify-around">
              <a href={deployLink} className="flex">
                <CiLink className="self-center" />
                <span>demo</span>
              </a>
              <a href={githubLink} className="flex">
                <CiLink className="self-center" />
                <span>github</span>
              </a>
            </div>
          </CardFooter>
        </Card>
      ))}
    </section>
  );
};

export default Projects;
