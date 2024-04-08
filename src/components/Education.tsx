import {education} from "../util/ExperienceData.ts";
import {Accordion, AccordionItem, Avatar, Chip} from "@nextui-org/react";
import {Experience} from "../../types.ts";

const PinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
</svg>

export default function Education() {
    return (
        <Accordion selectionMode={"multiple"} variant={"bordered"}>
            {education.map((exp: Experience, i: number) =>
                <AccordionItem
                    startContent={
                        <Avatar radius={"md"} src={exp.logo} color={"primary"} isBordered={exp.highlighted}/>
                    }
                    aria-label={exp.title}
                    subtitle={
                        <div>
                            <p className={"text-sm"}>{exp.subtitle}</p>
                            <p className={"text-xs"}>{exp.period}</p>
                        </div>
                    }
                    key={"edu"+i}
                    title={<p className={exp.highlighted ? "text-primary font-medium" : ""}>{exp.title}</p>}
                >
                    <div className={"grid gap-4"}>
                        <Chip size={"lg"} variant={"flat"} color={"primary"} startContent={<PinIcon/>}>
                            {exp.location}
                        </Chip>

                        {exp.paragraphs.map((par: string, i:number) =>
                            <p key={exp.title + i}>{par}</p>
                        )}

                        {exp.links.map((link, i:number) =>
                            <a key={link.text + i} className={"text-blue-400 ml-1 hover:underline"} href={link.href} target={"_blank"}>
                                {link.text}
                            </a>
                        )}
                    </div>

                </AccordionItem>
            )}

        </Accordion>
    )
}