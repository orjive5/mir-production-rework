import { projectsList } from "@/constants/projectsList";
import Project from "../project";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";

const Projects = () => {

  return (
    <section
      className="flex flex-col md:flex-row md:gap-10 relative top-[50px] bg-border rounded-t-[50px] px-10 md:px-20 lg:px-40 2xl:px-80 pt-16 pb-20 md:pt-20 md:pb-28"
    >
      <div id="projects" className="absolute top-[-120px]"></div>
      <h1 className="text-2xl md:text-3xl text-center md:text-left md:min-w-[200px] lg:min-w-[300px] 2xl:min-w-[400px] font-bold tracking-wide music-artists music-gradient pb-10">
        PROJECTS
      </h1>
      <ScrollArea className="h-[500px] rounded-md pr-4">
        <ul className="flex flex-col gap-10 text-lg md:text-2xl leading-normal pb-10">
          {projectsList.map(project => (
            <li key={project.title}>
              <Project
                title={project.title}
                description={project.description}
                year={project.year}
                src={project.src}
                alt={project.alt}
                linkTo={project.linkTo}
              />
              <Separator />
            </li>
          ))}
        </ul>
      </ScrollArea>
    </section>
  );
};

export default Projects;
