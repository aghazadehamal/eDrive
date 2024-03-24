import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./LoginForm.css";

function LoginForm() {
  const [formData, setFormData] = useState({
    gmail: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false); 

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true); 
    try {
      const response = await axios.post(
        "https://edurive.onrender.com/auth/login",
        formData
      );
      if (response.data.tokenResponse.accessToken) {
        localStorage.setItem("userToken", response.data.tokenResponse.accessToken);
        localStorage.setItem("userId", response.data.userResponse.id);
        
        navigate("/lessonData?showModal=true");
      } else {
        console.error("Giriş uğursuz, token alınamadı.");
      }
    } catch (error) {
      console.error("Giriş zamanı bir xəta baş verdi:", error);
      let errorMessage = "Bir xəta baş verdi. Zəhmət olmasa daha sonra yenidən cəhd edin.";
      if (error.response) {
        switch (error.response.status) {
          case 401:
            errorMessage = "E-poçt ünvanı və ya şifrə yanlışdır.";
            break;
          case 403:
            errorMessage = "Yanlış e-poçt və ya şifrə.";
            break;
          case 400:
            errorMessage = error.response.data.errorMessage === 'User is not active ' ? 'Zəhmət olmasa mailinizə göndərilən link vasitəsi ilə hesabınızı təsdiqləyin.' : "Yanlış şifrə."
            break;
          case 404:
            errorMessage = error.response.data.errorMessage?.includes('User not found with email') && "Bu e-poçt ilə istifadəçi tapılmadı.";
            break;
          
        }
      }
      alert(errorMessage);
    }

    finally {
      setIsLoading(false); 
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

        <button type="submit" disabled={isLoading}> {isLoading ? (
    <div className="loader"></div> 
  ) : (
    'Daxil ol' 
  )}</button>

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
