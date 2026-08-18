import {
  PersonalInfo,
  StatItem,
  PersonalValue,
  SkillItem,
  ProjectItem,
  ExperienceItem,
  EducationItem,
  CertificateItem,
  AchievementItem,
  ServiceItem,
  TestimonialItem,
} from '../types/portfolio';

export const personalInfo: PersonalInfo = {
  name: 'Liony Tamara Lewinsky',
  titles: [
    'Fresh Graduate Information Systems',
    'Product Management Enthusiast',
    'Business & Data Analyst',
    'UI/UX Designer',
  ],
  bio: 'A driven Information Systems graduate from Del Institute of Technology with a strong interest in Data Analytics, Business Analysis, Business Development, and Product Analysis. Passionate about leveraging data, understanding business needs, and developing strategic solutions that create value for users and support business growth.',
  shortBio: 'Specializing in Product Analysis, Business Analysis, Data Visualization (SQL, Power BI, Excel), UI/UX Design, and Agile Project Management.',

  avatarUrl: '/Portofolio_liony/DSC_6229.JPG.jpeg',
  
  resumeUrl: '/Portofolio_liony/Liony_Tamara_Lewinsky_-_CV.pdf',
  
  email: 'lionytamaralewinsky@gmail.com',
  phone: '+62 822-6798-2081',
  whatsapp: 'https://web.whatsapp.com/',
  location: 'Tarutung / Sumatera Utara, Indonesia',
  status: 'Available for Full-time Roles & Fast Onboarding',
  github: 'https://github.com/lionytamara',
  linkedin: 'https://www.linkedin.com/in/liony-tamara-lewinsky-03112523b/',
  instagram: 'https://www.instagram.com/liony_lewinsky/',
};

export const statItems: StatItem[] = [
  {
    label: 'Projects Built',
    value: '15+',
    subtext: 'Full-stack & Front-end Apps',
    icon: 'Code2',
  },
  {
    label: 'Tech Stack Skills',
    value: '20+',
    subtext: 'Tools & Frameworks',
    icon: 'Cpu',
  },
  {
    label: 'Certificates',
    value: '8+',
    subtext: 'Meta, Google & AWS Certified',
    icon: 'Award',
  },
  {
    label: 'GPA Score',
    value: '3.21',
    subtext: 'Scale 4.00',
    icon: 'GraduationCap',
  },
];

export const personalValues: PersonalValue[] = [
  {
    title: 'Business Analysis',
    description: 'Skilled in gathering requirements, analyzing business processes, and translating business needs into clear technical solutions.',
    icon: 'CheckCircle2',
  },
  {
    title: 'Data Analytics',
    description: 'Experienced in SQL, Excel, Power BI, and data visualization to support business decision-making.',
    icon: 'TrendingUp',
  },
  {
    title: 'Business Development',
    description: 'Passionate about identifying business opportunities, building strong client relationships, and delivering value-driven solutions to support business growth.',
    icon: 'Zap',
  },
  {
    title: 'Product Analysis',
    description: 'Experienced in analyzing user needs, gathering business requirements, and translating insights into product improvements that enhance user experience.',
    icon: 'Layout',
  },
];

