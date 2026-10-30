"use client";

import React from "react";
import { ShieldCheck, Award, FileCheck, CheckCircle2, Building, ExternalLink } from "lucide-react";

interface CredentialsSectionProps {
  onOpenQuote: () => void;
}

export default function CredentialsSection({ onOpenQuote }: CredentialsSectionProps) {
  const credentials = [
    {
      title: "Class-1 Government Contractor",
      authority: "Central & State Electrical Licensing Boards",
      regNo: "LIC/DEL/EPC/2026/8942-A",
      desc: "Authorized for unlimited financial tendering capacity across HT/LT works in all Indian states and Union Territories.",
      tag: "Highest Grade",
    },
    {
      title: "CPWD & State PWD Empaneled",
      authority: "Central Public Works Department & State Bodies",
      regNo: "CPWD/ELECT/COMPOSITE/C-1",
      desc: "Pre-qualified for executing administrative courts, ministry complexes, defense enclaves, and public transit terminals.",
      tag: "Pre-Qualified",
    },
    {
      title: "GeM (Govt e-Marketplace) Verified",
      authority: "Ministry of Commerce & Industry, GoI",
      regNo: "GEM/VENDOR/NXE/9184",
      desc: "Direct procurement ready with full GST, PAN, PF, ESI, and statutory clearance for transparent public bidding.",
      tag: "GeM Prime",
    },
    {
      title: "Triple ISO Certified",
      authority: "ISO 9001:2015 • ISO 14001:2015 • ISO 45001:2018",
      regNo: "CERT/IND/SAFETY/7721",
      desc: "Audited quality control, zero-harm health & safety protocols, and environmentally conscious electrical engineering.",
      tag: "Audited",
    },
  ];

  const oemPartners = [
    "Schneider Electric",
    "Larsen & Toubro (L&T)",
    "ABB India",
    "Siemens",
    "Polycab Wires",
    "Havells Industrial",
    "Legrand",
    "KEI Industries",
  ];

  return (
    <section id="credentials" className="py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-amber-500"></span>
            <span className="text-xs md:text-sm font-bold tracking-widest text-amber-500 uppercase font-['Outfit']">
              STATUTORY COMPLIANCE &amp; ACCREDITATION
            </span>
            <span className="w-8 h-[2px] bg-amber-500"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight font-['Outfit'] mb-4">
            Government Empanelment &amp; Certifications
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            Nexus Enterprises adheres strictly to Indian Electricity Rules 1956, CEA Regulations, National Building Code (NBC 2016), and statutory labor safety norms.
          </p>
        </div>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {credentials.map((c, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-lg hover:border-amber-400 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full">
                    {c.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-950 font-['Outfit'] mb-1">
                  {c.title}
                </h3>
                <div className="text-xs font-semibold text-amber-600 mb-2">
                  {c.authority}
                </div>
                <div className="text-[11px] font-mono bg-slate-100 px-2.5 py-1 rounded text-slate-700 mb-3">
                  {c.regNo}
                </div>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  {c.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 mt-4 flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Verified Active Pan-India</span>
              </div>
            </div>
          ))}
        </div>

        {/* OEM Strategic Sourcing Partners */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm">
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Direct OEM Procurement Alliances &amp; Tier-1 Supply Chains
            </span>
            <p className="text-xs text-slate-400 mt-1">
              Guaranteed genuine factory-tested equipment with manufacturer warranties and test certificates
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            {oemPartners.map((oem, index) => (
              <div
                key={index}
                className="px-5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 font-bold text-xs sm:text-sm tracking-wide shadow-xs hover:border-amber-400 hover:text-amber-600 transition-colors"
              >
                {oem}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
