import { FaLaptopCode, FaPenAlt, FaPeopleArrows } from "react-icons/fa";

export default function Service(){
    return(
        <div className="text-[#391400] sm:commonPaddingTablet">


<p className="uppercase text-primaryColor  leading-8 tracking-[3px]">Services</p>

<h1 className="text-4xl leading-[48px] sm:mt-4 sm:mb-8 font-extrabold">How Our Agency Can Help</h1>


<div className="lg:flex check  rounded-md text-[#391400]  sm:[&>*]:border-r-[1px] sm:[&>*]:border-[#F3D1BF]   ">

 <div className="lg:w-1/3 px-7  py-12 ">


    <div className="text-white w-20 h-20 rounded-full bg-primaryBackground text-3xl flex items-center justify-center">
        <FaPenAlt/>
    </div>
    
    <p className="mt-10 mb-5 text-2xl font-bold leading-8">Design</p>
    
    <p className="leading-8 text-base mb-4" style={{color:'rgba(57, 20, 0, 0.64)'}}>Agency provides a full service range including technical skills, design.</p>
    
    <a href="#!" >Learn More</a>
    
    </div>

    <div className="lg:w-1/3 px-7  py-12 ">

    <div className="text-white w-20 h-20 rounded-full bg-primaryBackground text-3xl flex items-center justify-center">
        <FaLaptopCode/>
    </div>

<p className="mt-10 mb-5 text-2xl font-bold leading-8">Development</p>

<p className="leading-8 text-base mb-4" style={{color:'rgba(57, 20, 0, 0.64)'}}>Full service range including technical skills, design, business.</p>

<a href="#!" >Learn More</a>

</div>

<div className="lg:w-1/3 px-7 py-12 ">

<div className="text-white w-20 h-20 rounded-full bg-primaryBackground text-3xl flex items-center justify-center">
        <FaPeopleArrows/>
    </div>  

<p className="mt-10 mb-5 text-2xl font-bold leading-8">Marketing</p>

<p className="leading-8 text-base mb-4" style={{color:'rgba(57, 20, 0, 0.64)'}}>Technical skills, design, business understanding, ability.</p>

<a href="#!" >Learn More</a>

</div>
    


</div>




        </div>
    )
}