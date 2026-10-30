"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Play, Shield, Award, Clock, Zap } from "lucide-react";

interface HeroSectionProps {
  onOpenQuote: () => void;
  onOpenVideo: () => void;
}

export default function HeroSection({ onOpenQuote, onOpenVideo }: HeroSectionProps) {
  return (
    <section id="home" className="relative pt-6 pb-20 md:pb-32 overflow-hidden">
      {/* Background Yellow Curved Wave & Shapes (Exact matching aesthetic) */}
      <div className="absolute top-0 right-0 w-full lg:w-[60%] h-[680px] md:h-[750px] -z-10 pointer-events-none">
        {/* Golden Gradient Glow */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-amber-400 via-amber-300/80 to-amber-100/20 rounded-bl-[120px] md:rounded-bl-[240px] transform origin-top-right transition-all"></div>

        {/* Dynamic Curved SVG Wave */}
        <svg
          className="absolute inset-0 w-full h-full text-amber-400/90"
          viewBox="0 0 800 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M800 0H200C320 180 260 360 420 520C560 660 720 720 800 800V0Z"
            fill="url(#yellow-grad)"
          />
          {/* Subtle Lightning Watermark Outline */}
          <path
            d="M650 40L580 220H680L560 480L590 280H500L650 40Z"
            stroke="rgba(255, 255, 255, 0.45)"
            strokeWidth="8"
            strokeLinejoin="round"
            fill="none"
          />
          <defs>
            <linearGradient id="yellow-grad" x1="800" y1="0" x2="200" y2="800" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FBBF24" />
              <stop offset="0.6" stopColor="#F59E0B" />
              <stop offset="1" stopColor="#FDE68A" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>

        {/* Soft radial aura */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-400/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Description, CTAs, and Trust Badges */}
          <div className="lg:col-span-7 pt-4 md:pt-10 z-10">
            {/* Top Tagline */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-amber-500"></span>
              <span className="text-xs md:text-sm font-bold tracking-wider text-slate-800 uppercase font-['Outfit']">
                Trusted Pan-India Electrical & EPC Experts
              </span>
            </div>

            {/* Main Headline (Exact phrasing and typography match) */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-black text-slate-950 tracking-tight leading-[1.08] font-['Outfit',sans-serif] mb-6">
              Powering India <br />
              with{" "}
              <span className="relative inline-block text-amber-500">
                Safety &amp;
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-amber-300 -z-10"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                  fill="none"
                >
                  <path d="M0 15 Q 50 0 100 15" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                </svg>
              </span>{" "}
              <br />
              Reliability
            </h1>

            {/* Subtitle Tailored for Pan-India Commercial & Govt Projects */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed mb-8 font-medium">
              Turnkey electrical engineering and infrastructure solutions for premier commercial complexes, industrial plants, and central/state government projects across 28+ states. Your safety, compliance, and scale are our highest priorities.
            </p>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-12">
              <button
                onClick={onOpenQuote}
                className="bg-slate-950 hover:bg-amber-500 hover:text-slate-950 text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-200 flex items-center gap-3 shadow-lg shadow-slate-950/20 active:scale-95 group"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenVideo}
                className="inline-flex items-center gap-3 text-slate-900 font-bold text-base hover:text-amber-600 transition-colors group py-2"
              >
                <div className="w-12 h-12 rounded-full bg-amber-400/90 text-slate-950 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 fill-slate-950 text-slate-950 ml-0.5" />
                </div>
                <span>Watch Corporate Film</span>
              </button>
            </div>

            {/* Trust Highlights Bar (Exact recreation of the 3 badges in screenshot) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-2xl pt-2">
              {/* Badge 1: 100% Safety First */}
              <div className="bg-white/90 backdrop-blur-md border border-amber-200/80 rounded-2xl p-3.5 flex items-center gap-3.5 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 shrink-0">
                  <Shield className="w-5 h-5 fill-amber-500 text-amber-600" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">100% Safety</div>
                  <div className="text-[11px] text-slate-500 font-medium">Zero-Harm Protocol</div>
                </div>
              </div>

              {/* Badge 2: Certified Electricians / Engineers */}
              <div className="bg-white/90 backdrop-blur-md border border-amber-200/80 rounded-2xl p-3.5 flex items-center gap-3.5 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 shrink-0">
                  <Award className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Certified Engineers</div>
                  <div className="text-[11px] text-slate-500 font-medium">Class-1 Licensed EPC</div>
                </div>
              </div>

              {/* Badge 3: 24/7 Emergency Support */}
              <div className="bg-white/90 backdrop-blur-md border border-amber-200/80 rounded-2xl p-3.5 flex items-center gap-3.5 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 shrink-0">
                  <Clock className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">24/7 Rapid Support</div>
                  <div className="text-[11px] text-slate-500 font-medium">Pan-India Mobilization</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual with Engineer Image & Circular Rotating Badge */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end mt-4 lg:mt-0">
            <div className="relative w-full max-w-[480px]">
              
              {/* Main Cutout Image Container */}
              <div className="relative z-10 mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 bg-gradient-to-b from-amber-200/40 to-transparent aspect-[4/5] sm:aspect-[3/4]">
                <Image
                  src="/images/engineer-hero.jpg"
                  alt="Nexus Enterprises Chief Electrical Engineer"
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>

              {/* Circular Badge: SAFE • RELIABLE • PROFESSIONAL (Recreating the original black badge) */}
              <div className="absolute top-6 right-2 sm:-right-6 z-20 w-28 h-28 sm:w-32 sm:h-32 bg-slate-950 rounded-full shadow-2xl flex items-center justify-center p-1.5 border-2 border-amber-400 group cursor-pointer animate-float">
                {/* Rotating curved SVG text */}
                <div className="absolute inset-0 w-full h-full animate-spin-slow">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <path
                      id="badgeCircle"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      fill="none"
                    />
                    <text className="text-[8.5px] uppercase font-black fill-amber-400 tracking-[0.22em]">
                      <textPath href="#badgeCircle" startOffset="0%">
                        SAFE • RELIABLE • PROFESSIONAL •
                      </textPath>
                    </text>
                  </svg>
                </div>

                {/* Center Badge Icon */}
                <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-amber-400 border border-amber-400/50 shadow-inner group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6 fill-amber-400 text-amber-400" />
                </div>
              </div>

              {/* Decorative Subtle Shadow Floor */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-8 bg-amber-950/20 rounded-full blur-xl -z-10"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
