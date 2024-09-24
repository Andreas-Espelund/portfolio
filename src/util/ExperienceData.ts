import { Experience } from "../../types.ts";

export const workExperience: Experience[] = [
  {
    title: "Entrepedia",
    subtitle: "Full stack developer (part time)",
    logo: "/images/entrepedia_as_logo.jpeg",
    location: "Oslo, NO",
    period: "2024 - Present",
    paragraphs: [
      "Developing the entrepedia software plaform",
      "Frontend developement with vue.js",
      "Backend developement with Python and Django",
    ],
    links: [],
    highlighted: false,
  },
  {
    title: "Bekk",
    subtitle: "Developer Intern",
    logo: "/images/bekk.png",
    location: "Oslo, NO",
    period: "Summer 2024",
    paragraphs: [
      "Full stack project for a client in the public sector.",
      "Frontend developement with Typescript and React, backend developement with Kotlin and Spring Boot and built a data pipeline with Python and Apache Airflow",
    ],
    links: [],
    highlighted: false,
  },
  {
    title: "Stereotype AS",
    subtitle: "Co founder and developer",
    logo: "/images/stereotype-logo-small.jpg",
    location: "Oslo, NO",
    period: "2024 - Present",
    paragraphs: [],
    links: [
      {
        text: "Check out the website",
        href: "https://stereotype.no",
      },
    ],
    highlighted: false,
  },
  {
    title: "University of Oslo",
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
        href: "https://www.uio.no/studier/emner/matnat/ifi/IN3000/index-eng.html",
      },
      {
        text: "IN3110 – Problem Solving with High-Level Languages",
        href: "https://www.uio.no/studier/emner/matnat/ifi/IN3110/index.html",
      },
      {
        text: "IN2040 – Functional programming",
        href: "https://www.uio.no/studier/emner/matnat/ifi/IN2040/index.html",
      },
    ],
    highlighted: false,
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
        href: "https://vipps.no/om-oss/nyheter/studenter-forenkler-faste-giveravtaler/",
      },
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
      "I worked part time while in school and later worked a year full time as a sales manager for the Telecom and Computer department.",
    ],
    links: [],
    highlighted: false,
  },
];

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
        href: "https://www.uio.no/studier/program/informatikk-programmering-master/index.html",
      },
      {
        text: "Link to thesis project",
        href: "https://github.com/Andreas-Espelund/5G_localization",
      },
    ],
    highlighted: false,
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
        href: "https://www.uio.no/studier/program/informatikk-programmering/index.html",
      },
    ],
    highlighted: false,
  },
];
