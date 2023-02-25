import { ButtonText } from "../smallcomponents/CommonButtons";
import { BrandsWeWorkedWith } from "../smallcomponents/commonComponents";
import Navbar from "../smallcomponents/Navbar";

export default function HomeAgencyHeroSect(){

    return(
 
<div>

<Navbar/>


 <div className="commonPadding py-4 sm:pb-14 sm:commonPaddingTablet xl:commonPaddingDesktop    bg-[#28293E]">
 

<div className="sm:flex sm:pt-24 pt-12 sm:flex-col-reverse xl:flex-row-reverse    sm:gap-x-16 sm:justify-between">


<div className="w-full h-[335px] lg:mx-auto sm:h-[600px]  sm:w-[570px]  bg-contain bg-no-repeat 


bg-[url('/Bitmap.png')]

sm:bg-[url('/Bitmap-Desktop.png')]



">

{/* <img src="/Bitmap.png" /> */}

</div>

<div className=" w-full xl:w-1/2  relative   ">


<h2 className="uppercase  text-primaryColor text-base tracking-[3px]">Modern Studio</h2>

<p className="text-[56px]  my-6 sm:text-6xl sm:leading-[80px] text-white font-extrabold leading-[64px] tracking-[-1px]">We’re Help To Build Your Dream Project</p>


<p className="leading-8 sm:mb-9" style={{color: 'rgba(255, 255, 255, 0.64)'}}>Agency provides a full service range including technical skills, design, business understanding.</p>


<div className="flex text-white items-center my-6">

<ButtonText text="How we work"/>


<a className="ml-11 leading-8" href="#!">Contact Us</a>


</div>



<div className="flex  ">


<div className="w-12 h-12 min-w-[48px] min-h-[48px] bg-darkPrimaryBackground rounded-full"></div>

<div className="ml-4">

<p className="leading-8 pr-12" style={{color:'rgba(255, 255, 255, 0.64)'}}>"Put themselves in the merchant's shoes"</p>

<p className="text-white">Meta Inc.</p>

</div>
</div>

</div>


</div>


        </div>
    










<div className="commonPadding mt-12">


<BrandsWeWorkedWith/>
    


<div className="w-full h-[1px] bg-[#F3D1BF] mt-12 mb-16"></div>


</div>








        </div>




    
    )

}