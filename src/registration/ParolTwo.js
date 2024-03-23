import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./ParolTwo.css";

function ParolTwo() {
  const [formData, setFormData] = useState({
    email: "",
    newPassword: "",
  });



  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `https://edurive.onrender.com/auth/ChangePassword?email=${formData.email}`,
        {newPassword:formData.newPassword}
      );

     
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
          name="newPassword"
          value={formData.newPassword}
          onChange={handleChange}
          placeholder="Şifrənizi əlavə edin"
          required
        />
        <p>Şifrənizi təsdiq edin</p>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
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