export const skillsData: SkillItem[] = [
  // Data Analytics
  { name: 'SQL', level: 95, iconName: 'Database', category: 'analytics', badgeText: 'Expert' },
  { name: 'Microsoft Excel', level: 95, iconName: 'FileText', category: 'analytics', badgeText: 'Expert' },
  { name: 'Power BI', level: 90, iconName: 'BarChart2', category: 'analytics', badgeText: 'Advanced' },
  { name: 'Tableau', level: 88, iconName: 'PieChart', category: 'analytics', badgeText: 'Advanced' },
  { name: 'Python (Pandas, NumPy)', level: 80, iconName: 'Terminal', category: 'analytics', badgeText: 'Intermediate' },
  { name: 'Data Cleaning', level: 90, iconName: 'Zap', category: 'analytics', badgeText: 'Advanced' },
  { name: 'Data Visualization', level: 90, iconName: 'TrendingUp', category: 'analytics', badgeText: 'Advanced' },
  { name: 'ETL Fundamentals', level: 80, iconName: 'Layers', category: 'analytics', badgeText: 'Intermediate' },

  // Business Analysis
  { name: 'Requirement Gathering', level: 90, iconName: 'CheckCircle2', category: 'business', badgeText: 'Advanced' },
  { name: 'Business Process Analysis', level: 88, iconName: 'Network', category: 'business', badgeText: 'Advanced' },
  { name: 'BPMN', level: 80, iconName: 'GitBranch', category: 'business', badgeText: 'Intermediate' },
  { name: 'User Story Writing', level: 85, iconName: 'FileCode', category: 'business', badgeText: 'Advanced' },
  { name: 'Functional Specification', level: 88, iconName: 'FileText', category: 'business', badgeText: 'Advanced' },
  { name: 'Gap Analysis', level: 80, iconName: 'Search', category: 'business', badgeText: 'Intermediate' },
  { name: 'Stakeholder Management', level: 88, iconName: 'Users', category: 'business', badgeText: 'Advanced' },
  { name: 'Documentation (BRD/SRS)', level: 90, iconName: 'BookOpen', category: 'business', badgeText: 'Advanced' },

  // Business Intelligence
  { name: 'KPI Dashboard', level: 88, iconName: 'Layout', category: 'bi', badgeText: 'Advanced' },
  { name: 'Reporting & Analytics', level: 90, iconName: 'Activity', category: 'bi', badgeText: 'Advanced' },
  { name: 'Data Modeling', level: 82, iconName: 'HardDrive', category: 'bi', badgeText: 'Intermediate' },
  { name: 'Business Insights', level: 88, iconName: 'Sparkles', category: 'bi', badgeText: 'Advanced' },
  { name: 'Decision Support', level: 85, iconName: 'Cpu', category: 'bi', badgeText: 'Advanced' },

  // Databases
  { name: 'MySQL', level: 90, iconName: 'Database', category: 'database', badgeText: 'Advanced' },
  { name: 'PostgreSQL', level: 88, iconName: 'Database', category: 'database', badgeText: 'Advanced' },
  { name: 'SQL Server', level: 80, iconName: 'Server', category: 'database', badgeText: 'Intermediate' },
  { name: 'Database Design', level: 85, iconName: 'Layers', category: 'database', badgeText: 'Advanced' },

  // Tools
  { name: 'Power BI', level: 90, iconName: 'BarChart2', category: 'tools', badgeText: 'Advanced' },
  { name: 'Tableau', level: 88, iconName: 'PieChart', category: 'tools', badgeText: 'Advanced' },
  { name: 'Excel', level: 95, iconName: 'FileText', category: 'tools', badgeText: 'Expert' },
  { name: 'Figma', level: 85, iconName: 'Figma', category: 'tools', badgeText: 'Advanced' },
  { name: 'Jira', level: 85, iconName: 'Command', category: 'tools', badgeText: 'Advanced' },
  { name: 'Trello', level: 88, iconName: 'Box', category: 'tools', badgeText: 'Advanced' },
  { name: 'Git & GitHub', level: 80, iconName: 'Github', category: 'tools', badgeText: 'Intermediate' },
  { name: 'VS Code', level: 85, iconName: 'Code', category: 'tools', badgeText: 'Advanced' },
  { name: 'Postman', level: 75, iconName: 'Send', category: 'tools', badgeText: 'Intermediate' },
];

