import Footer from "@/components/Footer";
import DreamProject from "@/components/HomeAgency/DreamProject";
import { ButtonText } from "@/components/smallcomponents/CommonButtons";
import { DifferentPagesHeroSect } from "@/components/smallcomponents/commonComponents";
import FieldDefault from "@/components/smallcomponents/FieldDefault";

export default function Portfolio(){

return(
    <div>


<div className="sm:py-20 bg-blackAlike">

<DifferentPagesHeroSect  heading="Portfolio"  para="Agency provides a full service range including technical skills, design, business understanding." /> 

</div>


<div className="bg-mainBackground">


<div className="commonPadding sm:commonPaddingDesktop">

<div className="flex justify-center py-10 sm:hidden">
<FieldDefault fullWidth   dropdownEnabled  />  
</div>

<div className="hidden sm:block  py-16">



<div className="text-secondaryColor   flex justify-center items-center gap-x-14">

<div className="flex relative">
    <p>Show All</p>
    <p className="absolute  -right-5 bottom-2">14</p>
</div>


<div className="text-secondaryText flex gap-x-14">
<div className="flex relative">
    <p>Design</p>
    <p className="absolute  -right-5 bottom-2">6</p>
</div>
<div className="flex relative">
    <p>Branding</p>
    <p className="absolute  -right-5 bottom-2">4</p>
</div>
<div className="flex relative">
    <p>Illustration</p>
    <p className="absolute  -right-5 bottom-2">3</p>
</div>
<div className="flex relative">
    <p>Motion</p>
    <p className="absolute  -right-5 bottom-2">1</p>
</div>
</div>


</div>



</div>




<div className="flex flex-col  sm:flex-wrap sm:flex-row sm:gap-8 gap-y-20">


{[1,2,3,4,5,6,7,8].map((elem,index)=>{
    return <div className=" relative w-[329px] rounded-md sm:w-[370px]  h-[416px] bg-[#9B9B9B] ">

<div className=" w-full h-full rounded-md   relative bg-cover bg-center bg-no-repeat bg-[url('/background.png')]" >

<div className=" absolute z-10 left-12 bottom-12">

<div className="bg-white text-secondaryColor inline rounded-2xl px-4 py-2.5 ">Design</div>
<p className="text-white text-commonHeading leading-mediumLineHeight font-extrabold mt-6">SOFA</p>


</div>


<div className=" absolute w-full  rounded-md h-full" style={{backgroundColor:'#5C2000',opacity:'0.32',mixBlendMode:'normal'}}></div>


</div>


{/* <div className="absolute bottom-12 left-7">

<span className="px-5 py-2.5 text-secondaryColor bg-white rounded-[20px]  leading-8 ">Design</span>

<p className="mt-6 text-white text-commonHeading leading-mediumLineHeight font-extrabold">SOFA</p>

</div> */}


    </div>
})}


</div>


<div className="pt-12 pb-24 text-center flex justify-center">
<ButtonText  text="LOAD MORE" secondaryText />
</div>




</div>




</div>




<div className="bg-mainBackground commonPadding sm:commonPaddingDesktop">


<DreamProject/>



</div>



<div>

<Footer/>


</div>








    </div>
)

}