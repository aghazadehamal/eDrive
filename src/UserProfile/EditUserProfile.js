import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function EditUserProfile({ user }) {
  const navigate = useNavigate();


  const [displayName, setDisplayName] = useState(user ? user.displayName : '');
  const [email, setEmail] = useState(user ? user.email : '');
  const [phoneNumber, setPhoneNumber] = useState(user ? user.phoneNumber : '');

  useEffect(() => {
   
    if (!user) {
      console.log('Kullanıcı verisi bulunamadı, yönlendiriliyor...');
     
      navigate('/'); 
    }
  }, [user, navigate]);

  const deleteUserAccount = () => {
    if (window.confirm("Hesabınızı silmek istediğinize emin misiniz? Bu işlem geri alınamaz.")) {
      console.log("Hesap silme işlemi gerçekleştiriliyor...");
      navigate('/');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Güncellenen bilgiler: ", { displayName, email, phoneNumber });
  };

 
  if (!user) {
    return <div>Yükleniyor...</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
    
      <div>
        <label>
          İsim:
          <input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </label>
      </div>
   
      <button type="submit">Bilgileri Güncelle</button>
      <button type="button" onClick={deleteUserAccount} style={{backgroundColor: 'red', color: 'white', marginLeft: '10px'}}>
        Hesabı Sil
      </button>
    </form>
  );
}

export default EditUserProfile;
