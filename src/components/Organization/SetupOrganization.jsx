import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SetupOrganizationForm() {
  const [companyDetails, setCompanyDetails] = useState({ companyName: "", websiteUrl: "", metaDescription: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [urlError, setUrlError] = useState(""); // Added state to track URL error

  const handleChange = (e) => {
    setCompanyDetails({ ...companyDetails, [e.target.name]: e.target.value });
    if (e.target.name === "websiteUrl") {
      setUrlError(""); // Reset URL error if the user starts typing
    }
  };

  const handleFetchMetaDescription = async () => {
    // Manually check if the website URL is valid
    if (!companyDetails.websiteUrl) {
      setUrlError("Please enter a valid Website URL.");
      return;
    }
    
    // Validate URL format manually (optional)
    const urlPattern = /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z0-9]{2,4}(\/[a-z0-9-._~:/?#[\]@!$&'()*+,;=]*)?$/i;
    if (!urlPattern.test(companyDetails.websiteUrl)) {
      setUrlError("Please enter a valid URL (e.g., https://example.com).");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`https://api.linkpreview.net/?key=f0bd991afc500de4868fb9844900d4a9&q=${companyDetails.websiteUrl}`);
      const data = await response.json();
      setCompanyDetails({ ...companyDetails, metaDescription: data.description || "No meta description found." });
    } catch (error) {
      console.error("Error fetching meta description:", error);
      setIsLoading(false);
    }
  };

  const navigate = useNavigate();
  const handleSave = (e) => {
    e.preventDefault();

    // Check if website URL is provided before saving
    if (!companyDetails.websiteUrl) {
      setUrlError("Website URL is required!");
      return;
    }

    alert("Company Saved Success");
    navigate("/chatbot-integration");

    // console.log("Company Details Saved:", companyDetails);
  };

  return (
    <div style={styles.authContainer}>
      <h2 style={styles.heading}>Setup Your Organization</h2>
      <form onSubmit={handleSave} style={styles.form}>
        <input
          type="text"
          name="companyName"
          placeholder="Company Name"
          value={companyDetails.companyName}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="text" // Changed to text to avoid strict URL validation by the browser
          name="websiteUrl"
          placeholder="Website URL"
          value={companyDetails.websiteUrl}
          onChange={handleChange}
          required
          style={styles.input}
        />
        {urlError && <p style={styles.errorText}>{urlError}</p>} {/* Display error message for invalid URL */}
        <button type="button" style={styles.button} onClick={handleFetchMetaDescription}>
          {isLoading ? "Fetching..." : "Fetch Meta-Description"}
        </button>
        {companyDetails.metaDescription && (
          <textarea
            name="metaDescription"
            placeholder="Meta Description"
            value={companyDetails.metaDescription}
            onChange={handleChange}
            required
            style={styles.textarea}
          />
        )}
        <button type="submit" style={styles.button}>Save</button>
      </form>
    </div>
  );
}

const styles = {
  authContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f4f7fc",
    padding: "20px",
    textAlign: "center",
  },
  heading: {
    fontSize: "2rem",
    fontWeight: "600",
    marginBottom: "15px",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "400px",
    marginTop: "20px",
  },
  input: {
    padding: "12px",
    marginBottom: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "1rem",
    outline: "none",
    transition: "border-color 0.3s ease",
  },
  button: {
    padding: "12px 24px",
    backgroundColor: "#007bff",
    color: "#fff",
    fontSize: "1rem",
    fontWeight: "500",
    borderRadius: "5px",
    border: "none",
    marginBottom: "15px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  errorText: {
    color: "#e74c3c",
    fontSize: "0.9rem",
    marginBottom: "10px",
  },
  textarea: {
    padding: "12px",
    marginBottom: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "1rem",
    outline: "none",
    minHeight: "100px",
    transition: "border-color 0.3s ease",
  },
};

export default SetupOrganizationForm;
