"use client";

import React, { useState } from "react";
import { MapPin, Building, ShieldCheck, Zap, TrendingUp, CheckCircle } from "lucide-react";

export default function PanIndiaFootprint() {
  const [activeRegion, setActiveRegion] = useState<string>("all");

  const regions = [
    { id: "all", label: "Pan-India (All 28 States)" },
    { id: "north", label: "North Region (Delhi NCR, UP, PB, HR)" },
    { id: "west", label: "West Region (MH, GJ, GA, RJ)" },
    { id: "south", label: "South Region (KA, TN, TS, AP, KL)" },
    { id: "east", label: "East & Central (WB, OD, MP, CG, NE)" },
  ];

  const metrics = [
    { number: "28+", label: "States & UTs Covered", desc: "Active project execution network" },
    { number: "₹1,250+ Cr", label: "Tender & EPC Value", desc: "Successfully delivered since inception" },
    { number: "450+", label: "Government Tenders", desc: "CPWD, PWD, Railways & Metro contracts" },
    { number: "99.8%", label: "On-Time Commissioning", desc: "Rigorous milestone delivery" },
  ];

  const cityHubs = [
    { city: "New Delhi (HQ)", state: "Delhi NCR", type: "Corporate HQ & Northern EPC Base", projects: "85+ Commercial & Central Govt" },
    { city: "Mumbai & MMR", state: "Maharashtra", type: "Western Operations & High-Rise Hub", projects: "95+ Commercial & Industrial" },
    { city: "Bengaluru", state: "Karnataka", type: "Southern Tech Park & Data Center Division", projects: "70+ IT SEZ & Substation Works" },
    { city: "Hyderabad", state: "Telangana", type: "Pharma City & Smart Grid Infrastructure", projects: "55+ Govt & Commercial" },
    { city: "Ahmedabad", state: "Gujarat", type: "Industrial Corridors & Solar Integration", projects: "60+ Industrial Plants" },
    { city: "Kolkata", state: "West Bengal", type: "Eastern Hub & Railway Traction Power", projects: "45+ Infrastructure Works" },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Subtle Map Grid Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fbbf24_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-amber-400"></span>
            <span className="text-xs md:text-sm font-bold tracking-widest text-amber-400 uppercase font-['Outfit']">
              PAN-INDIA PRESENCE &amp; SCALE
            </span>
            <span className="w-8 h-[2px] bg-amber-400"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight font-['Outfit'] mb-4 text-white">
            Powering Mega-Projects Across{" "}
            <span className="text-amber-400">28+ Indian States</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            With centralized engineering oversight and localized execution squads, we mobilize heavy machinery, HT equipment, and manpower anywhere in India within 24 to 48 hours.
          </p>
        </div>

        {/* 4 Big Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((item, index) => (
            <div
              key={index}
              className="bg-slate-800/80 backdrop-blur-md rounded-2xl p-6 border border-slate-700/80 hover:border-amber-400/60 transition-all text-center group"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-amber-400 font-['Outfit'] mb-2 group-hover:scale-105 transition-transform">
                {item.number}
              </div>
              <div className="text-base font-bold text-white mb-1">
                {item.label}
              </div>
              <div className="text-xs text-slate-400">
                {item.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Regional Hubs & Infrastructure Breakdown */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-3xl p-6 sm:p-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-700">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-['Outfit']">
                Regional Engineering Commands &amp; Operational Hubs
              </h3>
              <p className="text-sm text-slate-400 mt-1">
                Equipped with licensed site supervisors, test testing kits, and rapid deployment vans.
              </p>
            </div>
            <div className="flex items-center gap-2 bg-amber-400/10 text-amber-400 px-4 py-2 rounded-full border border-amber-400/30 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4" />
              Pan-India Class-1 License Active
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cityHubs.map((hub, i) => (
              <div
                key={i}
                className="bg-slate-900/90 rounded-2xl p-5 border border-slate-700/60 hover:border-amber-400/50 transition-colors flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0 border border-amber-400/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white text-base">{hub.city}</span>
                    <span className="text-[10px] uppercase font-bold bg-slate-800 text-amber-300 px-2 py-0.5 rounded">
                      {hub.state}
                    </span>
                  </div>
                  <div className="text-xs text-slate-400 mt-1 font-medium">{hub.type}</div>
                  <div className="text-xs text-amber-400/90 font-semibold mt-2 flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" />
                    {hub.projects}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
