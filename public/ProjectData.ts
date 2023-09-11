import Project, {NavItem} from "../types";
const projects: Project[] = [
    {
        id : "project_1",
        name: "Utepils",
        description: [
            "Utepils is an android app that has a few different features, all centered around Utepils. It shows you nearby bars, resturants and nightclubs where you can get a beer. To achive this we used the Google Places API. The app also reccomends drinks and beers based on the current weather. The weather data is from the MET api.",
            "The app was made in the software engineering course IN2000 at UiO. The group consisted of three developers and three designers and the project lasted for one semester where we learned about software engineering generally and android developement. We got to try agile software developement and got some valueable experience.",
            "During this project i learned how to make android apps, the 'old' way, and using Jetpack Compose. I also learned how to fetch data from APIs parse it to objects. Working together with developers and designers on a larger project also improved my teamworking skills and communication skills.",
        ],
        oneliner : 'Beer based on the weather',
        src: "../public/images/utepils.png",
        type : 'android',
        color: '#92ad89',
        alt : "project screenshot",
        github_url : 'https://github.com/Andreas-Espelund/Utepils',
        page_url : null,
        tech : ['Kotlin','Android studio', 'Jetpack Compose','Figma','Google Cloud', 'Jira'],
        lessons: ['Android developement', 'Jetpack compose', 'Using design patterns', 'Unit & integration-testing']
    },
    {
        id : "jackbow_website",
        name: "Jackbow",
        description: [
            "This is a landing page for the band jackbow with the main goal of gathering all important information for their fans in one place. Such as links to social media, streaming services, their merch shop and it also has a lot of images from live shows. There is also a form that uses email-js to allows booking agencies, venues or festivals to get in touch with the band.    ",
            "I learned more about react and react-hooks as well as navigation using Next.js. I also switched to Typescript for this procjet to expand my arsenal of programming languages. This is the first time i have made a form or handeled any user input on a webpage, wich was very useful. I also used tailwind to style the page, wich i'm liking more and more."
        ],
        oneliner : 'Landing page for a band',
        src: "../public/images/jackbow.jpeg",
        type : 'web',
        color: '#ee3939',
        alt : "project screenshot",
        github_url : 'https://github.com/Andreas-Espelund/jackbow-website',
        page_url : 'https://www.jackbowband.com/',
        tech : ['React','Javascript', 'Typescript', 'Css','Next','Tailwind','Html',],
        lessons: ['Page navigation', 'Making forms', 'Styling with tailwind CSS', 'Next.js']
    },
    {
        id : "skaara",
        name: "Skaara living",
        description: [

            "I was requested by a friend to build a website for his new cabin rental business, this is the first project i made for someone else and the process of communicating with a 'customer' was very valuable.",
            "I got some beautiful photos and decided to make them the highlight of the design of the website. For now the site is very basic and only relays the most important information to the customers."

        ],
        oneliner : 'Cabin rental webpage',
        src: "../public/images/skaara.jpeg",
        type : 'web',
        color: '#EF9068',
        alt : "project screenshot",
        github_url : 'https://github.com/Andreas-Espelund/skaara_living',
        page_url : 'https://skaaraliving.com/',
        tech : ['React','Typescript', 'Tailwind', 'Next'],
        lessons: ['Customer contact', 'Website design', 'Responsive design']
    },

]


const socials: NavItem[] = [
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

export { projects, socials }