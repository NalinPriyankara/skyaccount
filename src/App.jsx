// App.jsx
import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

// Lazy loading page components
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const Service = lazy(() => import("./pages/Service"));

// Simple loading fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-black">
    <div className="w-12 h-12 border-4 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin" />
  </div>
);

function App() {
  return (
    <MainLayout>
      <title>Sky Smart Technology | Industrial IoT & Automation Solutions</title>
      <meta name="description" content="Sky Smart Technology specializes in advanced industrial automation, IoT ecosystems, and precision software solutions for a connected future." />
      <meta name="keywords" content="Industrial Automation, IoT Solutions, Smart Technology, Precision Software, Eco Investment, Edge Computing" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Sky Smart Technology | Industrial IoT & Automation" />
      <meta property="og:description" content="Leading the future of industrial automation through integrated IoT ecosystems in Sri Lanka." />
      <meta property="og:image" content="/og-image.jpg" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Sky Smart Technology" />
      <meta name="twitter:description" content="Advanced IoT and Automation solutions for modern industries." />
      
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </MainLayout>
  );
}

export default App;
