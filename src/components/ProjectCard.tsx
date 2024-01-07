import { Card, CardHeader, Image} from "@nextui-org/react";
import {Project} from "../../types.ts";

export default function ProjectCard({project, onClick, id} : {project: Project, onClick: (id:number)=>void, id: number}) {
    return (
        <Card tabIndex={0} className="aspect-[3/4] md:aspect-[4/3] cursor-pointer hover:text-primary focus:text-primary hover:outline-2 hover:outline-primary focus:outline-2 focus:outline-primary  transition-all" isFooterBlurred shadow="lg" onPress={() => onClick(id)}>
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                <p className="text-lg opacity-80 uppercase font-bold">{project.type}</p>
                <h4 className="font-medium text-2xl">{project.name}</h4>
            </CardHeader>

            <div className="relative w-full h-full bg-orange-200">
                <Image
                    removeWrapper
                    alt="Card photo"
                    className="z-0 w-full h-full object-cover"
                    src={project.src}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent"></div>
            </div>
        </Card>
    )
}