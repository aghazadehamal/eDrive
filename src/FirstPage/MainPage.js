import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
   <img  src="/LOGO WHITE.png" alt="Novademy Logo" style={{ maxWidth: '150px'}} />
      <nav>

      <Link  to="/LoginForm"><button style={{marginTop: "30px"}}>Giriş</button></Link>
       
        <Link to="/RegistrationForm"><button>Qeydiyyat</button></Link>
      </nav>
    </header>
  );
};
const CallToAction = () => {
  return (
    <div className="call-to-action">
      <Link to="/Home">
      {/* <button>Ödənişsiz Sürüş Dərsi</button> */}
      </Link>
    
    </div>
  );
};

const MainContent = () => {
  return (
    <main className="main-content">
      <h1>Sürücülük bacarıqlarını bizimlə inkişaf etdir</h1>
      <img  src="/car3.webp" alt="Car" className="car-image" /> {/* Resmi buraya taşıdık */}
    </main>
  );
};

const App = () => {
  return (
    <div className="app">
      <Header />
      <MainContent />
      <CallToAction />
      {/* Burada diğer içerik veya bileşenler olabilir. */}
    </div>
  );
};

export default App;