export const projectsData: ProjectItem[] = [
  {
    id: 'tempat-pulang',
    title: 'Tempat Pulang - Reflection & Journaling Platform',
    category: 'fullstack',
    shortDescription: 'Web-based platform providing a safe and private space for personal reflection and journaling.',
    fullDescription: 'Developed a web-based platform that provides a safe and private space for personal reflection and journaling. The application focuses on delivering a simple, secure, and user-friendly experience while enabling users to record their thoughts and emotions in a structured way.',
    thumbnail: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Laravel', 'PHP', 'MySQL', 'Figma'],
    githubUrl: 'https://github.com/lionyseyo/tempat-pulang-app',
    liveUrl: 'https://example.com',
    role: 'Full-Stack Developer & UI/UX Designer',
    metrics: 'Secure & Private Reflection Space',
    features: [
      'Secure user authentication',
      'Personal journal management',
      'Responsive and intuitive user interface',
      'Clean and modern design',
      'Personal reflection tracking',
    ],
    featured: true,
  },
  {
    id: 'hybrid-text-to-sql',
    title: 'Hybrid Text-to-SQL Framework',
    category: 'fullstack',
    shortDescription: 'A hybrid Text-to-SQL framework integrating Retrieval-Augmented Generation (RAG), In-Context Reinforcement Learning (ICRL), and SLM-based Hierarchical Action Correction (SHARE) for complex query generation.',
    fullDescription: 'A hybrid Text-to-SQL framework integrating Retrieval-Augmented Generation (RAG), In-Context Reinforcement Learning (ICRL), and SLM-based Hierarchical Action Correction (SHARE) to improve SQL generation for complex natural language queries. This research proposes a hybrid framework that combines RAG to retrieve relevant schema and query examples, ICRL to iteratively refine SQL generation through contextual feedback, and SHARE to hierarchically detect and correct SQL errors using a Small Language Model.',
    thumbnail: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80',
    tags: ['Python', 'SQL', 'RAG', 'ICRL', 'SHARE', 'BIRD Benchmark'],
    githubUrl: 'https://github.com/25yohana12/TASI-113',
    liveUrl: 'https://github.com/25yohana12/TASI-113',
    role: 'Undergraduate Researcher & Developer',
    metrics: 'Evaluated on BIRD Development Set (EX, Latency, Token Usage)',
    features: [
      'Retrieval-Augmented Generation (RAG) to retrieve relevant schema and query examples',
      'In-Context Reinforcement Learning (ICRL) to iteratively refine SQL generation through contextual feedback',
      'Small Language Model (SLM)-based Hierarchical Action Correction (SHARE) to hierarchically detect and correct SQL errors',
      'Evaluation on BIRD Development Set using EX (Execution Accuracy), Inference Latency, Token Usage, and Error Distribution',
    ],
    featured: true,
  },
  {
    id: 'delcare-website',
    title: 'Pemrograman dan Pengujian Website DelCare',
    category: 'fullstack',
    shortDescription: 'DelCare is a web-based platform developed to streamline the damage reporting process within the academic community of Institut Teknologi Del, connecting users with Technical Support and Maintenance.',
    fullDescription: 'DelCare is a web-based platform developed to streamline the damage reporting process within the academic community of Institut Teknologi Del. The system connects users with Technical Support (Duktek) and Maintenance teams, improving communication efficiency and issue resolution. This project was built as part of the Programming and Web Testing course (Aug 2024 – Dec 2024), utilizing the Laravel framework for backend development and modern frontend technologies to deliver a responsive user experience. Through this project, I developed strong full-stack development skills using Laravel, practical experience in software testing to ensure quality, and effective teamwork and user-centered problem-solving skills.',
    thumbnail: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
    tags: ['Laravel', 'Web Development', 'UI/UX Design', 'Software Testing'],
    githubUrl: 'https://github.com/lionyseyo/Delcare',
    liveUrl: 'https://github.com/lionyseyo/Delcare',
    role: 'Full-Stack Developer & QA Tester',
    metrics: 'Built for Institut Teknologi Del Academic Community',
    features: [
      'Submitting detailed damage reports with file attachments',
      'Real-time tracking of report status',
      'Automated notifications for status updates until resolution',
      'Full-stack development using Laravel and modern web technologies',
      'Practical software testing implementation to ensure application quality and reliability',
    ],
    featured: true,
  },

];

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp-1',
    period: 'Jun 2025 – Aug 2025',
    role: 'Product Analyst Intern',
    company: 'PT Jejaring Tiga Artha (Zi.Care)',
    type: 'Internship',
    description: 'Contributed to the development of the Zi.Care Hospital Information System by analyzing business requirements, identifying user needs, and recommending product improvements. Collaborated with stakeholders and the development team to enhance system functionality and user experience.',
    achievements: [
      'Conducted business process analysis and requirement gathering.',
      'Identified user pain points and proposed feature improvements.',
      'Prepared Product Requirement Documents (PRD) and supporting documentation.',
      'Designed UI/UX improvement recommendations using Figma.',
      'Collaborated with developers during feature analysis and validation.',
    ],
    skillsUsed: ['Business Analysis', 'Product Analysis', 'Requirement Gathering', 'Figma', 'SQL', 'Jira'],
  },
  {
    id: 'exp-2',
    period: 'Sep 2024 – May 2025',
    role: 'Computer Network Teaching Assistant',
    company: 'Del Institute of Technology',
    type: 'Campus Project',
    description: 'Assisted lecturers in conducting Computer Network laboratory sessions, guided students during practical activities, and ensured the smooth execution of laboratory classes.',
    achievements: [
      'Mentored students during laboratory sessions.',
      'Assisted in evaluating practical assignments.',
      'Strengthened communication and mentoring skills.',
    ],
    skillsUsed: ['Teaching', 'Communication', 'Problem Solving'],
  },
  {
    id: 'exp-3',
    period: 'Issued Oct 2025',
    role: 'Associate Data Scientist',
    company: 'Digital Talent Scholarship – Vocational School Graduate Academy',
    type: 'Bootcamp',
    description: 'Completed an intensive data science training program covering data analysis, Python programming, machine learning fundamentals, and data-driven problem solving.',
    achievements: [
      'Data Analysis using Python',
      'Data Cleaning & Visualization',
      'Machine Learning Fundamentals',
      'Data-Driven Decision Making',
    ],
    skillsUsed: ['Python', 'Data Analysis', 'Machine Learning', 'Data Visualization', 'SQL'],
  },
  {
    id: 'exp-4',
    period: 'Issued Jan 2024',
    role: 'Intensive UI/UX Design',
    company: 'SanberCode',
    type: 'Bootcamp',
    description: 'Completed an intensive UI/UX Design program focused on user-centered design principles, wireframing, prototyping, and usability evaluation. Developed a personal portfolio website as the final project and conducted usability evaluations to improve user experience.',
    achievements: [
      'User-Centered Design',
      'Wireframing & Prototyping',
      'Usability Evaluation',
      'Portfolio Website Design',
    ],
    skillsUsed: ['UI/UX Design', 'Figma', 'Wireframing', 'Prototyping'],
  },
];

