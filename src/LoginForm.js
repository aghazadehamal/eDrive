// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // useNavigate hook'unu import ediyoruz

// function LoginForm() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate(); // useNavigate hook'undan bir instance oluşturuyoruz

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('https://all-api.bitcode.az/api/users/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ email, password })
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const data = await response.json();
//       console.log('Login successful', data);
//       // Login başarılıysa, kullanıcıyı anasayfaya yönlendir
//       navigate('/home'); // Burada "/home" yerine uygulamanızın anasayfa route'unu kullanın
//     } catch (error) {
//       console.error("Login request failed", error);
//     }
//   };

//   return (
//     <div className="login-wrapper">
//         <img  src="/LOGO WHITE.png" alt="Novademy Logo" style={{ maxWidth: '150px', marginTop: "30px", marginLeft: "30px" }} />
//       <form onSubmit={handleSubmit} className="login-form">
//         <h2>Giriş</h2>
//         <div className="input-group">
//           <label htmlFor="email">E-poçt *</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="input-group">
//           <label htmlFor="password">Şifrə *</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit" className="login-button">Davam et</button>
//         <p className="signup-link">Hesabınız yoxdur? <a href="/RegistrationForm">Hesab yarat!</a></p>
//       </form>
//     </div>
//   );
// }

// export default LoginForm;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Hata mesajları için yeni state
  const navigate = useNavigate();

  // Statik doğrulama için kullanılacak olan e-posta ve şifre
  const correctEmail = 'user@example.com';
  const correctPassword = '12345';

  const handleSubmit = (e) => {
    e.preventDefault();
    // E-posta ve şifre doğru mu diye kontrol ediyoruz
    if (email === correctEmail && password === correctPassword) {
      console.log('Login successful');
      navigate('/lessonss'); // Başarılı giriş sonrası yönlendirme
    } else {
      setError('E-posta veya şifre hatalı.'); // Hatalı giriş durumunda hata mesajını güncelle
    }
  };

  return (
    <div className="login-wrapper">
     <Link to="/">
        <img src="/LOGO WHITE.png" alt="Novademy Logo" style={{ maxWidth: '150px', marginTop: "30px", marginLeft: "30px" }} />
      </Link>
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Giriş</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Hata mesajını göster */}
        <div className="input-group">
          <label htmlFor="email">E-poçt *</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Şifrə *</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">Davam et</button>
        <p className="signup-link">Hesabınız yoxdur? <a href="/RegistrationForm">Hesab yarat!</a></p>
      </form>
    </div>
  );
}

export default LoginForm;
