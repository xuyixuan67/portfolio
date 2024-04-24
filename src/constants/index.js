import {
  // mobile,
  // backend,
  // creator,
  web,
  qa,
  web_develop,
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
  php_logo,
  figma,
  docker,
  elo,
  threejs,
  php,
  php_backend,
  web2,
  frontend,
  ekim,
  mariah,
  phishproof,
  deliverance_enterprises,
  coolxue,
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
    icon: web2,
  },
  {
    title: "PHP Native Developer",
    icon: php,
  },
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Quality Assurance",
    icon: qa,
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
    name: "PHP",
    icon: php_logo,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Soft Developer",
    company_name: "Elo Software",
    icon: elo,
    iconBg: "#383E56",
    date: "October 2018 - Febuary 2023",
    points: [
      "Main cybersecurity educational projects like PhishProof, iEngine Course Player, and Solutions Portal were outsourced by ZiffDavis, J2 Global, Inspired eLearning.",
      "4 years of experience in web development and testing, with proficiency in PHP, JavaScript, HTML, CSS, Bootstrap, jQuery, and SQL.",
      "Developed, implemented, and tested new features, with a focus on improving performance and functionality.",
      "Designed user interfaces with a focus on usability, accessibility, and responsiveness.",
      "Managed and manipulated data in SQL tables as part of development tasks.",
      "Developed a feature using API calls to generate a user management interface.",
      "Basic understanding of React.js, Node.js, and Vite through self-learning and online tutorials.",
      "Collaborated with cross-functional teams and product owners to identify requirements, prioritize tasks, and resolve issues using Agile methodologies like JIRA.",
      "Successfully resolved issues by implementing effective problem-solving techniques, ensuring seamless completion of tasks.",
      "Utilized Git version control system to track code changes and bug fixes, improving code efficiency and collaboration with team members.",
      "Achieved high-quality standards and enhanced user satisfaction by conducting thorough manual testing and developing well-designed, testable code.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I highly recommend Tammy Xu, a software developer whose expertise and dedication have consistently led to remarkable outcomes. Having worked alongside Tammy for over 4 years at Elo Software, I've had the firsthand opportunity to witness her ability to learn new concepts and skills quickly, even when it's an entirely new language or environment. Tammy's ability to understand both new and existing front-end and back-end developments is impressive. She has worked on multiple projects, both solo and as part of a team. Notably, on PhishProof and our e-learning platform. Tammy's innovative use of PHP and MySQL greatly enhanced our web applications' functionality and user experience. Her keen eye for detail in HTML, CSS, and JavaScript has always helped us solve bugs before going into production. What sets Tammy apart is her problem-solving ability. Whenever faced with a challenging bottleneck in our systems, she would not quit until the problem had a solution or was moving towards a solution. Her proactive and innovative thinking has been instrumental in overcoming challenges. Beyond her technical skills, Tammy is a true team player, consistently fostering a collaborative and inclusive environment. Tammy has also shown leadership qualities, leading the QA team by example and significantly contributing to our team's professional development. In light of Tammy Xu's outstanding skills, professional attitude, and unwavering dedication, I wholeheartedly recommend them for any web development, SaaS, front-end, back-end, or QA role. I am confident she will be an invaluable asset to your team. Please feel free to contact me here on LinkedIn if you require any further information.",
    name: "Ekim Yardimli",
    designation: "Co-Founder",
    company: "Elo Software",
    image: ekim,
    linkedIn: "https://www.linkedin.com/in/ekim-emre-yardimli/",
  },
  {
    testimonial:
      "Tammy is a fantastic developer. I have watched her grow from jr dev to expert QA detail seeker, all the way to software developer. She readily takes feedback, checks for shared expectations, and delivers on time.",
    name: "Mariah Tree",
    designation: "Technical Product Manager",
    company: "Inspired eLearning",
    image: mariah,
    linkedIn: "https://www.linkedin.com/in/mariah-rebekah-tree/",
  },
];

const projects = [
  {
    name: "PhishProof",
    description:
      "🛡️Anti-Phishing Simulator: PhishProof™ PhishProof™ is an innovative anti-phishing software designed to protect organizations from data breaches caused by phishing attacks. It offers a unified experience to test, train, and measure phishing preparedness across email, phone, text, and USB baiting methods. With PhishProof, companies can significantly decrease their phishing susceptibility rate by running realistic simulations and providing targeted training.",
    tags: [
      {
        name: "jQuery",
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
        name: "Git",
        color: "white-text-gradient",
      },
      {
        name: "Jira",
        color: "blue-text-gradient",
      },
    ],
    image: phishproof,
    source_code_link: "https://github.com/",
    demo_link: "",
  },
  {
    name: "Coolxue",
    description:
      "📚Coolxue's objective is to empower parents with a comprehensive suite of math teaching resources, enabling them to kickstart their children's education in mathematics from the comfort of their home.🏠",
    tags: [
      {
        name: "jQuery",
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
        name: "Git",
        color: "white-text-gradient",
      },
      {
        name: "Jira",
        color: "blue-text-gradient",
      },
    ],
    image: coolxue,
    source_code_link: "https://math.coolxue.tw/",
    demo_link: "https://math.coolxue.tw/",
  },
  {
    name: "Deliverance Enterprises Home Page",
    description:
      "🎯Project Overview: Create Deliverance Enterprises homepage based on the provided design, serving as a gateway to their two flagship initiatives: Deliverance Robotics and Deliverance Energy.",
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
    image: deliverance_enterprises,
    source_code_link: "https://github.com/",
    demo_link: "https://www.deliverance.enterprises/home/",
  },
];

export { services, technologies, experiences, testimonials, projects };
