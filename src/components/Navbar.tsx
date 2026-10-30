"use client";

import React, { useState, useEffect } from "react";
import { Zap, ChevronDown, Phone, Menu, X, ArrowRight, ShieldCheck, MapPin } from "lucide-react";

interface NavbarProps {
  onOpenQuote: () => void;
}

export default function Navbar({ onOpenQuote }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Announcement Bar for Pan-India Credentials */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-amber-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              Govt. Approved Class-1 Electrical & EPC Contractor
            </span>
            <span className="flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              Pan-India Operations across 28+ States & UTs
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Tenders & Commercial Desk:</span>
            <a href="tel:+919810023456" className="text-white hover:text-amber-400 font-semibold transition-colors flex items-center gap-1">
              <Phone className="w-3 h-3 text-amber-400" />
              +91 (011) 4892-7000
            </a>
            <span className="text-slate-600">|</span>
            <span className="text-amber-400">ISO 9001:2015 & 45001 Certified</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-md py-3.5" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-amber-400 flex items-center justify-center text-slate-950 shadow-md group-hover:scale-105 transition-transform">
                <Zap className="w-6 h-6 fill-slate-950 text-slate-950" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight text-slate-950 font-['Outfit',sans-serif] flex items-center">
                  Nexus<span className="text-amber-500 ml-1">Enterprises</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 -mt-1">
                  Pan-India EPC & Infrastructure
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 text-[15px] font-semibold text-slate-800">
              <a href="#home" className="text-amber-600 hover:text-amber-700 transition-colors">
                Home
              </a>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesDropdown(true)}
                onMouseLeave={() => setServicesDropdown(false)}
              >
                <button className="flex items-center gap-1.5 hover:text-amber-600 transition-colors py-2">
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdown ? "rotate-180 text-amber-600" : ""}`} />
                </button>

                {servicesDropdown && (
                  <div className="absolute top-full -left-4 w-72 bg-white rounded-2xl shadow-xl border border-slate-100 p-3 py-2 text-sm z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <a
                      href="#services"
                      className="block px-3 py-2.5 rounded-xl hover:bg-amber-50 hover:text-amber-600 transition-colors"
                      onClick={() => setServicesDropdown(false)}
                    >
                      <div className="font-bold text-slate-900">Commercial EPC & Fit-Outs</div>
                      <div className="text-xs text-slate-500">Malls, IT parks, towers & corporate HQ</div>
                    </a>
                    <a
                      href="#services"
                      className="block px-3 py-2.5 rounded-xl hover:bg-amber-50 hover:text-amber-600 transition-colors"
                      onClick={() => setServicesDropdown(false)}
                    >
                      <div className="font-bold text-slate-900">Government Mega-Projects</div>
                      <div className="text-xs text-slate-500">CPWD, PWD, Railways & Smart City grids</div>
                    </a>
                    <a
                      href="#services"
                      className="block px-3 py-2.5 rounded-xl hover:bg-amber-50 hover:text-amber-600 transition-colors"
                      onClick={() => setServicesDropdown(false)}
                    >
                      <div className="font-bold text-slate-900">HT/LT Substations & Transmission</div>
                      <div className="text-xs text-slate-500">11kV to 66kV turnkey installations</div>
                    </a>
                    <a
                      href="#services"
                      className="block px-3 py-2.5 rounded-xl hover:bg-amber-50 hover:text-amber-600 transition-colors"
                      onClick={() => setServicesDropdown(false)}
                    >
                      <div className="font-bold text-slate-900">Industrial Power & Automation</div>
                      <div className="text-xs text-slate-500">Heavy plant electrification & busducts</div>
                    </a>
                  </div>
                )}
              </div>

              <a href="#about" className="hover:text-amber-600 transition-colors">
                About Us
              </a>
              <a href="#projects" className="hover:text-amber-600 transition-colors">
                Projects
              </a>
              <a href="#credentials" className="hover:text-amber-600 transition-colors">
                Govt Tenders
              </a>
              <a href="#contact" className="hover:text-amber-600 transition-colors">
                Contact
              </a>
            </nav>

            {/* CTA Button */}
            <div className="hidden sm:flex items-center gap-4">
              <button
                onClick={onOpenQuote}
                className="bg-slate-950 hover:bg-amber-500 hover:text-slate-950 text-white font-bold text-sm px-6 py-3 rounded-full transition-all duration-200 flex items-center gap-2 shadow-sm hover:shadow-lg hover:shadow-amber-500/20 active:scale-95"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-800 hover:text-amber-600 transition-colors"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col gap-4 text-base font-semibold text-slate-800">
              <a
                href="#home"
                onClick={() => setMobileMenuOpen(false)}
                className="text-amber-600 py-1"
              >
                Home
              </a>
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-amber-600 py-1"
              >
                Services (Commercial & Govt)
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-amber-600 py-1"
              >
                About Us
              </a>
              <a
                href="#projects"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-amber-600 py-1"
              >
                Pan-India Projects
              </a>
              <a
                href="#credentials"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-amber-600 py-1"
              >
                Govt Tenders & Accreditations
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-amber-600 py-1"
              >
                Contact
              </a>

              <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuote();
                  }}
                  className="w-full bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold py-3 rounded-full flex items-center justify-center gap-2"
                >
                  <span>Request Project Quote / RFP</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="tel:+919810023456"
                  className="text-center text-sm font-semibold text-slate-600 flex items-center justify-center gap-2 py-1"
                >
                  <Phone className="w-4 h-4 text-amber-500" />
                  +91 (011) 4892-7000
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
