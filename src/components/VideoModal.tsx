"use client";

import React from "react";
import { X, Play, Shield, Award, Users, CheckCircle, ExternalLink } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuote: () => void;
}

export default function VideoModal({ isOpen, onClose, onOpenQuote }: VideoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-3xl overflow-hidden shadow-2xl relative text-white animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-800/80 text-white hover:bg-amber-400 hover:text-slate-950 flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video Player Frame Container */}
        <div className="relative aspect-video bg-gradient-to-tr from-slate-950 via-slate-900 to-amber-950/30 flex items-center justify-center group overflow-hidden">
          
          {/* Subtle Animated Glow and Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#fbbf24_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>

          {/* Central Play Showcase */}
          <div className="relative z-10 text-center px-6">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-amber-400/40 group-hover:scale-110 transition-transform cursor-pointer">
              <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-slate-950 ml-1" />
            </div>

            <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 px-3.5 py-1 rounded-full text-xs font-bold mb-3 border border-amber-400/30">
              Nexus Corporate Reel • 2026 Edition
            </div>

            <h3 className="text-xl sm:text-2xl font-black font-['Outfit'] text-white max-w-lg mx-auto">
              Behind the Grid: Powering India&apos;s Next Generation Infrastructure
            </h3>

            <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-md mx-auto">
              Watch our Class-1 electrical teams execute heavy substations, metro traction, and high-rise commercial campuses across 28 states.
            </p>
          </div>

          {/* Bottom video indicator */}
          <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800 pt-3">
            <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
              <Shield className="w-3.5 h-3.5" />
              100% Zero-Harm Safety Footage
            </span>
            <span>Duration: 03:45 • 4K UHD</span>
          </div>
        </div>

        {/* Modal Footer Controls */}
        <div className="p-6 bg-slate-950 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800">
          <div className="text-xs text-slate-400 flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-300">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              Govt. Verified Projects
            </span>
            <span className="flex items-center gap-1 text-slate-300">
              <Users className="w-3.5 h-3.5 text-amber-400" />
              500+ Engineers Nationwide
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onOpenQuote();
              }}
              className="w-full sm:w-auto bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider px-6 py-2.5 rounded-full transition-colors"
            >
              Request Presentation Deck
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
