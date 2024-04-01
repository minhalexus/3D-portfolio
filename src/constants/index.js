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
    worklist,
    leavingshortly,
    sustainblr,
    jobit,
    tripguide,
    threejs,
    github,
    gmail,
    linkedin
  } from "../assets";
  
  export const navLinks = [
    {
      id: "hero",
      title: "Terminal",
    },
    {
      id: "about",
      title: "About",
    },
    {
      id: "resume",
      title: "Resume",
    },
    {
      id: "works",
      title: "Projects",
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
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const contact = [
    {
      name: 'GMail',
      icon: gmail,
      link: 'mailto:mshanjer@gmail.com'
    },
    {
      name: 'GitHub',
      icon: github,
      link: 'https://www.github.com/minhalexus'
    },
    {
      name: 'LinkedIn',
      icon: linkedin,
      link: 'https://www.linkedin.com/in/mshanjer'
    }
  ];
  
  const projects = [
    {
      name: "WorkList",
      description:
        "Web app developed with Python and Flask which allows users to create a profile containing information such as professional skills, projects and experience.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "flask",
          color: "orange-text-gradient",
        },
        {
          name: "python",
          color: "pink-text-gradient",
        },
      ],
      image: worklist,
      source_code_link: "https://worklist.leavingshortly.com",
    },
    {
      name: "Leaving Shortly",
      description:
        "A centralized app to track games and media content coming soon or leaving from subscription based services like PlayStation Plus or Xbox Game Pass.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "springboot",
          color: "orange-text-gradient",
        },
      ],
      image: leavingshortly,
      source_code_link: "https://leavingshortly.com/",
    },
    {
      name: "Sustainablr",
      description:
        "Developed a web app that takes specific fuel consumption, and creates a regression for the predicted consumption rates in the future based on machine learning training data.",
      tags: [
        {
          name: "Angular",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "scikit-learn",
          color: "pink-text-gradient",
        },
      ],
      image: sustainblr,
      source_code_link: "https://github.com/minhalexus/go-green",
    },
  ];
  
  export { services, contact, experiences, testimonials, projects };
  