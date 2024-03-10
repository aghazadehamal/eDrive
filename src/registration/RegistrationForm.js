import React, { useState } from "react";
import axios from "axios";
import "./RegistrationForm.css";
import { Link } from "react-router-dom";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    gmail: "",
    password: "",
    phoneNumber: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      const response = await axios.post(
        "https://edurive.onrender.com/auth/registration",
        formData
      );
      console.log(response.data);
      setIsSubmitted(true);
      setIsLoading(false);
    } catch (err) {
      setError(
        "Qeydiyyat zamanı bir xəta oluştu. Zəhmət olmasa yenidən cəhd edin."
      );
      setIsLoading(false);
      console.error(err);
    }
  };

  return (
    <div className="registration" style={{ textAlign: "center" }}>
      <Link to="/">
        <img
          src="/edurive.svg"
          alt="Edurive Logo"
          style={{ maxWidth: "250px", marginTop: "20px", marginBottom: "20px" }}
        />
      </Link>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h1 style={{ color: "black" }}>Qeydiyyat</h1>
          {/* Form inputları */}
          <div>
            <p>Ad</p>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Adınızı əlavə edin"
              required
            />
          </div>
          <div>
            <p>Soyad</p>
            <input
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              placeholder="Soyadınızı əlavə edin"
              required
            />
          </div>
          <div>
            <p>E-mail</p>
            <input
              type="email"
              name="gmail"
              value={formData.gmail}
              onChange={handleChange}
              placeholder="E-mailinizi əlavə edin"
              required
            />
          </div>
          <div>
            <p>Şifrə</p>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Şifrənizi əlavə edin"
              required
            />
          </div>
          <div>
            <p>Telefon nömrə</p>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Telefon nömrənizi əlavə edin"
              required
            />
          </div>
          <div>
            <button type="submit" disabled={isLoading}>
              Təsdiq et
            </button>

            <div className=" account-check">
              <span>Hesabınız var?</span>
              <Link className="login-link" to="/loginForm">
                Daxil olun
              </Link>
              .
            </div>
          </div>
          {error && <p className="error">{error}</p>}
        </form>
        {isSubmitted && (
          <div className="modal-overlay">
            <div className="modal-content">
              <div className="success-icon">✓</div>
              <span className="modal-title">Müraciətiniz qeydə alındı</span>
              <p className="modal-message">
                Siz hələ hazırda saytın free versiyasına yönləndirilirsiniz.
                Qeydiyyatınız təsdiqləndikdən sonra limitlər aradan qaldırılacaq
              </p>
              <Link to="/lessonss">
                <button
                  className="modal-button"
                  onClick={() => setIsSubmitted(false)}
                >
                  Davam et
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default RegistrationForm;
