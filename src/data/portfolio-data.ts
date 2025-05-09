export interface Project {
  id: string;
  title: string;
  description: string;
  githubUrl: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
  emoji: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  emoji: string;
}

export interface Technology {
  id: string;
  name: string;
  icon: string;
  category: string;
}

export interface Contact {
  github: string;
  linkedin: string;
  email: string;
}

export const portfolioData = {
  name: "Prakriti Rawal 🚀",
  title: "Data Analyst",
  about:
    "Hey there! 👋 I'm Prakriti Rawal, a Data Analyst who transforms complex data into clear, actionable insights. Combining technical expertise with business acumen, I help organizations make data-driven decisions. Let's turn your data into strategic value! 🚀",
  profileImage: "public/assets/images/profile.jpeg",
  projects: [
    {
      id: "1",
      title: "Sakila Database Analysis",
      description:
        "A comprehensive analysis of the Sakila DVD Rental Database, showcasing advanced SQL techniques including complex joins, subqueries, and window functions. The project demonstrates data analysis skills and business insights generation.",
      githubUrl: "https://github.com/Prakriti-Rawal/Sakila-case-study",
    },
    {
      id: "2",
      title: "Logistics Analytics",
      description:
        "An in-depth analysis of logistics data, focusing on supply chain optimization and delivery performance metrics. The project includes route optimization, cost analysis, and performance tracking.",
      githubUrl: "https://github.com/Prakriti-Rawal/logistics-sql-project",
    },
    {
      id: "3",
      title: "E-Learning Analytics",
      description:
        "Data-driven insights into student engagement, course performance, and platform growth strategies. The analysis includes user behavior patterns, course effectiveness, and revenue optimization.",
      githubUrl:
        "https://github.com/Prakriti-Rawal/SQL-Project-Online-Learning-Platform-OLP-",
    },
  ],
  education: [
    {
      id: "1",
      degree: "Postgraduate Program in Data Science & Analytics",
      institution: "Imarticus Learning",
      year: "Nov 2024 - Present",
      emoji: "💻",
    },
    {
      id: "2",
      degree: "Master of Business Administration",
      institution: "Institute Of Management Studies, Davv, Indore",
      year: "2018 - 2020",
      emoji: "🎓",
    },
    {
      id: "3",
      degree: "Bachelor of Business Administration",
      institution: "University of Kota",
      year: "2015 - 2018",
      emoji: "🎓",
    },
  ],
  experience: [
    {
      id: "exp-1",
      role: "Senior Recruiter - Talent Acquisition",
      company: "Apidel Technologies",
      period: "Feb 2023 - July 2024",
      emoji: "🚀",
    },
    {
      id: "exp-2",
      role: "Technical Recruiter",
      company: "Rang Technologies",
      period: "Jul 2021 - Dec 2022",
      emoji: "💻",
    },
    {
      id: "exp-3",
      role: "HR Manager/Business Development Executive",
      company: "Analytics Hub",
      period: "Mar 2020 - Apr 2021",
      emoji: "💻",
    },
  ],
  technologies: [
    {
      id: 1,
      name: "SQL",
      icon: "public/assets/images/sql-server.png",
    },
    {
      id: 2,
      name: "Python",
      icon: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
    },
    {
      id: 3,
      name: "PowerBI",
      icon: "public/assets/images/power-bi-icon.png",
    },
    {
      id: 4,
      name: "Tableau",
      icon: "public/assets/images/icons8-tableau-software-48.png",
    },
    { id: 5, name: "Pandas", icon: "public/assets/images/Pandas.png" },
    { id: 6, name: "Numpy", icon: "public/assets/images/icons8-numpy-48.png" },
    {
      id: 7,
      name: "Excel",
      icon: "https://cdn-icons-png.flaticon.com/512/732/732220.png",
    },
  ],
  contact: {
    github: "https://github.com/Prakriti-Rawal",
    linkedin: "https://www.linkedin.com/in/prakriti-rawal-552675170",
    email: "prakriti.rawal@gmail.com",
  },
};
