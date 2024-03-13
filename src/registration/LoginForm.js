import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./LoginForm.css";

function LoginForm() {
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
      if (response.data.accessToken) {
        localStorage.setItem("userToken", response.data.accessToken);
        navigate("/lessonData?showModal=true");
      } else {
        console.error("Giriş uğursuz, token alınamadı.");
      }
    } catch (error) {
      console.error("Giriş zamanı bir xəta baş verdi:", error);

      if (error.response && error.response.status === 401) {
        alert("E-poçt ünvanı və ya şifrə yanlışdır.");
      } else if (error.response && error.response.status === 403) {
        alert("Yanlış mail və ya şifrə");
      } else {
        alert(
          "Bir xəta baş verdi. Zəhmət olmasa daha sonra yenidən cəhd edin."
        );
      }
    }
  };

  return (
    <div className="login">
      <Link to="/">
        <img src="/edurive.svg" alt="Edurive Logo" className="login-logo" />
      </Link>
      <form onSubmit={handleSubmit}>
        <h1 className="login-title">Daxil ol</h1>
        <p>E-mail</p>
        <input
          type="email"
          name="gmail"
          value={formData.gmail}
          onChange={handleChange}
          placeholder="E-mailinizi əlavə edin"
          required
        />
        <p>Şifrə</p>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Şifrənizi əlavə edin"
          required
        />
        <Link style={{ textDecoration: "none" }} to="/Parol">
          <span className="forgot-password">Şifrəmi unutdum</span>
        </Link>

        <button type="submit">Daxil ol</button>

        <div className="registration-reminder">
          <span style={{ color: "#1F203F" }}>Hesabınız yoxdur?</span>
          <Link to="/RegistrationForm" className="registration-link">
            Qeydiyyatdan keçin
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
