import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [isVerifying, setIsVerifying] = useState(false);
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setIsVerifying(true);
  };

  const handleVerifyOTP = (e) => {
    e.preventDefault();
    navigate("/setup-organization");
  };

  return (
    <div style={styles.authContainer}>
      <h2 style={styles.heading}>{isVerifying ? "Verify Your Email" : "Register"}</h2>
      {!isVerifying ? (
        <form onSubmit={handleRegister} style={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Register</button>
          <button style={styles.googleButton}>Continue with Google</button>
        </form>
      ) : (
        <form onSubmit={handleVerifyOTP} style={styles.form}>
          <input
            type="text"
            name="otp"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Verify</button>
        </form>
      )}
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
  googleButton: {
    padding: "12px 24px",
    backgroundColor: "#db4437",
    color: "#fff",
    fontSize: "1rem",
    fontWeight: "500",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  },
};

export default RegisterForm;
