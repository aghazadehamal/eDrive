import React, { useState, useEffect } from "react";
import axios from "axios";
import "./RegistrationForm.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CountdownButton from "../LandingPage/AutoStartCountdown";
import AutoStartCountdown from "../LandingPage/AutoStartCountdown";

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

  
      sendRequestEveryTenSecondsForThreeMinutes()

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

const sendRequestEveryTenSecondsForThreeMinutes = () => {
  let count = 0; 
  const maxRequests = 18; 

  const intervalId = setInterval(async () => {
    if (count >= maxRequests) {
      clearInterval(intervalId); 
      console.log("Tamamlandı: Toplam 3 dakika boyunca her 10 saniyede bir istek yapıldı.");
      return;
    }

    try {
      const response = await axios.get(`https://edurive.onrender.com/v1/verify/activated?gmail=${formData.gmail}`);
      if(response.data){
        clearInterval(intervalId); 
        navigate('/lessonData');
        return; 
      }
      
    } catch (error) {
      console.error('Istek hatası:', error);
    
    }

    count++; 
  }, 10000); 
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
        <div className="modal-overlay" >
        <div className="modal-content">
         <button
  onClick={() => setIsSubmitted(false)}
  className="close-button"
>
  X
</button>

          <div><img src={process.env.PUBLIC_URL + '/success.svg'} alt="Success"/></div>
          <span className="modal-title">Müraciətiniz qeydə alındı</span>
          <p className="modal-message">
            Mailinizə giriş edib təsdiq etdiktən sonra saytın free versiyasına yönləndiriləcəksiniz.
          </p>
          <AutoStartCountdown/>
        </div>
      </div>
      
        )}
      </div>
    </div>
  );
}

export default RegistrationForm;
