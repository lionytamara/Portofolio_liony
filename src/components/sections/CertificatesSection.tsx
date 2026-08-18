'use client';

import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { Modal } from '../ui/Modal';
import { certificatesData } from '../../data/portfolioData';
import { CertificateItem } from '../../types/portfolio';
// PERBAIKAN: Menghapus CheckCircle2 karena tidak digunakan
import { Award, ExternalLink, Calendar, ShieldCheck } from 'lucide-react';

export const CertificatesSection: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  return (
    <section id="certificates" className="py-24 relative bg-[#070c18]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText="Verified Credentials"
          title="Certificates & License"
          subtitle="Professional industry certifications earned from Meta, AWS, Google, and national developer platforms."
        />

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificatesData.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="glass-card rounded-2xl overflow-hidden border border-slate-800/80 hover:border-emerald-500/50 transition-all duration-300 flex flex-col group cursor-pointer hover:-translate-y-2"
            >
              {/* Image Preview */}
              <div className="relative h-40 overflow-hidden bg-[#070c18]">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070c18] via-[#070c18]/20 to-transparent" />
                <div className="absolute top-3 left-3 p-2 rounded-xl bg-[#070c18]/80 backdrop-blur-md border border-slate-800 text-emerald-400">
                  <Award className="w-4 h-4" />
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider">
                    {cert.issuer}
                  </span>
                  <h3 className="text-sm font-bold text-slate-100 mt-1 mb-2 group-hover:text-emerald-300 transition-colors line-clamp-2">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400 mb-4">
                    <Calendar className="w-3 h-3 text-slate-500" />
                    <span>Issued {cert.issueDate}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-emerald-400 font-semibold">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Modal */}
        <Modal
          isOpen={!!selectedCert}
          onClose={() => setSelectedCert(null)}
          title={selectedCert?.title || 'Certificate Proof'}
        >
          {selectedCert && (
            <div className="flex flex-col gap-6">
              <a
                href={selectedCert.image}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full h-auto max-h-[60vh] rounded-xl overflow-hidden border border-slate-800 group/img block cursor-zoom-in bg-slate-950"
                title="Click to view full size"
              >
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-full max-h-[60vh] object-contain mx-auto"
                />
                <div className="absolute inset-0 bg-[#070c18]/40 opacity-0 group-hover/img:opacity-100 flex items-center justify-center transition-opacity duration-200">
                  <span className="px-3 py-1.5 rounded-lg bg-emerald-500 text-white text-xs font-bold shadow-lg">
                    Click to Open Full Image
                  </span>
                </div>
              </a>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    Issuer: {selectedCert.issuer}
                  </span>
                  <span className="text-xs text-slate-400">
                    Issued: {selectedCert.issueDate}
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 mb-4">
                  Credential ID: <span className="text-emerald-400">{selectedCert.credentialId}</span>
                </div>

                <h5 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                  Skills Validated:
                </h5>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedCert.skills.map((skill, idx) => (
                    <Badge key={idx} variant="emerald">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <a
                  href={selectedCert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xs shadow-md"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Verify Credential Certificate</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}
        </Modal>

      </div>
    </section>
  );
};
