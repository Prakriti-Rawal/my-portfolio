import profileImage from "./profile.jpeg";
import sqlServerIcon from "./sql-server.png";
import powerBiIcon from "./power-bi-icon.png";
import tableauIcon from "./icons8-tableau-software-48.png";
import pandasIcon from "./Pandas.png";
import numpyIcon from "./icons8-numpy-48.png";
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
  profileImage: profileImage,
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
    {
      id: "4",
      title: "Credit-Card-Financial-Weekly-Dashboard-Report",
      description:
        " Automated weekly Power BI dashboard for credit card metrics, cutting report prep time by 75% . Optimized SQL ETL for 1M+ weekly transactions, boosting data refresh performance by 60%. Crafted DAX measures for rolling averages, YoY trends, and risk segmentation ",
      githubUrl:
        "https://github.com/Prakriti-Rawal/Credit-Card-Financial-Weekly-Dashboard-Report",
    },
       {
      id: "5",
      title: "Workforce360-HR-Analytics-Dashboard",
      description:
        " An interactive HR Analytics Dashboard built in Power BI that provides insights into employee demographics, promotions, retrenchments, job satisfaction, and attrition trends — designed to support data-driven HR decisions.",
      githubUrl:
        "https://github.com/Prakriti-Rawal/Workforce360-HR-Analytics-Dashboard",
    },
  ],
  education: [
    {
      id: "1",
      degree: "Postgraduate Program in Data Science & Analytics",
      institution: "Imarticus Learning",
      year: "2024 - 2025",
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
      role: "Data Research Analyst Intern",
      company: "Invergence Analytics(Subsidiary of Convergence Inc)",
      period: "Aug 2025 - Present",
      emoji: "🚀",
    },
    {
      id: "exp-2",
      role: "Senior Recruiter - Talent Acquisition",
      company: "Apidel Technologies",
      period: "Feb 2023 - July 2024",
      emoji: "💻",
    },
    {
      id: "exp-3",
      role: "Technical Recruiter",
      company: "Rang Technologies",
      period: "Jul 2021 - Dec 2022",
      emoji: "💻",
    },
    {
      id: "exp-4",
      role: "HR Manager/Business Development Executive",
      company: "Throughout Technologies Pvt. Ltd.",
      period: "Mar 2020 - Apr 2021",
      emoji: "💻",
    },
  ],
  technologies: [
    {
      id: 1,
      name: "SQL",
      icon: sqlServerIcon,
    },
    {
      id: 2,
      name: "Python",
      icon: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
    },
    {
      id: 3,
      name: "PowerBI",
      icon: powerBiIcon,
    },
    {
      id: 4,
      name: "Tableau",
      icon: tableauIcon,
    },
    { id: 5, name: "Pandas", icon: pandasIcon },
    { id: 6, name: "Numpy", icon: numpyIcon },
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
