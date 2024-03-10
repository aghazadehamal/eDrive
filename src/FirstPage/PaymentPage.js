import React from "react";
import { useNavigate } from "react-router-dom";

function PaymentPage() {
  const navigate = useNavigate();

  function handlePayment(event) {
    event.preventDefault();
    alert("Ödəniş uğurlu!");
    navigate("/home");
  }

  return (
    <div className="payment-container">
      <h2>Ödəniş Et</h2>
      <form onSubmit={handlePayment} className="payment-form">
        <input type="text" placeholder="Kart Nömrəsi" required />
        <button type="submit">Ödəniş Et və Davam Et</button>
      </form>
    </div>
  );
}

export default PaymentPage;
