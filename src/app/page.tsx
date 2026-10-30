"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import PanIndiaFootprint from "@/components/PanIndiaFootprint";
import ProjectsSection from "@/components/ProjectsSection";
import CredentialsSection from "@/components/CredentialsSection";
import QuoteModal from "@/components/QuoteModal";
import VideoModal from "@/components/VideoModal";
import Footer from "@/components/Footer";

export default function Home() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <main className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      {/* Navigation */}
      <Navbar onOpenQuote={() => setQuoteModalOpen(true)} />

      {/* Hero Section (Recreating the original layout 1:1) */}
      <HeroSection
        onOpenQuote={() => setQuoteModalOpen(true)}
        onOpenVideo={() => setVideoModalOpen(true)}
      />

      {/* What We Do Section (Exact 3-card structure) */}
      <WhatWeDoSection onOpenQuote={() => setQuoteModalOpen(true)} />

      {/* Why Choose Us Section (Exact two-column halo layout) */}
      <WhyChooseUsSection onOpenQuote={() => setQuoteModalOpen(true)} />

      {/* Specialized Pan-India Coverage & Metrics */}
      <PanIndiaFootprint />

      {/* Portfolio of Commercial & Government Projects */}
      <ProjectsSection onOpenQuote={() => setQuoteModalOpen(true)} />

      {/* Statutory Empanelments, Class-1 Licensing & OEM Partners */}
      <CredentialsSection onOpenQuote={() => setQuoteModalOpen(true)} />

      {/* Footer (Exact 4-column dark footer) */}
      <Footer onOpenQuote={() => setQuoteModalOpen(true)} />

      {/* Interactive RFP / Quote Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />

      {/* Interactive Video Showreel Modal */}
      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        onOpenQuote={() => setQuoteModalOpen(true)}
      />
    </main>
  );
}
