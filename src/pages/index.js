import Footer from "@/components/Footer";
import { About } from "@/components/HomeAgency/About";
import DreamProject from "@/components/HomeAgency/DreamProject";
import EventsAndOurTeam from "@/components/HomeAgency/EventsAndOurTeam";
import HomeAgencyHeroSect from "@/components/HomeAgency/HeroSect";
import Service from "@/components/HomeAgency/Service";
import TestimonialsAndPricingAndFaq from "@/components/HomeAgency/TestimonialsAndPricingAndFaq";

export default function Home() {
  return (

    <div className="bg-mainBackground">

<HomeAgencyHeroSect/>

<div className="bg-[#FDF0E9] px-6 py-4 ">

<About/>

<Service/>
</div>


<EventsAndOurTeam/>

<TestimonialsAndPricingAndFaq />



<div className="mt-28 bg-[#FDF0E9]  sm:commonPaddingTablet">

<DreamProject />


</div>


<Footer/>




    </div>

  )
}
