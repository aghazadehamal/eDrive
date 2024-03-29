import React from "react";
import { Link } from "react-router-dom";

function ProfileCard() {
  const profile = {
    name: "User",
    description: "Driver",
    imageUrl:
      "https://visualpharm.com/assets/314/Admin-595b40b65ba036ed117d36fe.svg",
    email: "user@example.com",
    phone: "123-456-7890",
    password: "password123",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "20px",
        maxWidth: "300px",
        margin: "20px auto",
        color: "black",
        backgroundColor: "#f9f9f9",
      }}
    >
      <img
        src={profile.imageUrl}
        alt="Profile"
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "10px",
        }}
      />
      <h3 style={{ margin: "5px 0", color: "#333" }}>{profile.name}</h3>
      <p style={{ margin: "5px 0", fontSize: "14px", color: "#666" }}>
        {profile.description}
      </p>
      <p style={{ margin: "5px 0", fontSize: "14px", color: "#666" }}>
        Email: {profile.email}
      </p>
      <p style={{ margin: "5px 0", fontSize: "14px", color: "#666" }}>
        Phone: {profile.phone}
      </p>
      <p
        style={{
          margin: "5px 0",
          fontSize: "14px",
          color: "#666",
          fontWeight: "bold",
        }}
      >
        Password: {profile.password}
      </p>

      <button
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          color: "#fff",
          backgroundColor: "#007bff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          outline: "none",
          marginTop: "10px",
          transition: "background-color 0.3s ease",
        }}
      >
        Hesab məlumatlarını düzəlt
      </button>
      <Link onClick={() => localStorage.clear()} to="/" className="logoutLink">
        Çıxış
      </Link>
    </div>
  );
}

export default ProfileCard;
