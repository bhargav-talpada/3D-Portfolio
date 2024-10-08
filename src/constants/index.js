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
    swiggy,
    youtube,
    netflix,
    portfolio,
    jsprojects,
    htmlcssprojects,
    threejs,
    github
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "tech",
      title: "Tech",
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
      title: "Web Designing",
      icon: web,
    },
    {
      title: "ReactJS Developer",
      icon: reactjs,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    // {
    //   title: "Core-Java Developer",
    //   icon: creator,
    // },
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
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
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
      name: "github",
      icon: github,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      // company_name: "Starbucks",
      icon: reactjs,
      iconBg: "#383E56",
      // date: "March 2020 - April 2021",
      points: [
        "I'm a junior web developer"
      ],
    },
    // {
    //   title: "React Native Developer",
    //   company_name: "Tesla",
    //   icon: tesla,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2021 - Feb 2022",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
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
        "Climbing to the top demands strength, whether it is to the top of Mount Everest or to the top of your career.",
      name: "APJ Abdul Kalam",
      designation: "CFO",
      company: "Acme Co",
      image: "https://www.frontlist.in/storage/uploads/2019/08/apj.png",
    },
    {
      testimonial:
        "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.",
      name: "Albert Einstein",
      designation: "COO",
      company: "DEF Corp",
      image: "https://gallerypng.com/wp-content/uploads/2024/08/Albert-Einstein-png-hd-image-750x739.png",
    },
    {
      testimonial:
        "Talk to yourself once in a day, otherwise you may miss meeting an intelligent person in this world.",
      name: "Swami Vivekananda ",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnQlQShy76O049GX0C8Aul10CL8JbUhU0Hfg&s",
    },
  ];
  
  const projects = [
    {
      name: "Swiggy Clone",
      description:
        "I developed a food ordering web application similar to Swiggy. The app integrates Swiggy's live API to fetch real-time data and providing a seamless user experience similar to the original plateform.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: swiggy,
      source_code_link: "https://github.com/bhargav-talpada/My-Swiggy.git",
    },
    {
      name: "Youtube Clone",
      description:
        "I built a video streaming plateform modeled after YouTube. The app uses the YouTube API to dynamically fetch real-time data. The project showcase my ability to work with RESTful APIs and manage UI.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: youtube,
      source_code_link: "https://github.com/bhargav-talpada/My-Youtube.git",
    },
    {
      name: "Netflix Clone",
      description:
        "I created a movie streaming plateform similar to Netflix. The application leverages the TMDB API to pull live data. Additionally, i implemented Firebase Authentication for user registration and login.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "firebase",
          color: "orange-text-gradient",
        },
      ],
      image: netflix,
      source_code_link: "https://github.com/bhargav-talpada/My-Netflix.git",
    },
    {
      name: "HTML-CSS-Portfolio",
      description:
        "I created a movie streaming plateform similar to Netflix. The application leverages the TMDB API to pull live data. Additionally, i implemented Firebase Authentication for user registration and login.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/bhargav-talpada/My-Portfolio.git",
    },
    {
      name: "JavaScript-Projects",
      description:
        "I created a movie streaming plateform similar to Netflix. The application leverages the TMDB API to pull live data. Additionally, i implemented Firebase Authentication for user registration and login.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
      ],
      image: jsprojects,
      source_code_link: "https://github.com/bhargav-talpada/JavaScript-Projects.git",
    },
    {
      name: "HTML-CSS-Projects",
      description:
        "I created a movie streaming plateform similar to Netflix. The application leverages the TMDB API to pull live data. Additionally, i implemented Firebase Authentication for user registration and login.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
      ],
      image: htmlcssprojects,
      source_code_link: "https://github.com/bhargav-talpada/HTML-CSS-Project.git",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };