import React from 'react';
import { useNavigate } from 'react-router-dom';

function UserProfile({ user }) {
  const navigate = useNavigate();

  const goToEditProfile = () => {
    navigate('/edit-user-profile');
  };

  return (
    <div>
    
     
      <button style={{borderRadius: "50%", backgroundColor: "white",  marginBottom: "20px" }} onClick={goToEditProfile}> <img src={"https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="} alt="Profil" style={{ width: '50px', height: '50px', borderRadius: '50%'}} /></button>
    </div>
  );
}

export default UserProfile;
