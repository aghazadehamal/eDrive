import React, { useState, useEffect } from 'react';


const KULLANICILAR_API_URL = 'API_KULLANICILAR_LISTESI_URL';
const ERISIM_IZNI_API_URL = 'API_ERISIM_IZNI_VERME_URL';

function KullaniciYonetimPaneli() {
  const [kullanicilar, setKullanicilar] = useState([]);

  useEffect(() => {
  
    const kullaniciListesiniGetir = async () => {
      const response = await fetch(KULLANICILAR_API_URL);
      const data = await response.json();
      setKullanicilar(data);
    };

    kullaniciListesiniGetir();
  }, []);

  const erisimIzniVer = async (kullaniciId) => {
    try {
      const response = await fetch(ERISIM_IZNI_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ kullaniciId }),
      });

      if (response.ok) {
       
        alert('Erişim izni başarıyla verildi.');
      
      } else {
        throw new Error('Erişim izni verilirken bir hata oluştu.');
      }
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <div>
      <h2>Kullanıcı Yönetim Paneli</h2>
      <ul>
        {kullanicilar.map((kullanici) => (
          <li key={kullanici.id}>
            {kullanici.fullName} - Erişim İzni: {kullanici.erisimIzni ? 'Verildi' : 'Verilmedi'}
            <button onClick={() => erisimIzniVer(kullanici.id)}>Erişim İzni Ver</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default KullaniciYonetimPaneli;