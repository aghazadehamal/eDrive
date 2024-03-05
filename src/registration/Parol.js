import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Parol.css";

function Parol() {
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
        console.error("Login failed, no token received.");
      }
    } catch (error) {
      console.error("An error occurred during login:", error);
    }
  };

  return (
    <div style={{height: "auto"}} className="login">
      <Link to="/">
        <img
          src="/edurive.svg"
          alt="Edurive Logo"
          className="login-logo"
        />
      </Link>
      <form onSubmit={handleSubmit}>
        <h1 className="login-title">Şifrənin yenilənməsi</h1>
        <div class="loginContainer">
  <span className="loginSpan">Qeydiyyatdan keçdiyiniz e-mailinizi daxil edin</span>
</div>
        <p>E-mail</p>
        <input
          type="email"
          name="gmail"
          value={formData.gmail}
          onChange={handleChange}
          placeholder="E-mailinizi əlavə edin"
          required
        />
       
      <Link to="/ParolTwo" style={{textDecoration: "none"}}>
      <button type="submit">Göndər</button>
      </Link>
       

       
      </form>
    </div>
  );
}

export default Parol;