export const educationData: EducationItem = {
  university: 'Del Institute of Technology (Institut Teknologi Del)',
  major: 'Information Systems',
  degree: "Bachelor's Degree in Information Systems (S.Kom.)",
  gpa: '3.21',
  maxGpa: '4.00',
  period: '2022 – 2026',
  location: 'Laguboti, North Sumatra, Indonesia',
  achievements: [
    'Completed Product Analyst Internship at PT Jejaring Tiga Artha (Zi.Care).',
    'Completed academic projects in Business Analysis, Database Systems, and Data Analytics.',
    'Conducted undergraduate research on improving Text-to-SQL performance using hybrid AI architectures.',
    'Developed practical skills through project-based learning and industry collaboration.',
  ],
  organizations: [
    'Member, Spiritual Division – Information Systems Student Association',
    'Member, Radio Digital & Content Club',
    'Orientation Mentor for Information Systems Students',
    'Committee Member – Inauguration, Graduation & Dies Natalis',
  ],
  courses: [
    'Business Analysis & Requirements Engineering',
    'Database Systems',
    'Data Analytics & Data Visualization',
    'Business Intelligence',
    'Product Management',
    'UI/UX Design',
    'Software Engineering',
    'Project Management',
    'Enterprise Information Systems',
  ],
};

export const certificatesData: CertificateItem[] = [
  {
    id: 'cert-1',
    title: 'AI for Work & Career Readiness with Google AI Products',
    issuer: 'Hacktiv8 Indonesia',
    issueDate: 'May 2026',
    credentialId: 'HACKTIV8-AI-2026',
    credentialUrl: 'https://hacktiv8.com',
    // PASTIKAN NAMA FILE SAMA PERSIS DENGAN YANG ADA DI GITHUB
    image: '/Portofolio_liony/certificates/python_2.jpg',
    skills: [
      'Artificial Intelligence (AI) Awareness',
      'Generative AI',
      'Google AI Products',
      'Prompt Engineering',
      'Workplace Productivity',
      'Career Readiness',
      'AI Tools',
    ],
  },
  {
    id: 'cert-2',
    title: 'Associate Data Scientist (Vocational School Graduate Academy)',
    issuer: 'Digital Talent Scholarship',
    issueDate: 'Oct 2025',
    credentialId: 'undefined',
    credentialUrl: 'https://digitalent.kominfo.go.id/',
    // PERBAIKAN PENTING: Disesuaikan dengan nama file yang baru di-upload (dengan spasi)
    image: '/Portofolio_liony/certificates/Sertifikat Data Scientist.jpg',
    skills: [
      'Python (Programming Language)',
      'Data Analysis',
      'Machine Learning',
      'Data Visualization',
      'SQL',
    ],
  },
  {
    id: 'cert-3',
    title: 'Python',
    issuer: 'Kaggle',
    issueDate: 'Sep 2024',
    credentialId: 'KAG-PY-2024',
    credentialUrl: 'https://www.kaggle.com',
    // PASTIKAN NAMA FILE SAMA PERSIS DENGAN YANG ADA DI GITHUB
    image: '/Portofolio_liony/certificates/python_1.jpg',
    skills: ['Python (Programming Language)', 'Problem-Solving', 'Algorithms'],
  },
{
    id: 'cert-4',
    title: 'Intensive UI/UX Design Certificate',
    issuer: 'SanberCode',
    issueDate: 'Jan 2024',
    credentialId: 'SANBER-UX-2024',
    credentialUrl: 'https://sanbercode.com',
    // Sesuai dengan log GitHub Anda
    image: '/Portofolio_liony/certificates/Sertifikat Intensif_UI_UX.jpg',
    skills: ['UI/UX Design', 'Figma', 'Wireframing', 'Prototyping', 'Usability Testing'],
  },
];
export const achievementsData: AchievementItem[] = [
  {
    id: 'ach-1',
    title: '1st Winner & Best Tech Innovation',
    event: 'National Student Hackathon 2025',
    category: 'Hackathon',
    date: 'Oct 2025',
    rank: '1st Place',
    description: 'Engineered an AI-driven disaster alert dashboard in 36 non-stop hours, beating 75+ university teams nationwide.',
  },
  {
    id: 'ach-2',
    title: 'Top 5 Finalist - Front-End Showdown',
    event: 'Tech Titans National Coding Championship',
    category: 'Competition',
    date: 'Aug 2025',
    rank: 'Finalist',
    description: 'Recognized for creating the fastest rendering and most responsive UI implementation under tight time constraints.',
  },
  {
    id: 'ach-3',
    title: 'Keynote Speaker - "Building Scalable Next.js Apps"',
    event: 'Campus Tech Seminar Series 2025',
    category: 'Seminar',
    date: 'May 2025',
    description: 'Delivered a workshop to 150+ student attendees explaining App Router architecture, server components, and Tailwind styling.',
  },
  {
    id: 'ach-4',
    title: 'Participant - Masterclass UI Design Systems',
    event: 'Awwwards Creative Developer Workshop',
    category: 'Workshop',
    date: 'Mar 2025',
    description: 'Learned advanced Framer Motion techniques, WebGL shaders basics, and micro-interaction principles from industry veterans.',
  },
];

