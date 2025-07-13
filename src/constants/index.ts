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
import ptriImage from '../assets/projects/ptri.png';
import mlimage from '../assets/company/moodlearning.png';
import tpb1image from '../assets/projects/tpb1.png';
import nncimage from '../assets/projects/nnc.png';
import ciccimage from '../assets/projects/cicc.png';
import blgfimage from '../assets/projects/blgf.png';

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
    title: "Full Stack Developer",
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
    name: "React JS",
    icon: reactjs,
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

] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Developed a Cross-Platform Travel App and Website",
    company_name: "Moodlearning Inc.",
    icon: mlimage,
    iconBg: "#fff",
    date: "August 2024 - July 2025",
    points: [
      "Built a travel application and its accompanying website with a unified design and functionality across mobile and web platforms. Integrated APIs, location-based features, and ensured performance optimization.",
      "Tech Stack: React.js, React Native, PostgreSQL, Express.js",
    ],
  },
  {
    title: "Front-End Development for a Moodle-Based Website",
    company_name: "Moodlearning Inc.",
    icon: mlimage,
    iconBg: "#fff",
    date: "Feb 2024 - July 2025",
    points: [
      "Designed and implemented the front-end interface of a Moodle-based learning management system. Focused on responsive design, user experience, and custom UI components using a template engine.",
      "Tech Stack: Mustache, Bootstrap, PHP, jQuery, HTML5, PostgreSQL",
    ],
  },
  {
    title: "Developed a Responsive WordPress Website",
    company_name: "Moodlearning Inc.",
    icon: mlimage,
    iconBg: "#fff",
    date: "December 2023 - June 2024",
    points: [
      "Designed and built a fully responsive WordPress website from the ground up. Customized themes, created a custom plugin, and optimized the user interface for mobile and desktop.",
      "Tech Stack: PHP, MySQL, WordPress",
    ],
  },
  {
    title: "Assisted in an Information Management System",
    company_name: "Moodlearning Inc.",
    icon: mlimage,
    iconBg: "#fff",
    date: "June 2024 - November 2024",
    points: [
      "Contributed to a web-based information management system by helping with both front-end and back-end development. Ensured data was displayed accurately and responsively in line with user requirements.",
      "Tech Stack: Laravel, PHP, Bootstrap, JavaScript",,
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
      "Travel Philippines is the government‑backed, free travel app and Progressive Web App launched by the Department of Tourism (DOT) and the Tourism Promotions Board (TPB). It serves as a one‑stop digital travel companion for exploring the country",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "reactnative",
        color: "green-text-gradient",
      },
      {
        name: "CSS/Bootstrap",
        color: "pink-text-gradient",
      },
            {
        name: "PostgreSQL",
        color: "white-text-gradient",
      },
    ],
    image: tpbImage,
    live_site_link: "https://travelph-staging.moodlearners.com/",
  },
  {
      name: "Salinhabi",
    description:
      "SalinHABI is a Philippine-based digital initiative created by DOST‑PTRI (Department of Science and Technology – Philippine Textile Research Institute) aimed at preserving and promoting the country’s traditional handloom weaving heritage.",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Wordpress",
        color: "pink-text-gradient",
      },
    ],
    image: ptriImage,
    live_site_link: "https://salinhabi.com.ph/",
  },
    {
      name: "E-Resource Portal",
    description:
      "An attached agency of the Department of Tourism, the Tourism Promotions Board (TPB) exists to market and promote the Philippines domestically and internationally as a world-class tourism and MICE destination, in strategic partnership with private and public stakeholders to deliver a unique high-value experience for visitors, significantly contributing to increased arrivals, receipts and investments to the country.",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Wordpress",
        color: "pink-text-gradient",
      },
    ],
    image: tpb1image,
    live_site_link: "https://tpb-staging.moodlearners.com",
  },
      {
      name: "Nutrition Management Infomartion System",
    description:
      "The National Nutrition Council , created under the Presidential Decree 491 or the Nutrition Act of the Philippines, is the country's highest policymaking and coordinating body for nutrition. The agency is responsible for formulating, coordinating, and monitoring nutrition policies and programs for integrated multi-sectoral action towards sustainable nutrition. ",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: nncimage,
    live_site_link: "https://nnc-nmis.moodlearners.com/",
  },
        {
      name: "Cybercrime Investigation and Coordination Center LMS",
    description:
      "(CICC-LMS) is a platform and tool that was created to foster in combating cyber threats. This includes modules, recorded videos, case studies, and assessments. The LMS is a professional tool that has collaborative forums and simulations virtually.",
    tags: [
      {
        name: "Mustache",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
            {
        name: "PostgreSQL",
        color: "white-text-gradient",
      },
    ],
    image: ciccimage,
    live_site_link: "https://lms.cicc-educ.net/",
  },
          {
      name: "Bureau of Local Government Finance e-Learning Hub",
    description:
      "The BLGF eLMS is a specialized online platform dedicated to delivering high-quality, accessible, and competency-based training and other professional development interventions tailored for local assessors.",
    tags: [
      {
        name: "Mustache",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
                  {
        name: "PostgreSQL",
        color: "white-text-gradient",
      },
    ],
    image: blgfimage,
    live_site_link: "https://blgf-staging.moodlearners.com/",
  },

] as const;

export const SOCIALS = [

  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/reuben-dominic-palabasan-509803271/",
  },

  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/Arduts",
  },
] as const;
