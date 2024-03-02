import AdminPanel from "../components/AdminPanel";
import UserList from "../components/UserList";
import CampaignSection from "../LandingPage/CampaignSection/CampaignSection";
import CourseModulesSection from "../LandingPage/CourseModulesSection/CourseModulesSection";
import FAQSectionTwo from "../LandingPage/Faq/FAQSectionTwo";
import FooterTwo from "../LandingPage/Footer/FooterTwo";
import LearnDrivingSection from "../LandingPage/LearnDrivingSection/LearnDrivingSection";

import Navbar from "../LandingPage/Navbar";
import UserListTwo from "../LandingPage/UserListTwo";
import Videos from "../LandingPage/Videos";
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
       <Videos/>
       <WhyUsSection/>
       <CourseModulesSection/>
       <LearnDrivingSection/>
       
       <FAQSectionTwo/>
       <FooterTwo/>
       {/* <UserListTwo/> */}
       
            
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