import {NavItem, Project} from "../../types.ts";

export const projects: Project[] = [
    {
        id : "vipps",
        name: "Vipps Fundraising",
        description: [
            "During the summer internship, I worked in a cross-disciplinary team with developers, designers, and product managers. We designed and developed a new product from scratch, which we called Vipps-Fundraising as a POC (Proof of Concept). The product enables fundraisers to collect recurring donations through their Vipps number in the app, making it easier for users to become donors.",
            "My primary role in the team was backend development, infrastructure, and architecture. Our backend was a microservice deployed in Azure using a Kubernetes cluster with AKS. We utilized Infrastructure as Code with Bicep to set up our resources in Azure. Additionally, we employed Github Actions for CI/CD, establishing an automated testing and deployment pipeline.",
            "The backend consisted of an API server written in Go and utilized OpenAPI Swagger to define our endpoints. This API provides an interface for the Vipps app to access necessary resources for donations, which we stored in an Azure SQL database."


        ],
        oneliner : 'Microservice',
        src: "/images/vipps.png",
        type : 'bakcend',
        color: '#EF9068',
        alt : "vipps mobilepay logo",
        github_url : null,
        page_url : null,
        tech : ['Go','Azure', 'MSSQL', 'React', 'Typescript', 'Figma', 'Jira'],
        lessons: ['CI/CD', 'Agile software developement', 'API developement']
    },
    {
        id : "project_1",
        name: "Utepils",
        description: [
            "Utepils is an android app that has a few different features, all centered around Utepils. It shows you nearby bars, resturants and nightclubs where you can get a beer. To achive this we used the Google Places API. The app also reccomends drinks and beers based on the current weather. The weather data is from the MET api.",
            "The app was made in the software engineering course IN2000 at UiO. The group consisted of three developers and three designers and the project lasted for one semester where we learned about software engineering generally and android developement. We got to try agile software developement and got some valueable experience.",
            "During this project i learned how to make android apps, the 'old' way, and using Jetpack Compose. I also learned how to fetch data from APIs parse it to objects. Working together with developers and designers on a larger project also improved my teamworking skills and communication skills.",
        ],
        oneliner : 'Beer based on the weather',
        src: "/images/utepils.png",
        type : 'android',
        color: '#92ad89',
        alt : "project screenshot",
        github_url : 'https://github.com/Andreas-Espelund/Utepils',
        page_url : null,
        tech : ['Kotlin','Android studio', 'Jetpack Compose','Figma','Google Cloud', 'Jira'],
        lessons: ['Android developement', 'Jetpack compose', 'Using design patterns', 'Unit & integration-testing']
    },
    {
        id : "skaara",
        name: "Skaara living",
        description: [

            "I was requested by a friend to build a website for his new cabin rental business, this is the first project i made for someone else and the process of communicating with a 'customer' was very valuable.",
            "I got some beautiful photos and decided to make them the highlight of the design of the website. For now the site is very basic and only relays the most important information to the customers."

        ],
        oneliner : 'Cabin rental webpage',
        src: "/images/skaara.jpeg",
        type : 'web',
        color: '#EF9068',
        alt : "project screenshot",
        github_url : 'https://github.com/Andreas-Espelund/skaara_living',
        page_url : 'https://skaaraliving.com/',
        tech : ['React','Typescript', 'Tailwind', 'Next'],
        lessons: ['Customer contact', 'Website design', 'Responsive design']
    },
    {
        id : "jackbow_website",
        name: "Jackbow",
        description: [
            "This is a landing page for the band jackbow with the main goal of gathering all important information for their fans in one place. Such as links to social media, streaming services, their merch shop and it also has a lot of images from live shows. There is also a form that uses email-js to allows booking agencies, venues or festivals to get in touch with the band.    ",
            "I learned more about react and react-hooks as well as navigation using Next.js. I also switched to Typescript for this procjet to expand my arsenal of programming languages. This is the first time i have made a form or handeled any user input on a webpage, wich was very useful. I also used tailwind to style the page, wich i'm liking more and more."
        ],
        oneliner : 'Landing page for a band',
        src: "/images/jackbow.jpeg",
        type : 'web',
        color: '#ee3939',
        alt : "project screenshot",
        github_url : 'https://github.com/Andreas-Espelund/jackbow-website',
        page_url : 'https://www.jackbowband.com/',
        tech : ['React','Javascript', 'Typescript', 'Css','Next','Tailwind','Html',],
        lessons: ['Page navigation', 'Making forms', 'Styling with tailwind CSS', 'Next.js']
    },
]


export const socials: NavItem[] = [
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/andreas-espelund/',
        devIcon: 'devicon-linkedin-plain text-3xl'
    },
    {
        label: 'GitHub',
        href: 'https://github.com/Andreas-Espelund',
        devIcon: 'devicon-github-original text-3xl',
    },
    {
        label: 'Mail',
        href: 'mailto:andreasesraf@gmail.com',
        devIcon: 'fa-solid fa-paper-plane fa-xl'
    },
    {
        label: 'Phone',
        href: 'tel:004799125338',
        devIcon: 'fa-solid fa-phone fa-xl',
    }
]