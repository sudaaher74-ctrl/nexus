"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, ArrowRight, Users, Sparkles } from "lucide-react";

interface WhyChooseUsSectionProps {
  onOpenQuote: () => void;
}

export default function WhyChooseUsSection({ onOpenQuote }: WhyChooseUsSectionProps) {
  const highlights = [
    {
      title: "Govt. Approved Class-1 Electrical & EPC Contractor",
      desc: "Licensed for central, state, and PSU infrastructure works across India.",
    },
    {
      title: "Upfront BOQ Pricing & Zero Hidden Escalations",
      desc: "Complete transparency in material procurement and turnkey engineering scope.",
    },
    {
      title: "Fast Response & Pan-India Mobilization within 24 Hours",
      desc: "Dedicated project management units located across key industrial hubs.",
    },
    {
      title: "100% ISO 9001:2015 & ISO 45001 Safety Guarantee",
      desc: "Zero-harm site standards with OEM certified components (L&T, ABB, Schneider).",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-slate-50 relative overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-amber-200/40 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Why Choose Us Content */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-8 h-[2px] bg-amber-500"></span>
              <span className="text-xs md:text-sm font-bold tracking-widest text-amber-500 uppercase font-['Outfit']">
                WHY CHOOSE US
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight font-['Outfit'] leading-tight mb-6">
              Executing High-Impact Projects{" "}
              <span className="text-amber-500">With Precision</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 font-normal">
              From central government smart cities and railway corridors to premier commercial towers and industrial complexes, Nexus Enterprises delivers turnkey electrical infrastructure across 28+ Indian states with guaranteed speed and safety.
            </p>

            {/* Checklist items with golden checked circles (Exact match) */}
            <div className="space-y-4 mb-10">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-3.5 group">
                  <div className="w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center text-slate-950 shrink-0 mt-0.5 shadow-sm group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-4 h-4 fill-slate-950 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 font-['Outfit']">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button (Warm Yellow Pill Button matching the screenshot) */}
            <button
              onClick={onOpenQuote}
              className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-base px-8 py-4 rounded-full transition-all duration-200 flex items-center gap-3 shadow-lg shadow-amber-400/30 active:scale-95 group"
            >
              <span>Book Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Column: Visual Halo + Engineer + Handwritten Callout + Floating Stat Badge */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[460px] sm:max-w-[500px]">
              
              {/* Dot Matrix Pattern on the left of circle */}
              <div className="absolute -left-8 top-12 w-24 h-24 grid grid-cols-4 gap-2.5 opacity-40 z-0">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                ))}
              </div>

              {/* Big Golden Circle Halo (Matching the screenshot's circular background) */}
              <div className="relative mx-auto w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full bg-gradient-to-tr from-amber-400 via-amber-300 to-amber-200 shadow-xl flex items-center justify-center overflow-hidden border-8 border-white">
                
                {/* Secondary inner aura */}
                <div className="absolute inset-4 rounded-full border border-amber-500/20"></div>

                {/* Engineer Image */}
                <div className="relative w-full h-full">
                  <Image
                    src="/images/engineer-project.jpg"
                    alt="Nexus Enterprises Site Engineer on Commercial Project"
                    fill
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Handwritten "Powering Your World" with Curvy Arrow */}
              <div className="absolute -top-6 right-0 sm:right-4 z-20 flex flex-col items-end">
                <span className="font-['Caveat',cursive] text-2xl sm:text-3xl font-bold text-slate-800 rotate-6 transform">
                  Powering India's Future ⚡
                </span>
                <svg
                  className="w-16 h-12 text-slate-800 -mr-2 -mt-1 transform rotate-12"
                  viewBox="0 0 60 50"
                  fill="none"
                >
                  <path
                    d="M10 5 C 35 10, 45 25, 30 40 M 30 40 L 25 32 M 30 40 L 38 35"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Floating Dark Card: 500+ Landmark Projects Worldwide / Pan-India (Exact match) */}
              <div className="absolute bottom-4 right-0 sm:-right-4 z-20 bg-slate-950 text-white rounded-2xl p-4 sm:p-5 shadow-2xl border border-slate-800 flex items-center gap-4 animate-float">
                <div className="w-12 h-12 rounded-xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-400 shrink-0">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-amber-400 font-['Outfit'] tracking-tight flex items-center gap-1">
                    500+
                    <Sparkles className="w-4 h-4 text-amber-300" />
                  </div>
                  <div className="text-xs text-slate-300 font-medium">
                    Landmark Projects <br />Delivered Pan-India
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
