"use client";

import React, { useState } from "react";
import { Zap, Building2, AlertTriangle, ArrowRight, CheckCircle2 } from "lucide-react";

interface WhatWeDoSectionProps {
  onOpenQuote: () => void;
}

export default function WhatWeDoSection({ onOpenQuote }: WhatWeDoSectionProps) {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      badge: "Commercial & Private Sector",
      icon: Zap,
      title: "Commercial EPC & Fitouts",
      shortTitle: "Services",
      description:
        "Complete electrical turnkey installation, HT/LT panels, data center power systems, and maintenance for corporate towers, retail malls, and industrial plants across India.",
      bullets: [
        "High-Rise Commercial Complex Electrification",
        "HT/LT Switchgear & Busduct Systems",
        "Data Center Clean Power & Redundant UPS Grids",
        "Energy Audits & Green Building LEED Compliance",
      ],
    },
    {
      id: 2,
      badge: "Public Sector & Tenders",
      icon: Building2,
      title: "Government Mega-Projects",
      shortTitle: "About Us",
      description:
        "Nexus Enterprises is an approved Class-1 government electrical contractor delivering public infrastructure for CPWD, PWD, Indian Railways, Metro, and Smart City grids.",
      bullets: [
        "Class-1 CPWD & State PWD Registered Contractor",
        "Railway Traction & Metro Rail Electrification",
        "Smart City Highway & Expressway Lighting EPC",
        "Central & State PSU Tender Execution on GeM",
      ],
    },
    {
      id: 3,
      badge: "High-Voltage & Critical Grid",
      icon: AlertTriangle,
      title: "HT Substations & 24/7 Grid Support",
      shortTitle: "Emergency",
      description:
        "Need rapid mobilization? Our high-voltage certified crews operate 24/7 for 11kV to 66kV substation commissioning, transformer overhauls, and emergency grid restoration.",
      bullets: [
        "11kV / 33kV / 66kV Substation Commissioning",
        "Power Transformer Testing & Oil Filtration",
        "Thermal Imaging & Preventive Cable Audits",
        "24/7 Rapid Emergency Response Nationwide",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-amber-500"></span>
            <span className="text-xs md:text-sm font-bold tracking-widest text-amber-500 uppercase font-['Outfit']">
              WHAT WE DO
            </span>
            <span className="w-8 h-[2px] bg-amber-500"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight font-['Outfit'] mb-4">
            Electrical &amp; Infrastructure Services
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            We provide reliable turnkey electrical and infrastructure engineering with an unwavering focus on safety, government compliance, and customer satisfaction across India.
          </p>
        </div>

        {/* 3 Main Cards Grid (Matching the exact look of screenshot) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((card) => {
            const Icon = card.icon;
            const isExpanded = selectedService === card.id;

            return (
              <div
                key={card.id}
                className="group bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-sm hover:shadow-2xl hover:border-amber-300 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Subtle top amber hover line */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 to-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

                <div>
                  {/* Pale Yellow Circular Icon Badge (Exact match) */}
                  <div className="w-16 h-16 rounded-full bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-500 mb-8 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors duration-300 shadow-sm">
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Card Title */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-full">
                      {card.badge}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-950 font-['Outfit'] mb-4 group-hover:text-amber-600 transition-colors">
                    {card.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mb-6 font-normal">
                    {card.description}
                  </p>

                  {/* Bullet points on click / expand */}
                  {isExpanded && (
                    <div className="pt-2 pb-4 space-y-2.5 border-t border-slate-100 animate-in fade-in duration-200">
                      {card.bullets.map((b, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Learn More Action with Circular Arrow Button */}
                <div className="pt-6 border-t border-slate-100/60 mt-auto flex items-center justify-between">
                  <button
                    onClick={() => setSelectedService(isExpanded ? null : card.id)}
                    className="inline-flex items-center gap-3 text-slate-900 font-bold text-sm hover:text-amber-600 transition-colors group/btn"
                  >
                    <span>{isExpanded ? "Show Less" : "Learn More"}</span>
                    <div className="w-8 h-8 rounded-full bg-amber-400 group-hover/btn:bg-amber-500 text-slate-950 flex items-center justify-center transition-transform group-hover/btn:translate-x-1 shadow-sm">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </button>

                  <button
                    onClick={onOpenQuote}
                    className="text-xs font-semibold text-slate-500 hover:text-amber-600 underline"
                  >
                    Inquire
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pan-India Capability Banner */}
        <div className="mt-14 bg-gradient-to-r from-amber-500/10 via-amber-400/20 to-amber-500/10 rounded-2xl p-6 border border-amber-200/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-400 flex items-center justify-center text-slate-950 font-black text-xl shrink-0">
              🇮🇳
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-base">
                Executing Commercial &amp; Government Works Across All 28 States
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                Single-point EPC accountability with local branch offices in Delhi, Mumbai, Bengaluru, Kolkata, and Hyderabad.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenQuote}
            className="shrink-0 bg-slate-950 hover:bg-amber-500 hover:text-slate-950 text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full transition-all"
          >
            Submit RFP / Tender Spec
          </button>
        </div>

      </div>
    </section>
  );
}