export const servicesData: ServiceItem[] = [
  {
    id: 'service-web-dev',
    title: 'Web Application Development',
    description: 'Building modern, fast, and SEO-friendly single-page & multi-page applications using Next.js, React, and Node.js.',
    icon: 'Globe',
    features: [
      'Server-Side Rendering (SSR) & Static Generation (SSG)',
      'Clean TypeScript codebase with scalability',
      'API Integration & Database connection',
      'Deployment to Vercel / Netlify with CI/CD',
    ],
  },
  {
    id: 'service-ui-ux',
    title: 'UI/UX & Interactive Design',
    description: 'Designing elegant, human-centric user interfaces with smooth micro-animations, glassmorphism aesthetics, and dark themes.',
    icon: 'Layout',
    features: [
      'Interactive Figma prototypes & specs',
      'Design System component creation',
      'Responsive design for Mobile, Tablet, and Desktop',
      'Framer Motion smooth scroll & hover animations',
    ],
  },
  {
    id: 'service-frontend-opt',
    title: 'Front-End Optimization & Refactoring',
    description: 'Upgrading existing codebases to improve Lighthouse scores, accessibility, mobile responsiveness, and clean architecture.',
    icon: 'Zap',
    features: [
      'Lighthouse performance tuning (>95 score target)',
      'Legacy Code refactoring to modern React/TypeScript',
      'Cross-browser compatibility testing',
      'SEO metadata & OpenGraph setup',
    ],
  },
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: 'test-1',
    quote: 'Liony stands out as one of the most proactive and detail-oriented analytical talents. Her ability to translate business requirements into intuitive UI designs and product specs is exceptional for a fresh graduate.',
    author: 'Budi Santoso, M.T.',
    role: 'Senior Product Lead & Mentor',
    companyOrOrg: 'Indonesian Tech Academy',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
  {
    id: 'test-2',
    quote: 'During her time as team lead for our campus information systems project, Liony demonstrated exceptional problem-solving skills, data analysis, and technical leadership. Any tech company would be fortunate to hire her.',
    author: 'Dr. Maria H. Simanjuntak',
    role: 'Head of Information Systems Department',
    companyOrOrg: 'Del Institute of Technology',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
  {
    id: 'test-3',
    quote: 'He delivered our startup landing page ahead of schedule with flawless responsiveness and dynamic animations. HR recruiters will definitely be wowed by his portfolio site!',
    author: 'Rian Pratama',
    role: 'Co-Founder & Product Lead',
    companyOrOrg: 'NexaDigital Startup',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
];
