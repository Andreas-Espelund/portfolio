import { Card, CardHeader, Image, Chip } from "@nextui-org/react";
import { Project } from "../../types.ts";

export default function ProjectCard({
  project,
  onClick,
  id,
}: {
  project: Project;
  onClick: (id: number) => void;
  id: number;
}) {
  return (
    <Card
      tabIndex={0}
      className="aspect-[3/4] md:aspect-[4/3] cursor-pointer hover:scale-[101%] focus:scale-[101%] transition-all text-black rounded-3xl"
      isFooterBlurred
      shadow="lg"
    >
      <CardHeader
        className="absolute z-10 top-1 flex justify-between flex-wrap"
        onClick={() => onClick(id)}
      >
        <h4 className="font-medium text-2xl">{project.name}</h4>
        <Chip className="text-lg capitalize font-bold bg-white/40 backdrop-blur-sm shadow-sm">
          {project.type}
        </Chip>
      </CardHeader>

      <div
        className="relative w-full h-full  rounded-md"
        onClick={() => onClick(id)}
      >
        <Image
          removeWrapper
          alt="Card photo"
          className="z-0 w-full h-full object-cover "
          src={project.src}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent"></div>
      </div>
    </Card>
  );
}
