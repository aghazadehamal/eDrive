import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <img
        src="/edurive.svg"
        alt="Novademy Logo"
        style={{ maxWidth: "250px" }}
      />
      <nav>
        <Link to="/LoginForm">
          <button style={{ marginTop: "10px", color: "white" }}>Giriş</button>
        </Link>

        <Link to="/RegistrationForm">
          <button style={{ color: "white" }}>Qeydiyyat</button>
        </Link>
      </nav>
    </header>
  );
};
const CallToAction = () => {
  return (
    <div className="call-to-action">
      <Link to="/Home"></Link>
    </div>
  );
};

const MainContent = () => {
  return (
    <main className="main-content">
      <h1 style={{ color: "black" }}>
        Sürücülük bacarıqlarını bizimlə inkişaf etdir
      </h1>
      <img src="/car3.webp" alt="Car" className="car-image" />
    </main>
  );
};

const App = () => {
  return (
    <div className="app">
      <Header />
      <MainContent />
      <CallToAction />
    </div>
  );
};

export default App;
