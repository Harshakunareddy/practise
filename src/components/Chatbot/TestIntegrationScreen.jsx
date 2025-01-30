import React, { useState } from "react";

function TestIntegrationScreen() {
  const [isSuccess, setIsSuccess] = useState(null);

  const handleTestIntegration = () => {
    // Simulate success or failure
    setIsSuccess(Math.random() > 0.5);
  };

  return (
    <div className="test-integration">
      <h2>Test Chatbot Integration</h2>
      <button onClick={handleTestIntegration} className="btn-primary">
        Test Integration
      </button>
      {isSuccess === null ? null : isSuccess ? (
        <div className="success-message">
          <h3>Success! Chatbot Integration Successful 🎉</h3>
        </div>
      ) : (
        <div className="failure-message">
          <h3>Oops! Something went wrong. Try again.</h3>
          <button onClick={handleTestIntegration} className="btn-primary">
            Retry
          </button>
        </div>
      )}
    </div>
  );
}

export default TestIntegrationScreen;
