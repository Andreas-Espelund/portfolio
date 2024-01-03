import {projects} from "./util/ProjectData.ts";
import { Project} from "../types.ts";
import Fab from "./components/Fab.tsx"
import { Avatar } from "@nextui-org/react";
import {useState} from "react";
import ProjectModal from "./components/ProjectModal.tsx";
import Footer from "./components/Footer.tsx";

import Navbar from "./components/Navbar.tsx";

import WorkExperience from "./components/WorkExperience.tsx";
import Education from "./components/Education.tsx";
import ProjectCard from "./components/ProjectCard.tsx";
import Bio from "./components/Bio.tsx";



function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(projects[0]);

    const handleSelection = (index:number) => {
        console.log(index)
        setIsModalOpen(true);
        setSelectedProject(projects[index])
    }

    return (
    <main className="dark:bg-zinc-800 min-h-screen grid justify-between xxl:w-2/3 m-auto pt-20">
        <Navbar/>
        
        <div className="p-4 lg:p-16 grid gap-8">
            <section className="grid lg:grid-cols-2 gap-10" >
                <Bio/>
                <div className="aspect-square w-5/6 md:w-[365px] m-auto md:m-0 md:ml-auto">
                    <Avatar className="w-full h-full" src="/images/headshot.jpg"/>
                </div>
            </section>

            <h2 id="projects" className="text-4xl font-semibold">Projects</h2>
            <section className="grid md:grid-cols-2 xxl:grid-cols-4 gap-10" >
                {projects.map((project: Project, index: number) =>
                    <ProjectCard project={project} onClick={handleSelection} id={index}/>
                )}
            </section>

            <h2 id="experience" className="text-4xl font-semibold">Experience</h2>
            <section>
                <WorkExperience/>
            </section>

            <h2 id="education"  className="text-4xl font-semibold">Education</h2>
            <section>
                <Education/>
            </section>
        </div>

        <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={()=>setIsModalOpen(false)}/>
        <Fab/>
        <Footer/>
    </main>
  )
}

export default App
