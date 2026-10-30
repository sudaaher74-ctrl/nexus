"use client";

import React, { useState } from "react";
import { Building, Landmark, Zap, Shield, MapPin, ArrowRight } from "lucide-react";

interface ProjectsSectionProps {
  onOpenQuote: () => void;
}

export default function ProjectsSection({ onOpenQuote }: ProjectsSectionProps) {
  const [activeTab, setActiveTab] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "commercial", label: "Commercial Towers & IT Parks" },
    { id: "govt", label: "Govt & PSU Mega Tenders" },
    { id: "substations", label: "HT/LT Substations (11-66kV)" },
    { id: "smartcity", label: "Smart City & Expressways" },
  ];

  const projects = [
    {
      id: 1,
      category: "commercial",
      title: "DLF Cyber Horizon Tech Tower",
      location: "Gurugram, Delhi NCR",
      client: "DLF Commercial Assets",
      scope: "Turnkey internal electrification, 33kV substation, 4000A busduct, smart BMS & lighting automation.",
      scale: "2.4 Million Sq. Ft.",
      voltage: "33kV / 415V",
      status: "Completed & Commissioned",
      badge: "Commercial EPC",
    },
    {
      id: 2,
      category: "govt",
      title: "CPWD Administrative Complex & High Court Extension",
      location: "Lucknow, Uttar Pradesh",
      client: "Central Public Works Dept (CPWD)",
      scope: "Complete HT/LT grid distribution, dual 2500 kVA transformer installation, emergency DG synchronization, solar rooftop.",
      scale: "₹48.5 Crore EPC",
      voltage: "11kV / 433V",
      status: "Commissioned ahead of schedule",
      badge: "Govt. Tender",
    },
    {
      id: 3,
      category: "substations",
      title: "66kV Turnkey Grid Substation & Switchyard",
      location: "Sanand Industrial Estate, Gujarat",
      client: "Gujarat Energy Transmission Corp (GETCO) & Auto Hub",
      scope: "Civil foundation, 66/11kV power transformer installation, GIS panels, SCADA automation & protection relays.",
      scale: "100 MVA Capacity",
      voltage: "66kV / 11kV",
      status: "Active & Monitored",
      badge: "High Voltage Substation",
    },
    {
      id: 4,
      category: "smartcity",
      title: "Delhi-Mumbai Expressway Smart Illumination & Feeder Grid",
      location: "Rajasthan & MP Border Stretch",
      client: "National Highways Authority of India (NHAI)",
      scope: "Solar hybrid high-mast lighting, 120km underground cable laying, centralized IoT energy monitoring nodes.",
      scale: "120 km Stretch",
      voltage: "LT 415V / Solar Hybrid",
      status: "Delivered & Maintained",
      badge: "Smart City Infrastructure",
    },
    {
      id: 5,
      category: "commercial",
      title: "Nexus One Global IT Park & Data Center Wings",
      location: "Whitefield, Bengaluru, Karnataka",
      client: "Tier-1 Multinational IT Tenant",
      scope: "Tier-III Data Center dual-feed power architecture, harmonic mitigation, dynamic UPS tie-ins, zero-downtime cutover.",
      scale: "12 MW Critical Load",
      voltage: "33kV Dual Redundant",
      status: "Commissioned",
      badge: "Mission Critical EPC",
    },
    {
      id: 6,
      category: "govt",
      title: "Indian Railways Traction Electrification & Station Modernization",
      location: "Bhopal Division, Madhya Pradesh",
      client: "Indian Railways / CORE",
      scope: "Trackside 25kV OHE feeder switching posts, modern LED passenger concourse illumination, 100% fail-safe backup.",
      scale: "95 Track Kilometers",
      voltage: "25kV AC Traction",
      status: "Safety Certified by CRS",
      badge: "Railways & Transit",
    },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-8 h-[2px] bg-amber-500"></span>
              <span className="text-xs md:text-sm font-bold tracking-widest text-amber-500 uppercase font-['Outfit']">
                PORTFOLIO OF EXCELLENCE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight font-['Outfit']">
              Featured Landmark Projects
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl">
              From marquee corporate headquarters to high-security government installations across India.
            </p>
          </div>

          <button
            onClick={onOpenQuote}
            className="inline-flex items-center gap-2 bg-slate-950 hover:bg-amber-500 hover:text-slate-950 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-all shrink-0 shadow-sm"
          >
            <span>Request Full Project Dossier</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2.5 mb-10 pb-2 border-b border-slate-100">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeTab === cat.id
                  ? "bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-amber-400 hover:shadow-xl transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider bg-amber-100 text-amber-800 px-3 py-1 rounded-full">
                    {proj.badge}
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
                    {proj.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-950 font-['Outfit'] mb-2 group-hover:text-amber-600 transition-colors">
                  {proj.title}
                </h3>

                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold mb-3">
                  <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>{proj.location}</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-slate-700">{proj.client}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                  {proj.scope}
                </p>
              </div>

              {/* Project Metadata Footer */}
              <div className="pt-4 border-t border-slate-200/60 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <div className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Scale / Scope</div>
                  <div className="font-bold text-slate-900 mt-0.5">{proj.scale}</div>
                </div>
                <div>
                  <div className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Voltage Class</div>
                  <div className="font-bold text-slate-900 mt-0.5">{proj.voltage}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
