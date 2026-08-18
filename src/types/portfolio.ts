export interface PersonalInfo {
  name: string;
  titles: string[];
  bio: string;
  shortBio: string;
  avatarUrl: string;
  resumeUrl: string;
  email: string;
  phone: string;
  whatsapp: string;
  location: string;
  status: string;
  github: string;
  linkedin: string;
  instagram: string;
}

export interface StatItem {
  label: string;
  value: string;
  subtext: string;
  icon: string;
}

export interface PersonalValue {
  title: string;
  description: string;
  icon: string;
}

export interface SkillItem {
  name: string;
  level: number; // 0 to 100
  iconName: string;
  badgeText?: string;
  category: 'analytics' | 'business' | 'bi' | 'database' | 'tools';
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'all' | 'frontend' | 'fullstack' | 'mobile';
  shortDescription: string;
  fullDescription: string;
  thumbnail: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  role: string;
  metrics?: string;
  features: string[];
  featured: boolean;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  type: 'Internship' | 'Bootcamp' | 'Freelance' | 'Campus Project' | 'Organization';
  description: string;
  achievements: string[];
  skillsUsed: string[];
}

export interface EducationItem {
  university: string;
  major: string;
  degree: string;
  gpa: string;
  maxGpa: string;
  period: string;
  location: string;
  achievements: string[];
  organizations: string[];
  courses: string[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId: string;
  credentialUrl: string;
  image: string;
  skills: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  event: string;
  category: 'Hackathon' | 'Competition' | 'Seminar' | 'Workshop' | 'Honor';
  date: string;
  rank?: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  companyOrOrg: string;
  avatar: string;
  rating: number;
}
