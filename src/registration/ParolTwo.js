import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./ParolTwo.css";

function ParolTwo() {
  const [formData, setFormData] = useState({
    gmail: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://edurive.onrender.com/auth/login",
        formData
      );
      if (response.data.tokenResponse.accessToken) {
        localStorage.setItem("userToken", response.data.tokenResponse.accessToken);
        navigate("/lessonData?showModal=true");
      } else {
        console.error("Login failed, no token received.");
      }
    } catch (error) {
      console.error("An error occurred during login:", error);
    }
  };

  return (
    <div className="login">
      <Link to="/">
        <img src="/edurive.svg" alt="Edurive Logo" className="login-logo" />
      </Link>
      <form onSubmit={handleSubmit}>
        <h1 className="login-title">Şifrənin yenilənməsi</h1>
        <div class="loginContainer">
          <span className="loginSpan">Yeni şifrə yaradın</span>
        </div>

        <p>Yeni şifrə</p>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Şifrənizi əlavə edin"
          required
        />
        <p>Şifrənizi təsdiq edin</p>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Şifrənizi əlavə edin"
          required
        />

        <button type="submit">Təsdiq et</button>
      </form>
    </div>
  );
}

export default ParolTwo;
