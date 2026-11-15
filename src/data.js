export const profile = {
  name: "Jefrin Ferolous",
  role: "IT Support Professional & Full Stack Developer",
  tagline:
    "I keep systems running and build the software that runs on them, from troubleshooting hardware and networks to shipping ERP modules and payment integrations.",
  about:
    "I'm a detail-oriented technical professional with a computer science foundation, hands-on troubleshooting experience and over a year of full stack development. I enjoy working across the stack, from the help desk to the database, and I'm looking to join a dynamic team in the UAE.",
  email: "jefrin.ferolous08@gmail.com",
  github: "https://github.com/jefrin07",
  linkedin: "https://www.linkedin.com/in/jefrin-ferolous",
  photo: "https://res.cloudinary.com/dolvugojm/image/upload/v1794731845/m93xhh7mazyqhkwp08mc.jpg", // e.g. "/photo.jpg" (put the file in /public)
};

export const stats = [
  { value: "3", label: "Roles held" },
  { value: "1.5+", label: "Years in development" },
  { value: "10+", label: "Technologies" },
];

export const experience = [
  {
    role: "IT Support / Technical Intern",
    company: "Lulu International Group",
    place: "Regional Head Office, Trivandrum, Kerala",
    period: "Sep 2026 – Oct 2026",
    points: [
      "Provided on-site support for hardware, software and networking issues across retail and administrative systems.",
      "Configured and maintained computers, printers and POS peripherals.",
      "Assisted senior IT staff with routine maintenance, software updates and network connectivity checks.",
    ],
    tags: ["Troubleshooting", "Networking", "POS", "Desktop Support"],
  },
  {
    role: "Software Developer Intern",
    company: "Mograsys Technologies",
    place: "School ERP for Dubai & GCC Schools",
    period: "Nov 2025 – May 2026",
    points: [
      "Built key ERP modules: Dashboard, HR, Fleet, Ticketing, and Finance & Fees.",
      "Integrated a payment gateway for secure online fee collection for parents at Dubai-based schools.",
    ],
    tags: ["ASP.NET Web API", "C#", "AngularJS", "MS SQL Server"],
  },
  {
    role: "Junior Developer",
    company: "Squad Mind",
    place: "Palarivattom, Kerala",
    period: "May 2024 – Aug 2025",
    points: [
      "Developed and maintained responsive web apps with PHP, CodeIgniter, Laravel, JavaScript and MySQL.",
      "Handled backend, database integration, API development, frontend work and payment gateway integration.",
    ],
    tags: ["PHP", "Laravel", "CodeIgniter", "MySQL"],
  },
];

export const skills = [
  { title: "IT Support", items: ["Hardware & Software Troubleshooting", "Desktop Support", "System Administration", "Network Troubleshooting", "Peripheral Configuration"] },
  { title: "Frontend", items: ["React", "JavaScript", "HTML", "CSS", "Bootstrap"] },
  { title: "Backend", items: ["Python", "FastAPI", "Django", "PHP", "ASP.NET Web API"] },
  { title: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "MS SQL Server"] },
  { title: "Tools", items: ["VS Code", "Postman", "pgAdmin", "phpMyAdmin", "MS Office"] },
];

export const projects = [
  {
    title: "Project Management App",
    desc: "A project management tool with a React frontend and a FastAPI + PostgreSQL backend. Replace this with your own description.",
    tags: ["React", "FastAPI", "PostgreSQL"],
    link: "https://github.com/jefrin07",
  },
  {
    title: "School ERP Modules",
    desc: "Dashboard, HR, Fleet, Ticketing and Finance & Fees modules, plus online fee payments, for schools across the UAE.",
    tags: ["ASP.NET", "AngularJS", "SQL Server"],
    link: null,
  },
  {
    title: "More on GitHub",
    desc: "Experiments, side projects and portfolio builds.",
    tags: ["Open source"],
    link: "https://github.com/jefrin07",
  },
];

export const education = [
  { title: "B.Tech, Computer Science", place: "St. Thomas Institute of Science and Technology, Trivandrum", meta: "2023 · 6.5 CGPA" },
  { title: "Higher Secondary, Computer Science", place: "Jyoti Nilayam Higher Secondary School, Kerala", meta: "2019 · 77%" },
  { title: "Full Stack Web Development in Python-React", place: "MashupStack", meta: "Certification" },
];