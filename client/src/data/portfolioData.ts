export const profileData = {
  name: "Sudharshan S",
  role: "Data Analyst",
  email: "sudharshan0212@gmail.com",
  phone: "+91 7358348722",
  location: "Chennai, Tamil Nadu, India",
  linkedin: "https://www.linkedin.com/in/contactsudharshans/",
  github: "https://github.com/sudharshan0216",
  profileImage: "/profile.jpg",
  resumePdf: "/Sudharshan_Resume.pdf",
  about: "Dynamic Data Analyst with hands-on experience in analyzing complex datasets and transforming them into actionable insights. Adept at utilizing tools such as Python, SQL, MS Excel and Power BI to enhance data visualization and decision-making. Passionate about leveraging analytical skills to support business objectives and foster informed decision making. I enjoy discovering patterns in data that help businesses make informed decisions. Motivated to apply my analytical skills to support business growth and continue learning through hands-on experience."
};

export const internship = {
  title: "Data Analyst (Intern)",
  company: "Besant Technologies",
  duration: "04/2025 – 06/2025",
  location: "Chennai",
  tools: ["Python", "SQL", "Power BI", "Excel"],
  skills: ["Data cleaning", "EDA", "KPI Tracking", "Data Visualization", "Dashboard reporting"],
  achievements: [
    "Collected, cleaned, and analyzed large datasets using Python (Pandas, NumPy) to uncover meaningful insights",
    "Designed and executed SQL queries to extract business metrics and identify sales trends from structured databases",
    "Built interactive Power BI dashboards to visualize KPIs such as revenue growth, customer retention, and product performance",
    "Applied data visualization techniques to translate raw data into actionable insights for decision-making",
    "Presented analytical findings with data-driven recommendations that improved business understanding and forecasting"
  ]
};

export const projects = [
  {
    id: "sales-dashboard",
    title: "Sales Analysis Dashboard",
    duration: "05/2025 – 06/2025",
    tools: ["Excel", "SQL", "Python", "Power BI"],
    description: "Analyzed a sales dataset containing 1,00,000+ records by loading raw data into SQL and organizing it into two structured tables.",
    highlights: [
      "Combined both tables in Python using a primary key join, followed by data preprocessing and cleaning",
      "Detected and handled outliers using Boxplots and Z-score statistical tests to improve data reliability",
      "Visualized key metrics like monthly sales, top customers and churn rate using Matplotlib, Seaborn, and Power BI dashboards",
      "Derived actionable insights that identified high-value customers, sales patterns, and retention trends"
    ],
    featured: true
  }
];

export const skills = {
  technical: ["Python", "MySQL", "MS Excel", "Power BI"],
  soft: ["Analytical Thinking", "Work Ethic", "Leadership skills", "Communication"]
};

export const education = {
  degree: "BCA",
  institution: "Hindustan College of Arts and Science",
  location: "Chennai",
  duration: "2022 – 2025",
  grade: "79.5%"
};

export const certificates = [
  {
    title: "Data Analytics Internship",
    issuer: "iStudio",
    icon: "award"
  },
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte",
    icon: "award"
  },
  {
    title: "MySQL Training",
    issuer: "Besant Technologies",
    icon: "database"
  }
];
