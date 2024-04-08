
export type Project = {
    id: string;
    name: string;
    description: string[];
    oneliner: string;
    src: string;
    type: string;
    color: string;
    alt: string;
    github_url: string | null;
    page_url: string | null;
    tech: string[];
    lessons: string[];
};

export type NavItem = {
    label : string;
    href :  string;
    devIcon: string;
}

export type Experience = {
    title: string;
    subtitle: string;
    logo: string;
    location: string;
    period: string;
    paragraphs: string[];
    links: {text: string, href:string}[];
    highlighted: boolean;
}