import { ButtonText } from "../smallcomponents/CommonButtons"
import { HowWeWork, OurStats } from "../smallcomponents/commonComponents"

export const About  = ()=>{

    return(
        <div className="sm:commonPaddingTablet xl:commonPaddingDesktop  ">


<div className="lg:flex lg:flex-row-reverse sm:gap-x-16 ">

<div className="   bg-contain lg:w-1/2   h-[340px] sm:h-[585px] bg-center bg-no-repeat


bg-[url('/AboutImage.png')]

sm:bg-[url('/AboutImage-Desktop.png')]


">

</div>

<div className="lg:w-1/2">

<p className="uppercase text-primaryColor  leading-8 tracking-[3px]">About</p>


<h1 className="text-4xl sm:my-5 sm:text-[56px] leading-[48px] sm:leading-commonLineHeightDesktop font-extrabold">An Experience Design Agency</h1>

<p className="text-xl leading-8 ">Provides a full service range</p>


<p style={{color:'rgba(57, 20, 0, 0.64)'}} className='leading-8 sm:mt-5 mb-8'>Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.</p>

<ButtonText  secondaryText  text="About Us"/>


</div>


</div>


<OurStats/>



<div className="mt-20">
<HowWeWork/>
</div>



        </div>
    )

}