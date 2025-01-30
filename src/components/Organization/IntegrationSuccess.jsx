import React from "react";
import Confetti from "react-confetti";
import { useNavigate } from "react-router-dom";
import "../../styles/Auth.css";

function IntegrationSuccess() {
  const navigate = useNavigate();

  const handleExploreAdmin = () => {
    navigate("#");
  };

  const handleStartChatbot = () => {
    navigate("/chatbot-integration");
  };

  const handleShare = (platform) => {
    alert(`Sharing on ${platform}`);
  };

  return (
    <div className="success-container">
      <Confetti />
      <h2>Integration Successful!</h2>
      <div className="success-buttons">
        <button className="btn-primary" onClick={handleExploreAdmin}>
          Explore Admin Panel
        </button>
        <button className="btn-primary" onClick={handleStartChatbot}>
          Start Talking to Your Chatbot
        </button>
      </div>
      <div className="social-share-buttons">
        <button onClick={() => handleShare("Facebook")}>Share on Facebook</button>
        <button onClick={() => handleShare("Twitter")}>Share on Twitter</button>
        <button onClick={() => handleShare("LinkedIn")}>Share on LinkedIn</button>
      </div>
    </div>
  );
}

export default IntegrationSuccess;
