// Add or modify projects here
export const projectsData = [
  {
    title: "GoRide",
    description: "A web-based ride-booking platform that allows users to book rides, manage profiles, and view trip details in a simple and intuitive interface. Streamlines the ride-hailing experience with user-friendly design and essential ride management features.",
    tech: ["React", "Flask", "MySQL"],
    year: "2024",
    gradient: "from-blue-500/10 to-cyan-500/10",
    githubUrl: "https://github.com/Akshat-Gupta-2005/GoRide",
    demoUrl: "#"
  },
  {
    title: "SecureFinanceApp",
    description: "Engineered a secure, server-side application for real-time digital transactions, integrating scalable infrastructure and automated data integrity checks. Used JWT authentication, bcrypt hashing, and RESTful APIs.",
    tech: ["Node.js", "MongoDB", "JWT", "Bcrypt"],
    year: "2025",
    gradient: "from-purple-500/10 to-pink-500/10",
    githubUrl: "https://github.com/Adarsh16-30/SecureFinanceApp",
    demoUrl: "#"
  },
  {
    title: "ThreatDetection",
    description: "Developed a machine learning–based system that analyzes network traffic to detect anomalies and potential cyber threats. Features real-time REST APIs for deployment and interactive visualization dashboards.",
    tech: ["Python", "Scikit-learn", "TensorFlow", "Flask"],
    year: "2025",
    gradient: "from-green-500/10 to-emerald-500/10",
    githubUrl: "https://github.com/Adarsh16-30/ThreatDetection",
    demoUrl: "#"
  },
  {
    title: "TradeVerse",
    description: "Designed and built a scalable backend system simulating real-time trading challenges for 200+ users. Implemented reliable infrastructure with real-time data tracking, leaderboard analytics, and performance-optimized logic.",
    tech: ["React", "Flask", "MySQL"],
    year: "2025",
    gradient: "from-orange-500/10 to-red-500/10",
    githubUrl: "https://github.com/Adarsh16-30/",
    demoUrl: "#"
  },
  {
    title: "Portfolio",
    description: "Designed and developed a fully responsive personal portfolio website using modern front-end technologies, showcasing projects, skills, and achievements through an interactive and elegant interface. Implemented smooth animations with Framer Motion and optimized performance using Vite and TypeScript for fast, efficient, and maintainable development.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion", "React Router DOM"],
    year: "2025",
    gradient: "from-blue-500/10 to-sapphire-500/10",
    githubUrl: "https://github.com/Adarsh16-30/Portfolio",
    demoUrl: "#"
  },
  // Add more projects below
];

// Featured projects to show on homepage (first 3)
export const featuredProjects = projectsData.slice(0, 3);
