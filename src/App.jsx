import React, { useState } from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Components
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import Loading from "@/pages/Loading"; 

// Pages
import Home from "@/pages/Home";
import About from "@/pages/About";
import Portfolio from "@/pages/Portfolio";
import Experience from "@/pages/Experience";
import Skills from "@/pages/Skills";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loading onFinish={() => setLoading(false)} />}
      
      {!loading && (
        <Router>
          <div className="flex min-h-screen bg-white dark:bg-gray-900">
            {/* Sidebar */}
            <Sidebar />

            {/* Main content area */}
            <div className="flex flex-col flex-1 md:ml-56">
              <main className="flex-1 p-6 pt-6 transition-all duration-300">
                <Routes>
                  <Route path="/me" element={<Home />} />
                  <Route path="/me/aboutme" element={<About />} />
                  <Route path="/me/portfolio" element={<Portfolio />} />
                  <Route path="/me/experience" element={<Experience />} />
                  <Route path="/me/skills" element={<Skills />} />
                  <Route path="/me/blog" element={<Blog />} />
                  <Route path="/me/contact" element={<Contact />} />
				  <Route path="*" element={<Navigate to="/me" replace />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </div>
        </Router>
      )}
    </>
  );
}

export default App;
