import CampaignSection from "../LandingPage/CampaignSection/CampaignSection";
import CourseModulesSection from "../LandingPage/CourseModulesSection/CourseModulesSection";
import FAQSectionTwo from "../LandingPage/Faq/FAQSectionTwo";
import FooterTwo from "../LandingPage/Footer/FooterTwo";

import Navbar from "../LandingPage/NavBar/Navbar";

import Videos from "../LandingPage/Videos";
import WhyUsSection from "../LandingPage/WhyUsSection";

import LearnDrivingSection from "../LandingPage/LearnDrivingSection/LearnDrivingSection";
import NavbarTwo from "./NavbarTwo";
import Haqqimizda from "../LandingPage/Haqqimizda";

function FirstPageTwo() {
  return (
    <div>
      <NavbarTwo/>
      <CampaignSection />
      <Videos />
      <WhyUsSection />
      <Haqqimizda/>
      <CourseModulesSection />
      <LearnDrivingSection />

      <FAQSectionTwo />
      <FooterTwo />
    </div>
  );
}

export default FirstPageTwo;
