"use client";

import React, { useState } from "react";
import { X, Send, ShieldCheck, CheckCircle2, Phone, Mail, Building, MapPin, Zap } from "lucide-react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    projectType: "Commercial Turnkey EPC",
    state: "Delhi NCR",
    budget: "₹2 Cr - ₹10 Cr",
    scope: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // simulate receipt
    }, 500);
  };

  const states = [
    "Delhi NCR (National Capital Region)",
    "Maharashtra (Mumbai, Pune, Nagpur)",
    "Karnataka (Bengaluru, Mysuru)",
    "Gujarat (Ahmedabad, Surat, Vadodara)",
    "Tamil Nadu (Chennai, Coimbatore)",
    "Uttar Pradesh (Noida, Lucknow, Kanpur)",
    "Telangana (Hyderabad)",
    "West Bengal (Kolkata)",
    "Rajasthan (Jaipur, Jodhpur)",
    "Madhya Pradesh (Bhopal, Indore)",
    "Punjab & Haryana (Chandigarh, Gurugram)",
    "Other Indian State / UT",
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-2xl overflow-hidden my-8 relative animate-in zoom-in-95 duration-200">
        
        {/* Top Header Banner */}
        <div className="bg-slate-950 text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-9 h-9 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 mb-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Zap className="w-4 h-4 fill-amber-400" />
            Class-1 Pan-India EPC &amp; Tender Desk
          </div>

          <h3 className="text-2xl sm:text-3xl font-black font-['Outfit'] text-white">
            Request Project Proposal &amp; Tender Audit
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-lg">
            For commercial towers, government infrastructure tenders, and high-voltage industrial execution across 28+ states.
          </p>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="py-12 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 font-['Outfit'] mb-2">
                Inquiry Successfully Logged!
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
                Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. Our Senior Tender &amp; EPC Director will review your requirements for <span className="font-semibold text-slate-900">{formData.organization || "your project"}</span> and contact you within 2 business hours.
              </p>
              <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full text-xs text-slate-700 font-mono">
                Tender Inquiry Token: #NXE-2026-{(Math.random() * 90000 + 10000).toFixed(0)}
              </div>
              <div className="mt-8">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold px-8 py-3 rounded-full text-sm"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
                  />
                </div>

                {/* Organization / Dept */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Organization / Govt Dept *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. DLF / CPWD / Reliance"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Official Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Mobile / Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Project Category */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Project Category
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                  >
                    <option value="Commercial Turnkey EPC">Commercial Turnkey EPC &amp; Fit-Outs</option>
                    <option value="Central/State Govt Tender">Central / State Govt Tender (CPWD/PWD)</option>
                    <option value="HT Substation (11kV-66kV)">HT/LT Substation &amp; Transformers (11-66kV)</option>
                    <option value="Smart City / Expressway">Smart City, Metro &amp; Highway Lighting</option>
                    <option value="Industrial Automation">Industrial Plant Automation &amp; Busducts</option>
                    <option value="Periodic Safety Audit">Periodic CEA Electrical Safety Audit</option>
                  </select>
                </div>

                {/* State Location */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Project Location (State/UT)
                  </label>
                  <select
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                  >
                    {states.map((st, i) => (
                      <option key={i} value={st}>
                        {st}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Estimated Budget */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Estimated Project Scale / Tender Value
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    "₹50L - ₹2 Cr",
                    "₹2 Cr - ₹10 Cr",
                    "₹10 Cr - ₹50 Cr",
                    "₹50 Cr+ Mega EPC",
                  ].map((b) => (
                    <button
                      type="button"
                      key={b}
                      onClick={() => setFormData({ ...formData, budget: b })}
                      className={`py-2 px-2 text-xs font-bold rounded-xl border transition-all text-center ${
                        formData.budget === b
                          ? "bg-amber-400 border-amber-500 text-slate-950 shadow-sm"
                          : "border-slate-200 text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Scope / Tender Reference */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Scope of Work / Tender Ref. No.
                </label>
                <textarea
                  rows={3}
                  placeholder="Provide brief details on project area, voltage requirements, BOQ details, or tender submission deadlines..."
                  value={formData.scope}
                  onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
                ></textarea>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-slate-950 hover:bg-amber-500 hover:text-slate-950 text-white font-black py-4 rounded-full transition-all text-sm flex items-center justify-center gap-2 shadow-lg active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit RFP for Instant Engineering Review</span>
                </button>

                <p className="text-[11px] text-center text-slate-500 mt-2 flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
                  Your project data and tender specs are protected by our strict Pan-India NDA protocol.
                </p>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
