import AdminPanel from "../components/AdminPanel";
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
            
       
            
            <MainPage/>
            {/* <VideoPlayer/> */}
            <CourseCard/>

            {/* <CardList/> */}

            <WelcomeSection/>

          {/* <PricingSection/> */}

         <FAQSection/>

         <Footer/>
        </div>
     );
}

export default FirstPage;