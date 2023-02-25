import Footer from "@/components/Footer"
import DreamProject from "@/components/HomeAgency/DreamProject"
import HomeAgencyHeroSect from "@/components/HomeAgency/HeroSect"
import { DifferentPagesHeroSect } from "@/components/smallcomponents/commonComponents"
import Navbar from "@/components/smallcomponents/Navbar"
import Link from "next/link"
import { FaChevronLeft, FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa"

export default function SinglePortfolio(){

return (

<>

<Navbar/>

<DifferentPagesHeroSect  heading="Single Portfolio" para="Agency provides a full service range including technical skills, design, business understanding." />

<div className="commonPadding sm:commonPaddingTablet xl:commonPaddingDesktop bg-mainBackground">




<div className="sm:py-8 lg:w-1/2 lg:mx-auto">

<Link href="/portfolio">
<div className="flex items-center gap-x-3  pt-6 text-secondaryColor font-bold text-sm">
    <p><FaChevronLeft/></p>
    <p className="uppercase pt-0.5">Back to portfolio</p>
</div>
</Link>

<div className="text-secondaryColor ">

<h1 className="mt-11 mb-6 font-extrabold text-[55px] sm:text-[72px] sm:leading-[80px] sm:tracking-[-2px] leading-commonLineHeightDesktop " style={{letterSpacing:'-1px'}}>Work Media Project</h1>

<p className="text-xl leading-8">Agency provides a full service range including technical skills, design, business understanding.</p>

<p className="mt-6 mb-14 leading-8 text-secondaryText">Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.</p>


</div>



<div>

<div className=" sm:flex sm:gap-x-52">

<div>
    <span className="text-primaryColor tracking-common uppercase">Category</span>
    <div className="text-secondaryColor mt-3">
    <p>Art Direction</p>
<p>User Interface</p>
<p>Branding Strategy</p>
<p>Print Design</p>
<p>3D Render</p>

</div>
</div>


<div className=" pt-12 pb-16 sm:py-0">


<div>
<span className="text-primaryColor  tracking-common uppercase">Client</span>

    <div className="mt-5">

<img src="/logos/Bitmap-1.png" />

    </div>
</div>

<div className="mt-8">
<span className="text-primaryColor  tracking-common uppercase">Date</span>

    <div className="mt-5 text-xl text-secondaryColor leading-8">Dec 2021</div>
</div>



</div>




</div>




</div>

</div>

<div className="h-[202px] md:h-[720px] w-full rounded-md bg-cover bg-center bg-no-repeat bg-[url('/Background.png')]"></div>



<div className="text-secondaryColor py-[75px] ">

<div >
<p className="text-commonHeading leading-10 font-extrabold">Problem</p>

<div className="text-secondaryText mt-8 mb-16">
    <p className="leading-8">Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.</p>
    <p className="leading-8">A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.</p>
</div>
</div>

<div className=" sm:gap-x-8 lg:flex ">

<div >
<div className="xs:w-[w-full] w-[329px] lg:mx-auto h-[259px] sm:w-[490px] sm:h-[448px] rounded-md flex justify-center items-center mb-4 bg-cover bg-center bg-no-repeat bg-[url('/Background.png')]">

<div className="w-36 h-36 rounded-full border border-[rgba(255, 255, 255, 0.503821)] flex items-center justify-center">
    {/* <p>ppp</p> */}
</div>

</div>
</div>

<div className=" flex flex-wrap xs:justify-between xs:w-full   gap-6  ">

{[1,2,3,4].map(()=>{
    return <div className="xs:w-[46.15%] w-[156px] h-[120px] sm:w-[270px] sm:h-[208px] rounded-md bg-cover bg-center bg-no-repeat bg-[url('/Background.png')]">    </div>
})}



</div>


</div>


</div>



<div className="text-secondaryColor sm:mt-8 ">


<p className="text-commonHeading leading-10 font-extrabold">Solution</p>

<div className="text-secondaryText flex flex-col gap-y-6 mt-8 mb-16">
    <p className="leading-8">Put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.</p>
    <p className="leading-8">Agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.</p>
</div>




</div>



<div className=" flex flex-col items-center">


<p className="text-secondaryText text-sm">SHARE ON</p>


<div className="flex gap-x-2 pt-6 pb-12 text-white">
    
    <a href='https://www.facebook.com/abdulmoeez121367' target="_blank" className="w-12 h-12 flex items-center justify-center text-lg rounded-full bg-primaryBackground">
        <FaFacebookF/>
</a>

<a href='https://wa.me/923364507406' target="_blank" className="w-12 h-12 flex items-center justify-center text-lg rounded-full bg-primaryBackground">
        <FaWhatsapp/>
</a>

<a href='#!' target="_blank" className="w-12 h-12 flex items-center justify-center text-lg rounded-full bg-primaryBackground">
        <FaInstagram/>
</a>


</div>

</div>


<div className="h-[1px] bg-mainBackground w-full"></div>



<div >

<DreamProject/>


</div>

    </div>

    <div>

<Footer/>

</div>


    </>

)

}