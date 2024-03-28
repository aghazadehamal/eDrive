import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Parol.css";
import PasswordModal from "../LandingPage/PasswordModal";

function Parol() {
  const [formData, setFormData] = useState({
    email: "",
    
  });
  const [isLoading, setIsLoading] = useState(false); 
  const [isModalVisible, setIsModalVisible] = useState(false); 

  // const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); 
    try {
      const response = await axios.put(
        `https://edurive.onrender.com/auth/forgot-password?email=${formData.email}`,
      );

      setIsModalVisible(true); 

    
    } catch (error) {
      console.error("An error occurred during login:", error);

      alert("Bir xəta baş verdi. Zəhmət olmasa, yenidən cəhd edin.");

    }
    finally {
      setIsLoading(false); 
    }
  };

  const handleCloseModal = () => {
    setIsModalVisible(false); 
  };

  return (
    <div style={{ height: "auto" }} className="login">
      <Link to="/">
        <img src="/edurive.svg" alt="Edurive Logo" className="login-logo" />
      </Link>
      <form onSubmit={handleSubmit}>
        <h1 className="login-title">Şifrənin yenilənməsi</h1>
        <div class="loginContainer">
          <span className="loginSpan">
            Qeydiyyatdan keçdiyiniz e-mailinizi daxil edin
          </span>
        </div>
        <p>E-mail</p>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="E-mailinizi əlavə edin"
          required
        />

        {/* <Link to="/ParolTwo" style={{ textDecoration: "none" }}> */}
        <button type="submit" disabled={isLoading}>
            {isLoading ? <div className="loader"></div> : 'Göndər'}
          </button>
        {/* </Link> */}
      </form>
      {isModalVisible && <PasswordModal onClose={handleCloseModal} />} 
    </div>
  );
}

export default Parol;
