import React, { useState } from "react";
import "../../styles/Chatbot.css"; // Add your CSS file path

function ChatbotIntegration() {
  const [isTesting, setIsTesting] = useState(false);
  const [isIntegrationSuccessful, setIsIntegrationSuccessful] = useState(false);

  const handleTestChatbot = () => {
    setIsTesting(true);
    // Simulate a test interaction (can be replaced with actual test logic)
    setTimeout(() => {
      setIsTesting(false);
      alert("Chatbot Test Successful!");
    }, 2000);
  };

  const handleIntegrateChatbot = () => {
    // Simulate integration process
    alert("Integration code copied. Now paste it in your <head> section.");
    setIsIntegrationSuccessful(true);
  };

  const handleTestIntegration = () => {
    if (isIntegrationSuccessful) {
      alert("Integration Successful! Proceed to the next steps.");
    } else {
      alert("Integration failed. Please retry.");
    }
  };

  return (
    <div className="chatbot-integration-container">
      <h2 className="heading">Chatbot Integration & Testing</h2>
      <button className="btn-primary" onClick={handleTestChatbot} disabled={isTesting}>
        {isTesting ? "Testing Chatbot..." : "Test Chatbot"}
      </button>
      <button className="btn-secondary" onClick={handleIntegrateChatbot}>
        Integrate on Your Website
      </button>
      <p className="feedback-banner">
        Chatbot not working as intended? <a href="#">Share Feedback</a>
      </p>

      <div className="integration-steps">
        <h3>Integration Options</h3>
        <ol>
          <li>Copy and paste the provided code into your website's <code>&lt;head&gt;</code> section.</li>
          <li>Or, send integration instructions to your developer.</li>
        </ol>
      </div>

      <button className="btn-primary" onClick={handleTestIntegration}>
        Test Integration
      </button>

      {/* Conditional Rendering for Success */}
      {isIntegrationSuccessful && (
        <div className="integration-success">
          <h3>Success! The chatbot is now integrated.</h3>
          <button className="btn-primary">Explore Admin Panel</button>
          <button className="btn-secondary">Start talking to your chatbot</button>
          <div className="social-sharing">
            <button className="social-btn">Share on Facebook</button>
            <button className="social-btn">Share on Twitter</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatbotIntegration;
