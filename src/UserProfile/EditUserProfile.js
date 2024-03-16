import React from 'react';
import './UserProfile.css';


class UserProfile extends React.Component {
  render() {
    return (
      <div style={{backgroundColor: "black"}}>
   <div className="UserProfile">
        <h1>Hesab tənzimləmələri</h1>
        <p>Mobbin profilinizi idarə edin</p>
        <div className="UserProfile-header">
  <div className="UserProfile-image">
    <div className="UserProfile-placeholder">S</div>
  </div>
  <div className="UserProfile-info">
  <label htmlFor="full-name" className="UserProfile-label">Tam ad:</label>
  <input type="text" id="full-name" className="UserProfile-input" defaultValue="Sadi Jabili" />

  <label htmlFor="email" className="UserProfile-label">E-poçt:</label>
  <input type="email" id="email" className="UserProfile-input" defaultValue="jabili.sadi@gmail.com" />

  <button className="UserProfile-refresh">Yeniləyin</button>
</div>

</div>

        <div className="UserProfile-password">
          <p>Parol</p>
          <p>Müvəqqəti giriş kodlarından istifadə etmək istəmirsinizsə, daimi parol təyin edə bilərsiniz.</p>
          <button className="UserProfile-setPassword">Parol təyin edin</button>
        </div>
        <div className="UserProfile-delete">
          <p>Hesabı silin</p>
          <p>Hesabınızı və bütün məzmununuzu həmişəlik silin.</p>
          <button className="UserProfile-deleteAccount">Bu hesabı silin</button>
        </div>
      </div>


      </div>
   
    );
  }
}

export default UserProfile;


