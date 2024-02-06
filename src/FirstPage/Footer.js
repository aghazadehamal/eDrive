import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa'; // react-icons kütüphanesini kullanarak sosyal medya ikonları ekleyebilirsiniz

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#2d2d2d', color: 'white', padding: '50px', display: 'flex', justifyContent: 'space-between',  height: "257px" }}>
      <div >
        <img  src="/LOGO WHITE.png" alt="Novademy Logo" style={{ maxWidth: '150px', marginTop: "10px" }} />
        <p style={{marginTop: "30px"}}>"Biz interaktif sürücülük dərsləri ilə sürücülərin hayatını asanlaştıran ve onları yollarda təhlükəsiz sürüş için hazırlayan bir start-up'ız."</p>
      </div>
      <div >
        <h3 style={{marginTop: "20px"}}>Bizimlə alaqa saxlayın</h3>
        <p style={{marginTop: "20px"}}>info@novademy.az</p>
        <p style={{marginTop: "20px"}}>+994 55 631 62 84</p>
        <div style={{marginTop: "20px"}}>
          <FaInstagram style={{ marginRight: '10px' }} />
          <FaFacebook style={{ marginRight: '10px' }} />
          <FaLinkedin style={{ marginRight: '10px' }} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
