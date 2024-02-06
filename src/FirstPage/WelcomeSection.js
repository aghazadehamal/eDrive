import React from 'react';
import FeaturesSection from './FeaturesSection'; // Özellikler bölümünü import edin


// Bu verileri gerçek verilerle değiştirin
const featureData = [
    {
        id: 1,
        icon: '/c2.png',
        title: 'Anlaşılır ve interaktif dərslər',
        description: 'Sürücülük kursu materiallarını unudun. Bütün konseptler adım-adım, sadə ve aydın nümunələr ile izah edilir və interaktif multimedia vasitələri ilə zənginləşdirilir.'
      },

      {
        id: 1,
        icon: '/t2.png',
        title: 'Təcrübəli sürüş instruktorları',
        description: 'Təcrübəli sürücülük instruktorlarımız, novademy-nin sürüş təlimi təcrübəsinin ən vacib hissəsidir. Onlar sizə yolda güvənli və bilikli bir sürücü olmağın yollarını öyrədəcəklər.'
      },

      {
        id: 1,
        icon: '/s2.png',
        title: 'Münasib qiymətli dərs paketləri',
        description: 'Novademy ilə sürücülük təliminizə xərclədiyiniz vaxt və puldan maksimum dərəcədə qənaət edin. Bizimlə, siz sürücülük kurslarına qarşı 60%-ə qədər qənaət imkanı əldə edəcəksiniz.'
      },
];

const WelcomeSection = () => {
  return (
    <div className="welcome-section">
      <h1 style={{marginLeft: "200px", marginTop: "40px"}} className="main-title">Niyə novademy?</h1>
      <FeaturesSection features={featureData} />
      {/* Diğer içerik veya bileşenler */}
    </div>
  );
};

export default WelcomeSection;
