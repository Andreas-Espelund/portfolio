import {projects, socials} from "./util/ProjectData.ts";
import {Project } from "../types.ts";

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

    return (
    <main className="dark:bg-zinc-800 min-h-screen grid justify-between xxl:w-2/3 m-auto">
        <div className="flex justify-end items-center gap-2 md:gap-10 p-4 md:py-8 md:px-16 bg-zinc-100 dark:bg-zinc-900 shadow-xl">
            <h1 className="md:text-4xl font-black mr-auto">ANDREAS ESPELUND</h1>
            <ThemeSwitch/>
            <Dropdown>
                <DropdownTrigger>
                    <Button color="warning" className="p-0 md:px-8 md:py-6 md:text-lg">
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
                        <Button className={`text-tiny text-white bg-black/20`} variant="flat" color="default" radius="lg" size="sm"
                        onClick={() => handleSelection(index)}>
                            Explore
                        </Button>
                    </CardFooter>
                </Card>)}
            </section>

            <h2 className="text-4xl font-semibold">Experience</h2>

            <section>
                <Accordion selectionMode={"multiple"} variant={"bordered"}>
                    <AccordionItem
                        startContent={
                            <Avatar radius={"lg"} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQws92QLdwbiphCk1NUN8VKqynUJ2SQoQKqjwgBksCRp_piteWjrFlj4gWEGe8&s"}/>
                        }
                        key="1"
                        aria-label="Accordion 1"
                        title="Vipps Mobilepay"
                        subtitle={"Developer Summer Intern (2023)"}
                    >
                        <div className={"grid gap-4"}>
                            <p>
                                During the summer internship, I worked in a cross-disciplinary team with developers, designers, and product managers. We designed and developed a new product from scratch, which we called Vipps-Fundraising as a POC (Proof of Concept). The product enables fundraisers to collect recurring donations through their Vipps number in the app, making it easier for users to become donors.
                            </p>
                            <p>
                                My primary role in the team was backend development, infrastructure, and architecture. Our backend was a microservice deployed in Azure using a Kubernetes cluster with AKS. We utilized Infrastructure as Code with Bicep to set up our resources in Azure. Additionally, we employed Github Actions for CI/CD, establishing an automated testing and deployment pipeline.
                            </p>
                            <p>
                                The backend consisted of an API server written in Go and utilized OpenAPI Swagger to define our endpoints. This API provides an interface for the Vipps app to access necessary resources for donations, which we stored in an Azure SQL database.
                            </p>

                            <p>
                                <a className={"text-blue-400 ml-1 hover:underline"} href="https://vipps.no/om-oss/nyheter/studenter-forenkler-faste-giveravtaler/" target={"_blank"}>
                                    Check out the article posted about our summer project
                                </a>
                            </p>
                        </div>
                    </AccordionItem>
                    <AccordionItem
                        startContent={
                            <Avatar isBordered color={"success"} radius={"lg"} src={"https://www.uio.no/om/designmanual/profilen-i-bruk/sosiale-medier/bilder/segl_some_1500x1500.png"}/>
                        }
                        key="2"
                        aria-label="Accordion 2"
                        title={
                            <p className={"text-green-500 font-medium"} >University of Oslo (Current employer)</p>
                        }
                        subtitle={"Assignment grader (2022 - 2023)"}
                    >
                        <div className={"grid gap-4"}>
                            <p>
                                As an assignment grader, I deepened my understanding of subjects like functional programming and the use of libraries such as numpy. Reviewing diverse coding styles, I became proficient with GitHub, unit testing, and peer reviews. This role not only honed my technical skills but also refined my ability to provide clear and constructive feedback on others' code.
                            </p>
                            <p>
                                Fall semester 2022, grader in the course
                                <a className={"text-blue-400 ml-1 hover:underline"} href={"https://www.uio.no/studier/emner/matnat/ifi/IN2040/index.html"} target={"_blank"} >
                                    IN2040 – Functional programming
                                </a>
                            </p>

                            <p>
                                Fall semester 2023, grader in the course
                                <a className={"text-blue-400 ml-1 hover:underline"} href={"https://www.uio.no/studier/emner/matnat/ifi/IN3110/index.html"} target={"_blank"}>
                                    IN3110 – Problem Solving with High-Level Languages
                                </a>
                            </p>
                        </div>

                    </AccordionItem>
                    <AccordionItem
                        startContent={
                            <Avatar radius={"lg"} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHaBrqBtRD6EktyftNv5Z9CLkXA03WIrh7ZfNZh_LRmtF2lib3e3QtW-6IPw&s"} />
                        }
                        key="3"
                        aria-label="Accordion 3"
                        title="Elkjøp"
                        subtitle={"Retail sales (2020 - 2022)"}
                    >
                        While studying, I worked part-time at the Elkjøp Phonehouse Bogstadveien store. During this time, I further honed my customer communication skills and gained additional experience in sales and support.
                    </AccordionItem>

                    <AccordionItem
                        startContent={
                            <Avatar radius={"lg"} src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAk1BMVEVBR0rsZgg9RkvxaAX2aAD1aADuZgXyZwA+R0r5aQAsRE4wRU01RUw5RkwqRE80RU0hQ1DmZQ5USkWxWiuRVDdpTUGjVzGAUTuuWS3TYRu2WyjhZBSaVjR3Tz6mWC8cQ1BNSUeHUjpfS0TBXiHRYRt+UD1ISEpsTj+/XSXaYxScVjNkTESTVDXLYB67XCdyTkAAQFUr01PCAAAD5ElEQVR4nO3bi3qiOhSGYROSQDiJBzy2VqV1tNV27v/qJjjbvXcLKlSQhP7vFbieRZNP2nY6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/RL/rOU1/hnoFyaAfBU1/ilqF7/J5HLi06c9Ro3AhmZipRbb3aY0eJLHlfNgJW7tIdyUJEdxOYq/b9GepifeoRiTEkvMRbeki/TdbpDMKWx5evFbeH/5aHEdUi2S9Qd9t4f0RbKx/RiTq2Jmu3PbdHzSY26cRiWBsFod+y55WGuz+G1Etks33m5Yt0gmn/H8jqkXaya+o26pFRgkjn1iSLJZhm46dcPZlREI4fx77Lbo/oon8OiIRksxa9P0jjdQsS+6GTluOnWOkZglubWO3HdnqvuSOmIbA/LUd2erFXOTPKLg8PLYhW/21fWbEY7ZOWpCtwVKcHTGtnekqNP3YobRnnR9R1Q6fvRmerbQ7ty+M+DdbO0Yv0vE+R2reIu0kjkxeZCZSs1S2jkzO1mh7dUT1tPLnF3Nfm0eDM3f/56dVksHS1GzNj9ScRapsDcysnXBY4EE9LpJZ72ZmqzsutkXyN1tNXKQXywt582WRXCYGZuvpZXExFiML47I16FslRiSEs+k4NGuRVyI152mV9mwd+k1/7hIovRKpWTbb7alB2ep0d2VHTLN1Gz+Zk61PhysdnseSPYOyNSwSqVmcHx5NedsaForULJWtE0OyNRp9b8Rjtq4C14BFuvvvjqiOHfG+9vS/P0pEat4i5w++9tnqfZx7k1pokVwePlzNj51uXCZSsyzWWyz1zla/z24aUS2SHcaRzoukm5KRmjOktAdrjUOAdkpHapbK1qG+b1sdr3yk5iySWds3bd+2ht+J1CyVra8bTZ/WMKlkRHXscE1/W+f8Ptx63JyoRWqYrX7n+gv/4kT6R2ZaZasTrkQFR82nIbmYrV1dstXrPN9Qp2ep7x97LbKVRg+yqh/BLwSTSfPZ6vZ3Ff4EZqhsHTWarfRpcWOVXpVm60tj2erGvWquwStDSnvSSLYG3qzuBf5LZeuKenc+dqKPXsVXxEXpb+vW9/wnFz9I6rgiLlK187C50/1Rwx1fiOD24eMe2dqltdzxhaTZ2qk5W51wX9cdX8gxW/0avy179d7xxYZkpLZspdHoblfERWm2ejUcO+661/gCTwSX219utf8bEXQHxf9K4R5s1nutMlvDmNwj0ko5vvaoKFsDutVrgSdCWpN+BdlKVxazdMXkdHj7DpdUZ53l7RNqTqP3VgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/eH99RP6qSpnCHAAAAAElFTkSuQmCC"}/>
                        }
                        key="4"
                        aria-label="Accordion 4"
                        title="Power"
                        subtitle={"Retail sales (2016 - 2020)"}
                    >
                        I worked part-time at the Power store in Nordfjordeid while attending high school. After graduation, I transitioned to a full-time role as the Sales Manager for the Telecom and Computer department. While working here, I gained extensive experience in sales, customer support, after-sales service, technical support, and repairs.
                    </AccordionItem>
                </Accordion>

            </section>

            <h2 className="text-4xl font-semibold">Education</h2>

            <section>
                <Accordion selectionMode={"multiple"} variant={"bordered"}>

                    <AccordionItem
                        startContent={
                            <Avatar radius={"lg"} src={"https://www.uio.no/om/designmanual/profilen-i-bruk/sosiale-medier/bilder/segl_some_1500x1500.png"}/>
                        }
                        key="1"
                        aria-label="Accordion 1"
                        title="Informatics Programming and system architecture (Master)"
                        subtitle={"University of Oslo (2023 - 2025)"}
                    >

                        <a className={"text-blue-400 font-medium hover:underline"} href="https://www.uio.no/studier/program/informatikk-programmering-master/index.html">Link to study program</a>

                    </AccordionItem>

                    <AccordionItem
                        startContent={
                            <Avatar radius={"lg"} src={"https://www.uio.no/om/designmanual/profilen-i-bruk/sosiale-medier/bilder/segl_some_1500x1500.png"}/>
                        }
                        key="2"
                        aria-label="Accordion 2"
                        title="Informatics Programming and system architecture (Bachelor)"
                        subtitle={"University of Oslo (2020 - 2023)"}
                    >
                        <a className={"text-blue-400 font-medium hover:underline"} href="https://www.uio.no/studier/program/informatikk-programmering/index.html">Link to study program</a>
                    </AccordionItem>

                </Accordion>
            </section>
        </div>



        <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={()=>setIsModalOpen(false)}/>


        <Footer/>
    </main>
  )
}

export default App
