// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
} from "../assets";
import tpbImage from '../assets/projects/tpb.png';


// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  {
    id: "source-code",
    title: "Source Code",
    link: "http://www.github.com/sanidhyy/3d-portfolio/",
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Front End Developer",
    icon: mobile,
  },
  {
    title: "Wordpress Developer",
    icon: backend,
  },

] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Developed a Cross-Platform Travel App and Website",
    company_name: "Moodlearning Inc.",
    icon: starbucks,
    iconBg: "#383E56",
    date: "August 2024 - July 2025",
    points: [
      "Built a travel application and its accompanying website with a unified design and functionality across mobile and web platforms. Integrated APIs, location-based features, and ensured performance optimization.",
      "Tech Stack: React.js, React Native, PostgreSQL, Express.js",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
] as const;

// Testimonials
export const TESTIMONIALS = [

] as const;

// Projects
export const PROJECTS = [
  {
    name: "Travel Philippines",
    description:
      "Disney+ is one of the biggest streaming platforms used by millions of people world-wide and allows us to stream high quality content in 4k and various other formats",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tpbImage,
    source_code_link: "https://github.com/sanidhyy/disney-clone",
    live_site_link: "https://travelph-staging.moodlearners.com/",
  },

] as const;

export const SOCIALS = [
  {
    name: "YouTube",
    icon: youtube,
    link: "https://www.youtube.com/@OPGAMER.",
  },
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/sanidhyy",
  },
  {
    name: "Twitter",
    icon: twitter,
    link: "https://twitter.com/TechnicalShubam",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/sanidhyy",
  },
] as const;
