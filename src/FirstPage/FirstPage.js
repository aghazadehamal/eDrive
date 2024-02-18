import AdminPanel from "../components/AdminPanel";
import CampaignSection from "../LandingPage/CampaignSection";
import CourseModulesSection from "../LandingPage/CourseModulesSection";
import FAQSectionTwo from "../LandingPage/FAQSectionTwo";
import FooterTwo from "../LandingPage/FooterTwo";
import LearnDrivingSection from "../LandingPage/LearnDrivingSection";

import Navbar from "../LandingPage/Navbar";
import WhyUsSection from "../LandingPage/WhyUsSection";
// import VideoPlayer from "../VideoPlayer";
import CourseCard from "./CourseCard";
// import CardList from "./CardList";
import FAQSection from "./FAQSection";
import Footer from "./Footer";
import MainPage from "./MainPage";
// import PricingCard from "./PricingCard";
// import PricingSection from "./PricingSection";



import WelcomeSection from "./WelcomeSection";



function FirstPage() {
    return ( 
        <div>
            
            <Navbar/>
       <CampaignSection/>    
       <WhyUsSection/>
       <LearnDrivingSection/>
       <CourseModulesSection/>
       <FAQSectionTwo/>
       <FooterTwo/>
       
            
            {/* <MainPage/>
            <CourseCard/>
            <WelcomeSection/>
            <FAQSection/>

<Footer/> */}
            {/* <VideoPlayer/> */}
          

            {/* <CardList/> */}

          

          {/* <PricingSection/> */}

        
        </div>
     );
}

export default FirstPage;