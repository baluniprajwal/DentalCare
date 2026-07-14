import Hero from '../components/Hero';
import Process from '../components/Process';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import Features from '../components/Features';
import FeatureTreatment from '../components/FeatureTreatment';
import AdvancedCare from '../components/AdvancedCare';
import ScheduleConsultation from '../components/ScheduleConsultation';
import ClinicLocation from '../components/ClinicLocation';
import AnimateSectionsOnScroll from '../components/AnimateSectionsOnScroll';

export default function HomePage() {
  return (
    <AnimateSectionsOnScroll className="home-page">
      <Hero />
      <Process />
      <AboutUs />
      <Services />
      <Features />
      <FeatureTreatment />
      <AdvancedCare />
      <ScheduleConsultation />
      <ClinicLocation />
    </AnimateSectionsOnScroll>
  );
}
