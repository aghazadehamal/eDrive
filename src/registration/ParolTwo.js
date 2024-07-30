import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link, useLocation } from "react-router-dom";
import "./ParolTwo.css";
import PasswordModalTwo from "../LandingPage/PasswordModalTwo";

function ParolTwo() {
  const [formData, setFormData] = useState({
    email: "",
    newPassword: "",
    confirmPassword: "", 
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false); 
  const [error, setError] = useState("");

  const params= useLocation();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (e.target.name === "newPassword") {
      if (e.target.value.length < 8 || e.target.value.length > 20) {
        setError("Şifrə ən az 8 simvol uzunluğunda olmalıdır.");
      } else {
        setError("");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); 

    if (formData.newPassword.length < 8 || formData.newPassword.length > 20) {
      alert("Şifrə ən az 8 və ən çox 20 simvol uzunluğunda olmalıdır.");
      setIsLoading(false);
      return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      alert("Daxil edilən şifrələr fərqlidir.");
      setIsLoading(false);
      return; 
    }

    try {
      const response = await axios.put(
        `https://edurive.az:8087/auth/ChangePassword${params?.search}&newPassword=${formData.newPassword}`
      );

      setIsModalVisible(true); 

      setTimeout(() => {
        navigate("/LoginForm");
      }, 3000);

    } catch (error) {
      console.error("An error occurred during login:", error);
      alert("Bir xəta baş verdi. Zəhmət olmasa, yenidən cəhd edin.");
    } finally {
      setIsLoading(false); 
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
          minLength="8"
          maxLength="20"
          required
        />
        {error && <p style={{fontSize: "12px", color: "red"}} >{error}</p>}
        <p>Şifrənizi təsdiq edin</p>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Şifrənizi əlavə edin"
          required
        />

        <button type="submit" disabled={isLoading}>
          {isLoading ? <div className="loader"></div> : 'Təsdiq et'}
        </button>
      </form>
      {isModalVisible && <PasswordModalTwo/>} 
    </div>
  );
}

export default ParolTwo;
