import React from "react";
import { HeroSection } from "./HeroSection";
import { EliteProgramsSection } from "./EliteProgramsSection";
import { StatsSection } from "./StatsSection";
import { FacilitySection } from "./FacilitySection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <EliteProgramsSection />
      <StatsSection />
      <FacilitySection />
    </>
  );
}
