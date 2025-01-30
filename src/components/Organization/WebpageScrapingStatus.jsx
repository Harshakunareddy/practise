import React, { useState } from "react";
import "../../styles/Auth.css";

function WebpageScrapingStatus() {
  // eslint-disable-next-line
  const [webpages, setWebpages] = useState([
    { url: "https://example1.com", status: "Detected" },
    { url: "https://example2.com", status: "Scraped" },
    { url: "https://example3.com", status: "Pending" },
  ]);

  const handleClick = (url) => {
    // Logic to display data chunks for the clicked webpage
    alert(`Show data chunks for ${url}`);
  };

  return (
    <div className="scraping-status-container">
      <h3>Webpage Scraping Status</h3>
      <div className="webpages-list">
        {webpages.map((webpage, index) => (
          <div
            key={index}
            className={`webpage-item ${webpage.status.toLowerCase()}`}
            onClick={() => handleClick(webpage.url)}
          >
            <p>{webpage.url}</p>
            <p>Status: <strong>{webpage.status}</strong></p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WebpageScrapingStatus;
