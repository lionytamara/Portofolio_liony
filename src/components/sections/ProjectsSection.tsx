'use client';

import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { Modal } from '../ui/Modal';
import { projectsData } from '../../data/portfolioData';
import { ProjectItem } from '../../types/portfolio';
import {
  Github,
  ExternalLink,
  Info,
  CheckCircle2,
  Sparkles,
  Layers,
} from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-24 relative bg-[#070c18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText="Featured Work"
          title="Highlighted Projects"
          subtitle="Explore selected applications demonstrating data analytical insights, clean code, and user-centered design."
        />

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden border border-slate-800/80 hover:border-emerald-500/50 transition-all duration-300 flex flex-col group hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10"
            >
              {/* Thumbnail Container with Hover Zoom */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-900">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070c18] via-[#070c18]/20 to-transparent opacity-80" />

                {project.featured && (
                  <div className="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/90 text-white text-[10px] font-bold shadow-md">
                    <Sparkles className="w-3 h-3" />
                    <span>Featured</span>
                  </div>
                )}

                {/* Quick Action Overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 bg-[#070c18]/70 backdrop-blur-xs transition-opacity duration-300">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="p-3 rounded-xl bg-emerald-500 text-white hover:bg-emerald-400 transition-colors shadow-lg"
                    title="View Details"
                  >
                    <Info className="w-5 h-5" />
                  </button>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-800 text-white hover:bg-slate-700 transition-colors shadow-lg"
                    title="Live Preview"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-800 text-white hover:bg-slate-700 transition-colors shadow-lg"
                    title="GitHub Code"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-100 mb-2 group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm line-clamp-2 leading-relaxed mb-4">
                    {project.shortDescription}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.slice(0, 4).map((tag, i) => (
                      <Badge key={i} variant="emerald" size="sm">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="text-[10px] text-slate-500 font-semibold align-self-center px-1">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 group/btn"
                  >
                    <span>Read Details</span>
                    <Info className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-slate-400 hover:text-white transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-slate-400 hover:text-emerald-400 transition-colors"
                      aria-label="Live Demo Website"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        <Modal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject?.title || 'Project Details'}
        >
          {selectedProject && (
            <div className="flex flex-col gap-6">
              <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden border border-slate-800">
                <img
                  src={selectedProject.thumbnail}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-emerald-400 mb-1">
                  Role: {selectedProject.role}
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {selectedProject.fullDescription}
                </p>

                {selectedProject.metrics && (
                  <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-300 mb-4">
                    ⚡ Key Metric: {selectedProject.metrics}
                  </div>
                )}

                <h5 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                  Key Features Implemented:
                </h5>
                <ul className="flex flex-col gap-2 mb-6">
                  {selectedProject.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <h5 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                  Technologies Used:
                </h5>
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tags.map((tag, idx) => (
                    <Badge key={idx} variant="emerald">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xs shadow-md"
                  >
                    <span>View Live Demo</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 hover:bg-slate-800 font-bold text-xs"
                  >
                    <Github className="w-4 h-4" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </Modal>

      </div>
    </section>
  );
};
