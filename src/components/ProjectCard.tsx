import {Button, Card, CardFooter, CardHeader, Image, Skeleton} from "@nextui-org/react";
import {Project} from "../../types.ts";
import { useState } from "react";

export default function ProjectCard({project, onClick, id} : {project: Project, onClick: (id:number)=>void, id: number}) {
    return (
        <Card className="aspect-[3/4] md:aspect-[4/3]" isFooterBlurred shadow="lg">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                <p className="text-lg text-black/60 uppercase font-bold">{project.type}</p>
                <h4 className="text-black font-medium text-2xl">{project.name}</h4>
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
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-small text-white/80">{project.oneliner}</p>
                <Button className={`text-tiny text-white bg-black/20`} variant="flat" color="primary" radius="lg" size="sm"
                        onClick={() => onClick(id)}>
                    Explore
                </Button>
            </CardFooter>
        </Card>
    )
}