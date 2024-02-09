import React, { useState } from 'react';
import ReactPlayer from 'react-player'; 
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Quiz from './FirstPage/Quiz';
import UserProfile from './UserProfile';


const Lessonss = () => {
  const [activeModule, setActiveModule] = useState(null);
  const [activeLesson, setActiveLesson] = useState(null);
  const [activeQuiz, setActiveQuiz] = useState(false); 

  const modules = {
    
    '1': [
      
      'M1-Əsas anlayışlar (1-ci hissə)',
      'M1-Əsas anlayışlar (2-ci hissə)',
      'M1-Əsas anlayışlar (3-cü hissə)',
      'M1-Əsas anlayışlar (4-cü hissə)',
      'M1-Əsas anlayışlar (5-ci hissə)',
      'M37-Mexaniki NV-lərin sürücülərinin vəzifələri',
    ],
    '2': [
      'M34-Sürücülük vəsiqəsi (1-ci hissə)',
      'M34-Sürücülük vəsiqəsi (2-ci hissə)',
      'M34-Sürücülük vəsiqəsi (3-cü hissə)',
      'M36-Yol hərəkəti iştirakçılarının vəzifələri və hüquqları',
      'M62-Xəbərdarlıq nişanları(1-ci hissə)',
      'M62-Xəbərdarlıq nişanları (2-ci hissə)',
    ],

    '3': [
      'M40-Piyadaların vəzifələri',
      'M42-Hərəkətə başlama və manevr etmə (1-ci hissə)',
      'M42-Hərəkətə başlama və manevr etmə (2-ci hissə)',
      'M42-Hərəkətə başlama və manevr etmə (3-cü hissə)',
      'M42-Hərəkətə başlama və manevr etmə (4-cü hissə)',
      'M43-Avtomagistrallarda hərəkət',
      'M46-Velosiped və mopedlərə aid qaydalar',
      'M47-At arabası və malqaranın keçirilməsinə dair tələblər',
    ],
    '4': [
      'M52-Dayanma və durma (1-ci hissə)',
      'M52-Dayanma və durma (2-ci hissə)',
      'M52-Dayanma və durma (3-cü hissə)',
      'M52-Dayanma və durma (4-cü hissə)',
      ' M53-Parklanma',
      'M64-Qadağan nişanları (1-ci hissə)',
      'M64-Qadağan nişanları (2-ci hissə)',
      'M64-Qadağan nişanları (3-cü hissə)',
      'M64-Qadağan nişanları (4-cü hissə)'
    ],'5': [
      'DƏRS 4 – Dəmiryolu Keçidləri, Piyada Keçidləri və Sürücülük Təlimləri',
      'M44-Dəmiryolu keçidlərində hərəkət',
      'M49-NV-in yolun hərəkət hissəsində yerləşməsi',
      'M54-Piyada keçidləri və ÜİONV-in dayanması',
      'M65-Məcburi hərəkət istiqaməti nişanları (1-ci hissə)',
      'M65-Məcburi hərəkət istiqaməti nişanları (2-ci hissə)',
      'M72-NV-lərin tanınma nişanları',
      'M75-Yolayrıclarının keçilməsi',
     
    ],
    '6': [
      'DƏRS 5 – Ötmə Qaydaları və Xüsusi Hərəkət İstiqamətləri',
      'M48-NV-in üstün hərəkət rejimi',
      'M51-Ötmə və qarşılıqlı keçmə (1-ci hissə)',
      'M51-Ötmə və qarşılıqlı keçmə (2-ci hissə)',
      'M56-Adamların daşınması',
      'M67-Servis nişanları',
      'M73-Səs və xarici işıq siqnallarından istifadə edilmə qaydaları (1-ci hissə)',
      'M73-Səs və xarici işıq siqnallarından istifadə edilmə qaydaları (2-ci hissə)',
      'M73-Səs və xarici işıq siqnallarından istifadə edilmə qaydaları (3-cü hissə)',
     
    ],
    '7': [
      'DƏRS 6 – Yaşayış Zonalarında və Nizamlanmayan Yolayrıcılarında Hərəkət',
      'M45-Yaşayış zonalarında hərəkət',
      'M50-Hərəkət sürəti və ara məsafəsi',
      'M63-Üstünlük nişanları',
      'M77-Nizamlanmayan yolayrıcı (1-ci hissə)',
      'M77-Nizamlanmayan yolayrıcı (2-ci hissə)',
      'M77-Nizamlanmayan yolayrıcı (3-cü hissə)',
      'M77-Nizamlanmayan yolayrıcı (4-cü hissə)',
      'M78-Sürmə təlimi',
     
    ],
    '8': [
      'DƏRS 7 – Nasaz NV-lərin Yedəyə Alınması və Xüsusi Siqnalların Tətbiqi',
      'M55-Nasaz NV-ləri və onların yedəyə alınması (1-ci hissə)',
      'M55-Nasaz NV-ləri və onların yedəyə alınması (2-ci hissə)',
      'M66-Məlumatverici-göstərici nişanları (1-ci hissə)',
      'M66-Məlumatverici-göstərici nişanları (2-ci hissə)',
      'M66-Məlumatverici-göstərici nişanları (3-cü hissə)',
      'M66-Məlumatverici-göstərici nişanları (4-cü hissə)',
      'M74-Xüsusi siqnalların tətbiqi və texniki baxış',
     
    ],
    '9': [
      'DƏRS 8 – Nizamlayıcı və Svetofor Siqnalları',
      'M58-Nizamlayıcının siqnalları (1-ci hissə)',
      'M58-Nizamlayıcının siqnalları (2-ci hissə)',
      'M59-Svetoforun siqnalları (1-ci hissə)',
      'M59-Svetoforun siqnalları (2-ci hissə)',
      'M60-Svetoforun və nizamlayıcının siqnallarının yerinə yetirilməsi',
      'M76-Nizamlanan yolayrıcı',
     
    ],
    '10': [
      'DƏRS 9 – Yüklərin Daşınması və Müvəqqəti Nişanlar',
      'M57-Yüklərin daşınması qaydaları',
      'M68-Əlavə məlumat nişanları (1-ci hissə)',
      'M68-Əlavə məlumat nişanları (2-ci hissə)',
      'M69-Yolun nişanlanması (1-ci hissə)',
      'M69-Yolun nişanlanması (2-ci hissə)',
      'M69-Yolun nişanlanması (3-cü hissə)',
      'Müvəqqəti nişanlar',
     
    ],
    '11': [
      'DƏRS 10 – İstismar Qaydaları',
      'İstismar qaydaları (1-ci hissə)',
      'İstismar qaydaları (2-ci hissə)',
      'İstismar qaydaları (3-cü hissə)',
      'İstismar qaydaları (4-cü hissə)',
      'İstismar qaydaları (5-ci hissə)',
      '(1)-Əlavələr',
      '(2)-Əlavələr',
     
    ],
    '12': [
      'DƏRS 11 – Hərəkət Təhlükəsizliyinin Əsasları',
      '(2)-Əlavələr',
      'Hərəkət təhlükəsizliyinin əsasları (1-ci hissə)',
      'Hərəkət təhlükəsizliyinin əsasları (2-ci hissə)',
      'Hərəkət təhlükəsizliyinin əsasları (3-cü hissə)',
      'Hərəkət təhlükəsizliyinin əsasları (4-cü hissə)',
      'Hərəkət təhlükəsizliyinin əsasları (5-ci hissə)',
      'Hərəkət təhlükəsizliyinin əsasları (6-cı hissə)',
     
    ],
    '13': [
      'DƏRS 12 – Tibbi Davranış Qaydaları',
      'Tibbi davranış qaydaları (1-ci hissə)',
      'Tibbi davranış qaydaları (2-ci hissə)',
      'Tibbi davranış qaydaları (3-cü hissə)',
      'Tibbi davranış qaydaları (4-cü hissə)',
     
    ],
  
  };

  const lessonContents = {
    'M1-Əsas anlayışlar (1-ci hissə)': {
      text: 'Bu dersin metin içeriği 1. hisse için...',
      videoUrl: 'video1.mp4', 
    },
    'M1-Əsas anlayışlar (2-ci hissə)': {
      text: 'Bu dersin metin içeriği 2. hisse için...',
      videoUrl: 'video2.mp4', 
    },
    'M1-Əsas anlayışlar (3-cü hissə)': {
      text: 'Bu dersin metin içeriği 1. hisse için...',
      videoUrl: 'video3.mp4', 
    },
    'M1-Əsas anlayışlar (4-cü hissə)': {
      text: 'Bu dersin metin içeriği 2. hisse için...',
      videoUrl: 'video1.mp4', 
    },
    'M1-Əsas anlayışlar (5-ci hissə)': {
      text: 'Bu dersin metin içeriği 1. hisse için...',
      videoUrl: 'video2.mp4', 
    },
    'M37-Mexaniki NV-lərin sürücülərinin vəzifələri': {
      text: 'Bu dersin metin içeriği 2. hisse için...',
      videoUrl: 'video3.mp4', 
    },
    'M34-Sürücülük vəsiqəsi (1-ci hissə)': {
      text: 'Bu dersin metin içeriği 2. hisse için...',
      videoUrl: 'Riyaziyyat intro.mp4', 
    },
    'M34-Sürücülük vəsiqəsi (2-ci hissə)': {
      text: 'Bu dersin metin içeriği 1. hisse için...',
      videoUrl: 'video1.mp4', 
    },
    'M34-Sürücülük vəsiqəsi (3-cü hissə)': {
      text: 'Bu dersin metin içeriği 2. hisse için...',
      videoUrl: 'video2.mp4', 
    },
    'M36-Yol hərəkəti iştirakçılarının vəzifələri və hüquqları': {
      text: 'Bu dersin metin içeriği 1. hisse için...',
      videoUrl: 'video3.mp4', 
    },
    'M62-Xəbərdarlıq nişanları(1-ci hissə)': {
      text: 'Bu dersin metin içeriği 2. hisse için...',
      videoUrl: 'video1.mp4', 
    },
    'M1-Əsas anlayışlar (5-ci hissə)': {
      text: 'Bu dersin metin içeriği 1. hisse için...',
      videoUrl: 'video2.mp4', 
    },
    'M62-Xəbərdarlıq nişanları (2-ci hissə)': {
      text: 'Bu dersin metin içeriği 2. hisse için...',
      videoUrl: 'video3.mp4', 
    },
    
  
  };

  useEffect(() => {
    const firstModuleKey = Object.keys(modules)[0];
    setActiveModule(firstModuleKey);
    setActiveLesson(modules[firstModuleKey][0]);
  }, []);
  

  const handleModuleClick = (module) => {
    setActiveModule(module === activeModule ? null : module);
    setActiveLesson(null);
    setActiveQuiz(false); 
  };

  const handleLessonClick = (lesson) => {
    setActiveLesson(lesson === activeLesson ? null : lesson);
    setActiveQuiz(false); 
  };

  const handleQuizClick = () => {
    
    setActiveQuiz(true);
    setActiveLesson(null); 
  };
  

  return (
    <div className="container">
      <div className="moduleList">
        {/* <Link to="/">
          <img src="/LOGO WHITE.png" alt="Novademy Logo" style={{ maxWidth: '150px', marginTop: "10px", marginLeft: "30px", marginBottom: "20px"}} />
        </Link> */}
<UserProfile/>
        
        {Object.keys(modules).map((module, index) => (
          <React.Fragment key={index}>
            <div onClick={() => handleModuleClick(module)} className="moduleItem">
            {module === '1' && 'DƏRS 1a – Əsas Sürücülük Anlayışları'}
            {module === '2' && 'DƏRS 1b – Sürücülük Vəsiqəsi və Xəbərdarlıq Nişanları'}
            {module === '3' && 'DƏRS 2 – Piyada və Sürücülərin Hərəkət Məsuliyyətləri'}
            {module === '4' && 'Dayanma, Durma və Parklanma Qaydaları '}
            {module === '5' && 'Dəmiryolu Keçidləri, Piyada Keçidləri və Sürücülük Təlimləri '}
            {module === '6' && ' Ötmə Qaydaları və Xüsusi Hərəkət İstiqamətləri '}
            {module === '7' && 'Yaşayış Zonalarında və Nizamlanmayan Yolayrıcılarında Hərəkət '}
            {module === '8' && 'Nasaz NV-lərin Yedəyə Alınması və Xüsusi Siqnalların Tətbiqi '}
            {module === '9' && ' Nizamlayıcı və Svetofor Siqnalları '}
            {module === '10' && 'Yüklərin Daşınması və Müvəqqəti Nişanlar '}
            {module === '11' && ' İstismar Qaydaları'}
            {module === '12' && 'Hərəkət Təhlükəsizliyinin Əsasları '}
            {module === '13' && 'Tibbi Davranış Qaydaları '}
          
            </div>
            {activeModule === module && (
              <div>
                {modules[module].map((lesson, lessonIndex) => (
                  <div key={lessonIndex} onClick={() => handleLessonClick(lesson)} className="lessonList">
                    {lesson}
                  </div>
                ))}
                <div onClick={handleQuizClick} className="lessonList">Quiz</div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="content">
        {activeLesson && (
          <div>
        
            <div>{lessonContents[activeLesson].text}</div>
      <ReactPlayer
        url={lessonContents[activeLesson].videoUrl}
        controls={true} 
        width="100%" 
        height="auto" 
      />
          </div>
        )}
        {activeQuiz && <Quiz />} 
      </div>
    </div>
  );
};

export default Lessonss;
