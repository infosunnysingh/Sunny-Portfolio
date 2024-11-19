import {
  react,
  angular,
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
  calsoft,
  agbe,
  qls,
  invoice,
  quiz,
  textutils,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: react,
  },
  {
    title: "Angular Developer",
    icon: angular,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
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
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "QLS Academy",
    icon: qls,
    iconBg: "#383E56",
    date: "Sep 2020 - Jan 2022",
    points: [
      "Utilized React.js to create a user-friendly interface for fee collection functionalities.",
      "Implemented features for generating invoices, tracking payments, and sending automated reminders to parents.",
      "Developed a Student Information System (SIS) using React.js to manage student data efficiently.",
      "Designed forms for capturing student details, including personal information, academic records, and attendance.",
      "Created interfaces for managing teacher and staff profiles, including employment details and schedules.",
      "Designed a timetable generation module using React.js to create and manage school schedules.",
      "Developed interfaces for exam scheduling, registration, and result processing.",
      "• Integrated with SMS or email services to notify students and parents about exam-related updates.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "AgBe Technology",
    icon: agbe,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Sep 2022",
    points: [
      "Utilized React.js to develop interactive thank-you pages for Tata 1MG’s pharmacy platform.",
      "Collaborated with design and product teams to create engaging user interfaces.",
      "Leveraged React.js and real-time data technologies to implement prescription status updates",
      "Integrated with angular systems to fetch and display real-time information to users.",
      "Enhanced user experience by providing timely and accurate updates on prescription statuses.",
      "Actively participated in brainstorming sessions and provided technical insights to drive product improvements.",
    ],
  },

  {
    title: "Development Engineer",
    company_name: "Calsoft Pvt Ltd",
    icon: calsoft,
    iconBg: "#383E56",
    date: "Sep 2022 - May 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  //4th Orgnization Experiense
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Invoice Generator",
    description:
      "A web-based Invoice Generator enabling quick creation of professional invoices with real-time calculations. Includes customizable templates and PDF export for efficient client billing.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javaScript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: invoice,
    source_code_link: "https://github.com/infosunnysingh/InvoiceGenerator_React.git",
  },
  {
    name: "Quiz Web App",
    description:
      
"A React.js-based Quiz Web App featuring timed questions, score tracking, and category selection. Designed for an engaging and responsive user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javaScript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: quiz,
    source_code_link: "https://github.com/infosunnysingh/QuizWebApp_React.git",
  },
  {
    name: "TextUtils",
    description:
      "Ah, I see! TextUtils is a tool designed to help with text manipulation, providing features like word count, character count, and other text-processing functionalities.",
    tags: [
      {
        name: "javaScript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: textutils,
    source_code_link: "https://github.com/infosunnysingh/TextUtils_React.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
