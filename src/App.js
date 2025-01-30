import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import RegisterForm from "./components/Auth/RegisterForm";
import SetupOrganization from "./components/Organization/SetupOrganization";
import ChatbotIntegration from "./components/Chatbot/ChatbotIntegration";
import ScrapingStatus from "./components/Organization/WebpageScrapingStatus";
import TestIntegrationScreen from "./components/Chatbot/TestIntegrationScreen";
import "./styles/globals.css"; 

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const closeMenu = () => {
    setIsMenuOpen(false);  
  };


  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <div className="logo">
            <Link to="/">Home</Link>
          </div>
          <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
            <Link to="/register" onClick={closeMenu}>Register</Link>
            <Link to="/setup-organization" onClick={closeMenu}>Setup Organization</Link>
            <Link to="/chatbot-integration" onClick={closeMenu}>Chatbot Integration</Link>
          </nav>
          <div className={`hamburger ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </header>
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/setup-organization" element={<SetupOrganization />} />
            <Route path="/chatbot-integration" element={<ChatbotIntegration />} />
            <Route path="/scraping-status" element={<ScrapingStatus />} />
            <Route path="/test-integration" element={<TestIntegrationScreen />} />
            <Route path="*" element={<NotFound />} />  {/* Fallback route */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}


function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Chatbot Setup</h1>
      <p style={styles.subHeading}>Follow the steps to create and integrate your chatbot.</p>
      <Link to="/register" style={styles.button}>Get Started</Link>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f4f7fc",
    textAlign: "center",
    padding: "20px",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "600",
    color: "#333",
    marginBottom: "15px",
  },
  subHeading: {
    fontSize: "1.25rem",
    color: "#666",
    marginBottom: "30px",
  },
  button: {
    padding: "12px 24px",
    backgroundColor: "#007bff",
    color: "#fff",
    fontSize: "1rem",
    fontWeight: "500",
    borderRadius: "5px",
    textDecoration: "none",
    transition: "background-color 0.3s ease",
  },
};



function NotFound() {
  return (
    <div className="not-found">
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="btn-primary">Go Back to Home</Link>
    </div>
  );
}

export default App;
