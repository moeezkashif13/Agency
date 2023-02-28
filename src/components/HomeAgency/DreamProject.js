import { ButtonText } from "../smallcomponents/CommonButtons";

import Image from 'next/image'


export default function DreamProject(){

return(
    <div className="bg-primaryBackground rounded-md   px-6 sm:gap-x-24  sm:px-12 pt-9 pb-12 sm:pb-20  lg:flex lg:flex-row-reverse lg:pb-12">

{/* bg-[url('/DreamProject.png')]

sm:bg-[url('/DreamProject-Desktop.png')] */}

<div className="    relative        w-full  h-[264px] sm:h-[432px] bg-center  bg-contain bg-no-repeat "


>

<Image src={'/DreamProject-Desktop.png'} fill quality={100}  />


</div>





<div className="w-full  ">
    <h1 className="mt-8 text-commonHeading sm:text-commonHeadingDesktop leading-[48px] sm:leading-commonLineHeightDesktop text-white font-extrabold">We’re Help To Build Your Dream Project</h1>
    <p style={{color:'rgba(255, 255, 255, 0.64)'}} className='leading-8 my-4 sm:mt-6 sm:mb-8'>A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.</p>


    <a href="https://www.facebook.com/abdulmoeez121367" target="_blank" >
    <ButtonText secondaryText text="Contact Us" />
    </a>


</div>




    </div>
)

}