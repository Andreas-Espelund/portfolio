import {Button, Image, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Tooltip} from "@nextui-org/react";
import {Project} from "../../types.ts";
import {openUrlInNewTab} from "../util/helpers.tsx";
import {getIcon} from "../util/DevIcons.ts";


interface ProjectModalProps {
    project: Project
    isOpen: boolean
    onClose: () => void
}
export default function ProjectModal({project, isOpen, onClose}: ProjectModalProps){

    return(
        <Modal
            size="5xl"
            isOpen={isOpen}
            backdrop="blur"
            placement="top"
            onClose={onClose}
        >
            <ModalContent>
                <ModalHeader className="flex flex-col gap-1 text-3xl">{project.name}</ModalHeader>
                <ModalBody>

                    <Image
                        alt="Card example background"
                        className="z-0 w-full h-full object-cover h-96"
                        removeWrapper
                        src={project.src}
                    />

                    <div className="grid grid-flow-col justify-start gap-8">
                        {project.tech.map((t) => <Tooltip content={t} showArrow color="warning">
                            <Image src={getIcon(t)} className="w-8 h-8" radius="none"/>
                        </Tooltip>)}
                    </div>
                    <div className="grid gap-4">
                        <h4 className="text-xl font-semibold">What i learned</h4>
                        <ul className="grid gap-4">
                            {project.lessons.map((les) => <li>
                                {les}
                            </li>)}
                        </ul>

                        <h4 className="text-xl font-semibold">About</h4>
                        {project.description.map((par) => <p>
                                {par}
                            </p>
                        )}
                    </div>
                </ModalBody>
                <ModalFooter>

                    {project.page_url &&
                        <Button color="warning" onPress={() => openUrlInNewTab(project.page_url)} >
                            Visit Page
                        </Button>
                    }

                    <Button className="bg-black text-white dark:bg-white dark:text-black" onPress={() => openUrlInNewTab(project.github_url)}>
                        <Image
                            src="images/github.png"
                            alt="github logo"
                            className="object-contain w-6 h-6 invert dark:invert-0"
                        />
                        GitHub
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}