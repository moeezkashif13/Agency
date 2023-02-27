import { ButtonText } from "../smallcomponents/CommonButtons"

import {AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai';
import { FAQ } from "../smallcomponents/commonComponents";
import { FaStar } from "react-icons/fa";

export default function TestimonialsAndPricing(){
    return(

        <div className="bg-[#FDF0E9] px-6 sm:commonPaddingTablet xl:commonPaddingDesktop ">

        <div className="py-12">
            

<div className="sm:text-center ">
<p className="sm:mt-14 mb-5 text-primaryColor uppercase">Testimonials</p>

<p className="text-4xl font-extrabold  sm:leading-[64px] mb-10 sm:mx-auto">What Our Clients Saying</p>

</div>


<div className="lg:flex lg:flex-wrap">


{[1,2,3,4].map((elem,index)=>{
    return <div className=" transition hover:bg-white lg:w-1/2   py-12 px-7 flex flex-col gap-y-8" style={{borderRadius:'6px 6px 0 0',boxShadow:'0px 32px 64px rgba(57, 20, 0, 0.04)',border:'1px solid #F3D1BF'}}>


<div className="flex text-2xl gap-x-2 text-[#F6D021]">

        <FaStar/>
        <FaStar/>
        <FaStar/>
        <FaStar/>
        <FaStar/>

</div>


<p style={{color:'rgba(57, 20, 0, 0.64)'}} className='leading-8'>A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.


{index==0&&' instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.  instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.'}


</p>


<div className="flex gap-x-6 items-center text-secondaryColor">

    <div className="w-20 h-20 rounded-full bg-center bg-no-repeat bg-cover" style={{backgroundImage:`url(https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png)`}}></div>

<div>
    <p className="text-lg sm:text-2xl font-bold">Alan Marti</p>
    <p>Meta Inc.</p>
</div>


</div>




    </div>
})}



</div>




        </div>

{/* PRICING */}
<div className="py-12">


<p className="text-primaryColor">Pricing</p>

<h1 className="sm:mt-5 mb-8 sm:text-[36px] font-extrabold  sm:leading-[64px]">Check Our Pricing Plans</h1>


<div className=" sm:flex sm:flex-wrap gap-7 sm:justify-center">

{[1,2,3].map(()=>{
    return (
        <div className="px-7 py-12 sm:w-[390px] hover:scale-110 transition sm:hover:bg-white sm:odd:bg-transparent  odd:bg-white odd:shadow-lg" style={{border:'1px solid #F3D1BF',borderRadius:'6px 6px 0 0'}}>

<p className="uppercase tracking-common text-primaryColor ">Consultation</p>

<p className="text-commonHeading my-4 text-[#391400] font-extrabold leading-[48px]">Free</p>

<p style={{color:'rgba(57, 20, 0, 0.64)'}} className="leading-8 mb-7">Your digital marketing efforts, instead of handling in-house.</p>

<div>

<div className="flex flex-col gap-y-4">

    {[1,2,3].map((elem,index)=>{
        return <div className="flex gap-x-4 items-center">

<div className={`text-[#391400] w-4 h-4 rounded-full ${index==0?'bg-primaryBackground':'bg-[#F6DACA]'} flex items-center justify-center text-[12px] `}>
            <p className="font-extrabold " >
                
                {index==0?<AiOutlinePlus/>:<AiOutlineMinus/>}
                
                </p>
        </div>



        <p className="text-[#391400]">Brand Design</p>
    </div>
    })}

</div>   
   





<div className="mt-9">

<ButtonText secondaryText text="Contact Us" />

</div>



</div>





        </div>
    )
})}


</div>




</div>
{/* PRICING */}



<FAQ primary />






        </div>


    )
}