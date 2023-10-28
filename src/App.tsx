import {projects, socials} from "./util/ProjectData.ts";
import {workExperience, education} from "./util/ExperienceData.ts";
import {Experience, Project} from "../types.ts";

import {
    Avatar,
    Button,
    Card,
    CardFooter,
    CardHeader,
    Dropdown, DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Image, Link,
    Chip,
} from "@nextui-org/react";
import {useState} from "react";
import ThemeSwitch from "./components/ThemeSwitch.tsx";
import ProjectModal from "./components/ProjectModal.tsx";
import Footer from "./components/Footer.tsx";
import {Accordion, AccordionItem} from "@nextui-org/react";



function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(projects[0]);

    const handleSelection = (index:number) => {
        console.log(index)
        setIsModalOpen(true);
        setSelectedProject(projects[index])
    }

    const PinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>

    return (
    <main className="dark:bg-zinc-800 min-h-screen grid justify-between xxl:w-2/3 m-auto">
        <div className="flex justify-end items-center gap-2 md:gap-10 p-4 md:py-8 md:px-16 bg-zinc-100 dark:bg-zinc-900 shadow-xl">
            <h1 className="md:text-4xl font-black mr-auto">ANDREAS ESPELUND</h1>
            <ThemeSwitch/>
            <Dropdown>
                <DropdownTrigger>
                    <Button color="primary" className="p-0 md:px-8 md:py-6 md:text-lg font-medium">
                        Contact
                    </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                    {socials.map((item) =>
                        <DropdownItem key={item.label}>
                            <Link className="flex items-center gap-4" href={item.href} target={"_blank"} color="foreground">
                                <i className={item.devIcon}></i>
                                {item.label}
                            </Link>
                        </DropdownItem>
                    )}
                </DropdownMenu>
            </Dropdown>
        </div>

        <div className="p-4 lg:p-16 grid gap-8">
            <section className="grid lg:grid-cols-2 gap-10">
                <div className="flex flex-col justify-center gap-4">
                    <h2 className="text-4xl font-semibold">Hey 👋</h2>
                    <p className="text-xl">
                        My name is Andreas, i'm 23 years old and currently doing my masters in informatics at UiO.
                        I would describe myself as a (aspiring) full stack developer, with a passion for back-end and low level stuff like networks and distributed systems.
                    </p>
                    <p className="text-xl">
                        I'm also a guitarist, and as a result i also like to explore electronics and analogue technology.
                        At the moment my favorite programming language is Go, but i'm always looking to learn new stuff.
                    </p>
                </div>
                <div className="aspect-square w-5/6 md:w-[365px] m-auto md:m-0 md:ml-auto">
                    <Avatar className="w-full h-full" src="/images/headshot.jpg"/>
                </div>
            </section>

            <h2 className="text-4xl font-semibold">Projects</h2>
            <section id="projects" className="grid md:grid-cols-2 xxl:grid-cols-4 gap-10">

                {projects.map((project: Project, index: number) => <Card className="aspect-[3/4] md:aspect-[4/3]" isFooterBlurred shadow="lg">
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
                        onClick={() => handleSelection(index)}>
                            Explore
                        </Button>
                    </CardFooter>
                </Card>)}
            </section>

            <h2 className="text-4xl font-semibold">Experience</h2>

            <section>
                <Accordion selectionMode={"multiple"} variant={"bordered"}>
                    {workExperience.map((exp:Experience, i: number) =>
                        <AccordionItem
                            startContent={
                                <Avatar radius={"md"} src={exp.logo} color={"success"} isBordered={exp.highlighted}/>
                            }
                            key={"wrk"+i}
                            aria-label={exp.title}
                            subtitle={exp.subtitle}
                            title={<p className={exp.highlighted ? "text-green-500 font-medium" : ""}>{exp.title}</p>}
                        >
                            <div className={"grid gap-4"}>
                                <Chip size={"lg"} variant={"bordered"} color={"primary"} startContent={<PinIcon/>}>
                                    {exp.location}
                                </Chip>

                                {exp.paragraphs.map((par: string) =>
                                    <p>{par}</p>
                                )}

                                {exp.links.map((link) =>
                                    <a className={"text-blue-400 ml-1 hover:underline"} href={link.href} target={"_blank"}>
                                        {link.text}
                                    </a>
                                )}
                            </div>

                        </AccordionItem>
                    )}
                </Accordion>

            </section>

            <h2 className="text-4xl font-semibold">Education</h2>

            <section>
                <Accordion selectionMode={"multiple"} variant={"bordered"}>
                    {education.map((exp:Experience, i: number) =>
                        <AccordionItem
                            startContent={
                                <Avatar radius={"md"} src={exp.logo} color={"success"} isBordered={exp.highlighted}/>
                            }
                            key={"edu"+i}
                            aria-label={exp.title}
                            subtitle={exp.subtitle}
                            title={<p className={exp.highlighted ? "text-green-500 font-medium" : ""}>{exp.title}</p>}
                        >
                            <div className={"grid gap-4"}>
                                <Chip size={"lg"} variant={"bordered"} color={"primary"} startContent={<PinIcon/>}>
                                    {exp.location}
                                </Chip>

                                {exp.paragraphs.map((par: string) =>
                                    <p>{par}</p>
                                )}

                                {exp.links.map((link) =>
                                    <a className={"text-blue-400 ml-1 hover:underline"} href={link.href} target={"_blank"}>
                                        {link.text}
                                    </a>
                                )}
                            </div>

                        </AccordionItem>
                    )}
                </Accordion>

            </section>
        </div>
        <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={()=>setIsModalOpen(false)}/>
        <Footer/>
    </main>
  )
}

export default App
