import React from "react";
import { useNavigate } from "react-router-dom";

function UserProfile({ user }) {
  const navigate = useNavigate();

  const goToEditProfile = () => {
    navigate("/profileCard");
  };

  return (
    <div>
      <button className="userProfileButton" onClick={goToEditProfile}>
        <img
          src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
          alt="Profil"
          className="userProfileImage"
        />
      </button>
    </div>
  );
}

export default UserProfile;
