import {Experience} from "../../types.ts";


export const workExperience: Experience[] = [

    // {
    //     title: "Firda (Entrepedia)",
    //     subtitle: "Full stack developer (part time)",
    //     logo: "data:image/jpeg;base64,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",
    //     location: "Oslo, NO",
    //     period: "2024 - Present",
    //     paragraphs: [
    //         "Developing the entrepedia software plaform",
    //         "Gained experience in frontend developement with vue.js",
    //     ],
    //     links : [
    //         {
    //             text: "Check out our Project",
    //             href:"https://entrepedia.com/",
    //         }
    //     ],
    //     highlighted: false,
    // },
    // {
    //     title: "Bekk",
    //     subtitle: "Developer Intern",
    //     logo: "/images/bekk.png",
    //     location: "Oslo, NO",
    //     period: "Summer 2024",
    //     paragraphs: [
    //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut posuere metus, vitae faucibus ex. Nam egestas purus elit, in aliquet nisi venenatis sit amet. Nam augue enim, dignissim sed sapien eget, molestie lobortis tellus. Nulla tempor odio at ligula sodales consectetur. Fusce scelerisque vehicula tempus.",
    //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut posuere metus, vitae faucibus ex. Nam egestas purus elit, in aliquet nisi venenatis sit amet. Nam augue enim, dignissim sed sapien eget, molestie lobortis tellus. Nulla tempor odio at ligula sodales consectetur. Fusce scelerisque vehicula tempus.",
    //     ],
    //     links: [
    //         {
    //             text: "Check out our Project",
    //             href:"https://www.bekk.no/",
    //         }
    //     ],
    //     highlighted: false,
    // },


    {
        title: "University of Oslo (Current employer)",
        subtitle: "Assignment grader",
        logo: "https://www.uio.no/om/designmanual/profilen-i-bruk/sosiale-medier/bilder/segl_some_1500x1500.png",
        location: "Oslo, NO",
        period: "2022 - 2024",
        paragraphs: [
            "As an assignment grader, I deepened my understanding of subjects like functional programming and the use of libraries such as numpy. Reviewing diverse coding styles, I became proficient with GitHub, unit testing, and peer reviews. This role not only honed my technical skills but also refined my ability to provide clear and constructive feedback on others' code.",
            "Fall semester 2022, grader in the course IN2040, fall semester 2023, grader in the course IN3110, spring semester 2024 grader in the course IN3000",
        ],
        links: [
            {
                text: "IN3000/IN4000 – Operating systems",
                href:"https://www.uio.no/studier/emner/matnat/ifi/IN3000/index-eng.html",
            },
            {
                text: "IN3110 – Problem Solving with High-Level Languages",
                href:"https://www.uio.no/studier/emner/matnat/ifi/IN3110/index.html",
            },
            {
                text: "IN2040 – Functional programming",
                href:"https://www.uio.no/studier/emner/matnat/ifi/IN2040/index.html",
            },


        ],
        highlighted: true,
    },
    {
        title: "Vipps Mobilepay",
        subtitle: "Developer Intern",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQws92QLdwbiphCk1NUN8VKqynUJ2SQoQKqjwgBksCRp_piteWjrFlj4gWEGe8&s",
        location: "Oslo, NO",
        period: "Summer 2023",
        paragraphs: [
            "During the summer internship, I worked in a cross-disciplinary team with developers, designers, and product managers. We designed and developed a new product from scratch, which we called Vipps-Fundraising as a POC (Proof of Concept). The product enables fundraisers to collect recurring donations through their Vipps number in the app, making it easier for users to become donors.",
            "My primary role in the team was backend development, infrastructure, and architecture. Our backend was a microservice deployed in Azure using a Kubernetes cluster with AKS. We utilized Infrastructure as Code with Bicep to set up our resources in Azure. Additionally, we employed Github Actions for CI/CD, establishing an automated testing and deployment pipeline.",
            "The backend consisted of an API server written in Go and utilized OpenAPI Swagger to define our endpoints. This API provides an interface for the Vipps app to access necessary resources for donations, which we stored in an Azure SQL database.",
        ],
        links: [
            {
                text: "Check out the article posted about our summer project",
                href:"https://vipps.no/om-oss/nyheter/studenter-forenkler-faste-giveravtaler/",
            }
        ],
        highlighted: false,
    },
    {
        title: "Elkjøp",
        subtitle: "Retail sales",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHaBrqBtRD6EktyftNv5Z9CLkXA03WIrh7ZfNZh_LRmtF2lib3e3QtW-6IPw&s",
        location: "Oslo, NO",
        period: "2020 - 2022",
        paragraphs: [
            "While studying, I worked part-time at the Elkjøp Phonehouse Bogstadveien store. During this time, I further honed my customer communication skills and gained additional experience in sales and support.",
        ],
        links: [],
        highlighted: false,
    },
    {
        title: "Power",
        subtitle: "Retail sales",
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAk1BMVEVBR0rsZgg9RkvxaAX2aAD1aADuZgXyZwA+R0r5aQAsRE4wRU01RUw5RkwqRE80RU0hQ1DmZQ5USkWxWiuRVDdpTUGjVzGAUTuuWS3TYRu2WyjhZBSaVjR3Tz6mWC8cQ1BNSUeHUjpfS0TBXiHRYRt+UD1ISEpsTj+/XSXaYxScVjNkTESTVDXLYB67XCdyTkAAQFUr01PCAAAD5ElEQVR4nO3bi3qiOhSGYROSQDiJBzy2VqV1tNV27v/qJjjbvXcLKlSQhP7vFbieRZNP2nY6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/RL/rOU1/hnoFyaAfBU1/ilqF7/J5HLi06c9Ro3AhmZipRbb3aY0eJLHlfNgJW7tIdyUJEdxOYq/b9GepifeoRiTEkvMRbeki/TdbpDMKWx5evFbeH/5aHEdUi2S9Qd9t4f0RbKx/RiTq2Jmu3PbdHzSY26cRiWBsFod+y55WGuz+G1Etks33m5Yt0gmn/H8jqkXaya+o26pFRgkjn1iSLJZhm46dcPZlREI4fx77Lbo/oon8OiIRksxa9P0jjdQsS+6GTluOnWOkZglubWO3HdnqvuSOmIbA/LUd2erFXOTPKLg8PLYhW/21fWbEY7ZOWpCtwVKcHTGtnekqNP3YobRnnR9R1Q6fvRmerbQ7ty+M+DdbO0Yv0vE+R2reIu0kjkxeZCZSs1S2jkzO1mh7dUT1tPLnF3Nfm0eDM3f/56dVksHS1GzNj9ScRapsDcysnXBY4EE9LpJZ72ZmqzsutkXyN1tNXKQXywt582WRXCYGZuvpZXExFiML47I16FslRiSEs+k4NGuRVyI152mV9mwd+k1/7hIovRKpWTbb7alB2ep0d2VHTLN1Gz+Zk61PhysdnseSPYOyNSwSqVmcHx5NedsaForULJWtE0OyNRp9b8Rjtq4C14BFuvvvjqiOHfG+9vS/P0pEat4i5w++9tnqfZx7k1pokVwePlzNj51uXCZSsyzWWyz1zla/z24aUS2SHcaRzoukm5KRmjOktAdrjUOAdkpHapbK1qG+b1sdr3yk5iySWds3bd+2ht+J1CyVra8bTZ/WMKlkRHXscE1/W+f8Ptx63JyoRWqYrX7n+gv/4kT6R2ZaZasTrkQFR82nIbmYrV1dstXrPN9Qp2ep7x97LbKVRg+yqh/BLwSTSfPZ6vZ3Ff4EZqhsHTWarfRpcWOVXpVm60tj2erGvWquwStDSnvSSLYG3qzuBf5LZeuKenc+dqKPXsVXxEXpb+vW9/wnFz9I6rgiLlK187C50/1Rwx1fiOD24eMe2dqltdzxhaTZ2qk5W51wX9cdX8gxW/0avy179d7xxYZkpLZspdHoblfERWm2ejUcO+661/gCTwSX219utf8bEXQHxf9K4R5s1nutMlvDmNwj0ko5vvaoKFsDutVrgSdCWpN+BdlKVxazdMXkdHj7DpdUZ53l7RNqTqP3VgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/eH99RP6qSpnCHAAAAAElFTkSuQmCC",
        location: "Nordfjordeid, NO",
        period: "2016 - 2020",
        paragraphs: [
            "I worked part time while in school and later worked a year full time as a sales manager for the Telecom and Computer department."
        ],
        links: [],
        highlighted: false,
    },
]


export const education: Experience[] = [
    {
        title: "Informatics: Programming and system architecture (Master)",
        subtitle: "University of Oslo",
        logo: "https://www.uio.no/om/designmanual/profilen-i-bruk/sosiale-medier/bilder/segl_some_1500x1500.png",
        location: "Oslo, NO",
        period: "2023 - 2025",
        paragraphs: [
            "I'm currently pursuing a master's degree in the field of Networks and Distributed Systems.",
            "My thesis is about the use of machine learning to enhance localization in 5G networks",
        ],
        links: [
            {
                text: "Link to study program",
                href:"https://www.uio.no/studier/program/informatikk-programmering-master/index.html",
            }
        ],
        highlighted: true,
    },
    {
        title: "Informatics: Programming and system architecture (Bachelor)",
        subtitle: "University of Oslo",
        logo: "https://www.uio.no/om/designmanual/profilen-i-bruk/sosiale-medier/bilder/segl_some_1500x1500.png",
        location: "Oslo, NO",
        period: "2020 - 2023",
        paragraphs: [],
        links: [
            {
                text: "Link to study program",
                href:"https://www.uio.no/studier/program/informatikk-programmering/index.html",
            }
        ],
        highlighted: false,
    },
]
