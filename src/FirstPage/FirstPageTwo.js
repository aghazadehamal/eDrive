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
import CampaignSectionTwo from './CampaignSectionTwo';
import CourseModulesSectionTwo from './CourseModulesSectionTwo';

function FirstPageTwo() {
  return (
    <div>
      <NavbarTwo/>
      <CampaignSectionTwo />
      <Videos />
      <WhyUsSection />
      <Haqqimizda/>
      <CourseModulesSectionTwo />
      <LearnDrivingSection />

      <FAQSectionTwo />
      <FooterTwo />
    </div>
  );
}

export default FirstPageTwo;
