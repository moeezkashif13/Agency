import Footer from "@/components/Footer";
import DreamProject from "@/components/HomeAgency/DreamProject";
import { DifferentPagesHeroSect, HowWeWork } from "@/components/smallcomponents/commonComponents";
import { useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";




export default function Services(){

    

return(
    <div>


{/* FIRST SECTION */}
<div className="pt-4 pb-20 bg-blackAlike">
<DifferentPagesHeroSect heading="Services" para="Agency provides a full service range including technical skills, design, business understanding."  />
</div>
{/* FIRST SECTION */}


{/* SECOND SECTION */}


<div className="bg-mainBackground commonPadding sm:commonPaddingTablet xl:commonPaddingDesktop  py-20  lg:flex lg:gap-x-32">

<div className="w-full">
    <p className="uppercase text-primaryColor">Services</p>
    <p className="my-7 text-commonHeading leading-mediumLineHeight  font-extrabold">Digital agency is a business you hire to outsource your digital marketing efforts</p>
</div>

<div className="w-full flex flex-col gap-y-7 sm:mt-12 lg:mt-14 ">
    <p>Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.</p>

<p>A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.</p>

</div>


</div>

{/* SECOND SECTION */}





{/* THIRD SECTION */}


<div className="commonPadding sm:commonPaddingTablet xl:commonPaddingDesktop  bg-mainBackground ">

<div >

{[1,2,3].map((elem,index)=>{
    return <div className="first:border-t-2 border-[#F3D1BF]">


            <div  className="  flex items-center py-12 border-b-2 border-[#F3D1BF] ">

<div className="w-20 h-20 min-w-[80px] rounded-full bg-primaryBackground"></div>

<p className="ml-8 mr-11 font-extrabold text-commonHeading leading-10">Design</p>

<div className="w-8 h-8 min-w-[32px] sm:ml-auto rounded-full bg-primaryColor flex items-center justify-center text-white">

<FaChevronDown/>

</div>


</div>


{index==0&&

<div className="   pt-16 pb-20 lg:w-1/2 lg:ml-auto " >


<p className="font-bold  text-secondaryColor text-2xl sm:text-commonHeading sm:leading-mediumLineHeight sm:font-extrabold">Agency is a business you hire to outsource your digital marketing efforts</p>

<p className="mt-7 mb-11 text-secondaryText">Business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.</p>


<div className="flex flex-col gap-y-4">


<div className=" flex  gap-x-4 items-center font-medium">

<div className="w-8 h-8 rounded-full bg-primaryColor"></div>

<p className="pt-1">Web Development</p>

</div>

<div className="flex  gap-x-4 items-center font-medium">

<div className="w-8 h-8 rounded-full bg-primaryColor"></div>

<p className="pt-1">Brand Strategy</p>

</div>

<div className="flex  gap-x-4 items-center font-medium">

<div className="w-8 h-8 rounded-full bg-primaryColor"></div>

<p className="pt-1">Art Direction</p>

</div>


</div>



</div>




} 


    </div>

})}







</div>

</div>



{/* THIRD SECTION */}



<div className="bg-mainBackground commonPadding sm:commonPaddingTablet xl:commonPaddingDesktop pt-20">

<HowWeWork/>


</div>

<div className="commonPadding sm:commonPaddingTablet s xl:commonPaddingDesktop bg-mainBackground">

<DreamProject/>

</div>



<div>

<Footer/>


</div>





    </div>
)



}