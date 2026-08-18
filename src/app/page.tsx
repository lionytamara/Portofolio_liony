'use client';

import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { SkillsSection } from '../components/sections/SkillsSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { ExperienceSection } from '../components/sections/ExperienceSection';
import { EducationSection } from '../components/sections/EducationSection';
import { CertificatesSection } from '../components/sections/CertificatesSection';
import { ContactSection } from '../components/sections/ContactSection';

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <CertificatesSection />
      <ContactSection />
    </div>
  );
}
