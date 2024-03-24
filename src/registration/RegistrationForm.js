import React, { useState } from "react";
import axios from "axios";
import "./RegistrationForm.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    gmail: "",
    password: "",
    confirmPassword: "", 
    phoneNumber: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password.length < 8) {
      alert("Şifrə ən az 8 simvol uzunluğunda olmalıdır.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Daxil edilən şifrələr fərqlidir.");
      return;
    }

    const phoneRegex = /^\d{9}$/;
    if (!phoneRegex.test(formData.phoneNumber)) {
      alert("Telefon nömrəsi düzgün formatda deyil. Nümunə: 992224455");
      return;
    }

    setIsLoading(true);
    try {
    
      const response = await axios.post(
        "https://edurive.onrender.com/auth/registration",
        formData
      );
      console.log(response.data);
      setIsSubmitted(true); 
      setIsLoading(false);
      localStorage.setItem("userId", response.data.id);
      localStorage.setItem("userToken", response.data.id);

  
      await axios.post('https://edurive.onrender.com/v1/verify/activated', { email: formData.gmail })
        .then(response => {
          console.log('OTP sent successfully', response);
        
        })
        .catch(error => {
          console.error('Error sending OTP', error);
         
        });

    } catch (error) {
      setIsLoading(false);

      if (error.response && error.response.status === 409) {
        alert(
          "Bu e-poçt ünvanı ilə artıq bir qeydiyyat yaradılmışdır. Zəhmət olmasa, daxil olun və ya başqa bir e-poçt ünvanı istifadə edin."
        );
      } else {
        alert(
         "Qeydiyyat zamanı bir xəta baş verdi. Zəhmət olmasa, daha sonra yenidən cəhd edin."
        );
      }
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
            <p>Şifrəni Təkrarlayın</p>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Şifrənizi təkrar əlavə edin"
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
          {/* {error && <p className="error">{error}</p>} */}
        </form>
        {isSubmitted && (
          <div className="modal-overlay">
            <div className="modal-content">
            <div> <img src={process.env.PUBLIC_URL + '/success.svg'} alt="Clock Icon"/></div>
              <span className="modal-title">Müraciətiniz qeydə alındı</span>
              <p className="modal-message">
                Siz hal hazırda saytın free versiyasına yönləndirilirsiniz.
                Qeydiyyatınız təsdiqləndikdən sonra limitlər aradan qaldırılacaq
              </p>
              <Link to="/lessonData">
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
