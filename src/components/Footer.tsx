"use client";

import React from "react";
import { Zap, Phone, Mail, MapPin, ArrowRight, ShieldCheck, Heart } from "lucide-react";

interface FooterProps {
  onOpenQuote: () => void;
}

export default function Footer({ onOpenQuote }: FooterProps) {
  return (
    <footer id="contact" className="bg-[#0b0f19] text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid (Exact layout from the screenshot) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-slate-800/80">
          
          {/* Column 1: Brand & About (Col-span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-amber-400 flex items-center justify-center text-slate-950 shadow-md">
                <Zap className="w-5 h-5 fill-slate-950 text-slate-950" />
              </div>
              <span className="text-2xl font-black tracking-tight text-white font-['Outfit']">
                Nexus<span className="text-amber-400 ml-0.5">Enterprises</span>
              </span>
            </a>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Powering India&apos;s commercial complexes, government mega-projects, and public infrastructure with safe, reliable, and professional turnkey electrical engineering.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-amber-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Govt. Approved Class-1 Electrical Contractor</span>
            </div>
          </div>

          {/* Column 2: Quick Links (Col-span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-base font-bold text-white font-['Outfit'] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a href="#home" className="hover:text-amber-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-amber-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#credentials" className="hover:text-amber-400 transition-colors">
                  Govt Tenders
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Services (Col-span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-base font-bold text-white font-['Outfit'] mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Electrical Installation (HT/LT)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Commercial Fit-Outs &amp; Busducts
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Government Infrastructure &amp; Tenders
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Substation Maintenance &amp; Overhaul
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Emergency 24/7 Grid Mobilization
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Safety Inspection &amp; CEA Audits
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us (Col-span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-base font-bold text-white font-['Outfit'] mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                <div>
                  <a href="tel:+919810023456" className="text-white hover:text-amber-400 transition-colors font-medium">
                    +91 (011) 4892-7000
                  </a>
                  <div className="text-xs text-slate-500">+91 98100 23456 (24/7 Desk)</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                <div>
                  <a href="mailto:tenders@nexusenterprises.in" className="text-white hover:text-amber-400 transition-colors break-all">
                    tenders@nexusenterprises.in
                  </a>
                  <div className="text-xs text-slate-500">info@nexusenterprises.in</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                <span className="text-slate-300 text-xs leading-relaxed">
                  Corporate HQ: 8th Floor, Nexus Towers, Barakhamba Road, Connaught Place, New Delhi - 110001
                  <br />
                  <span className="text-amber-400/80 font-medium mt-1 block">
                    Hubs: Mumbai • Bengaluru • Ahmedabad • Kolkata
                  </span>
                </span>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={onOpenQuote}
                className="w-full bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>Request Fast Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 Nexus Enterprises Ltd. All Rights Reserved. Pan-India EPC &amp; Engineering.
          </div>

          <div className="flex flex-wrap items-center gap-4 text-slate-400">
            <a href="#home" className="hover:text-amber-400 transition-colors">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#home" className="hover:text-amber-400 transition-colors">
              Terms &amp; Conditions
            </a>
            <span>|</span>
            <span className="text-amber-400">Class-1 License: DL/EPC/2026/8942</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
