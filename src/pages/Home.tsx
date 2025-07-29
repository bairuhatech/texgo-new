import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import IndustrySolutions from "../components/IndustrySolutions";
import GlobalMap from "../components/GlobalMap";
import Contact from "../components/Contact";
import SectionTransition from "../components/SectionTransition";
import { useFeatureUrls } from "../hooks/useFeatureUrls";

const Home: React.FC = () => {
  // Use the dynamic feature URLs hook
  const { handleFeatureClick, validationErrors } = useFeatureUrls(12);

  // Log any configuration errors in development
  React.useEffect(() => {
    if (validationErrors.length > 0 && import.meta.env?.DEV) {
      console.warn("Feature URL Configuration Errors:", validationErrors);
    }
  }, [validationErrors]);

  return (
    <>
      <Hero />

      <SectionTransition variant="wave" color="#f8fafc" height={80} />
      <Features onFeatureClick={handleFeatureClick} />

      <SectionTransition variant="curve" color="#ecfdf5" height={100} />
      <IndustrySolutions />

      <SectionTransition variant="diagonal" color="#f1f5f9" height={90} />
      <GlobalMap />

      <SectionTransition variant="zigzag" color="#f8fafc" height={120} />
      <Contact />

      <SectionTransition variant="wave" color="#111827" height={100} />
    </>
  );
};

export default Home;
